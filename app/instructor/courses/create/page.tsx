"use client";
import AddCourseForm from "@/components/courses/AddCourseForm";
// import AddCourseHighlight from "@/components/courses/AddCourseHighlight";
// import AddCourseModule from "@/components/courses/AddCourseModule";
import AddCourseOutcomePage from "@/components/courses/AddCourseOutcome";
import StepTitle from "@/components/courses/StepTitle";
import { useEffect, useState } from "react";

export default function CreateCoursePage() {
  const [step, setStep] = useState(1);
  const [courseId, setCourseId] = useState<number | null>(null);

  // Charger un brouillon existant

  useEffect(() => {
    const saveId = localStorage.getItem("draftCourseId");
    if (saveId) {
      setCourseId(Number(saveId));
    }
  }, []);

  // Gestion du passage à l’étape suivante
  const goNext = (id?: number) => {
    setStep((prev) => {
      if (prev === 1 && !id && !courseId) return prev; // pas d'avancée sans course créée
      return Math.min(prev + 1, 3);
    });
  };

  // Gestion du retour en arrière
  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  function handleCourseCreated(id: number) {
    setCourseId(id);
    localStorage.setItem("draftCourseId", id.toString());
    goNext(id);  

    
  }

  return (
    <div className="">
      {step === 1 && (
        <>
          <StepTitle title="Step 1: Create a course " />
          <AddCourseForm onCourseCreated={handleCourseCreated} />
        </>
      )}

      {step === 2 && courseId && (
        <>
          {" "}
          <StepTitle title="Step 2: Create outcome about your course" />
          <AddCourseOutcomePage courseId={courseId} />
          <div className="mt-4 flex justify-between">
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ⬅ Back
            </button>
            <button
              onClick={goNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
{/* 
      {step === 3 && courseId && (
        <>
          {" "}
          <StepTitle title="Step 3: Create Highlight about your course" />
          <AddCourseHighlight />
          <div className="mt-4 flex justify-between">
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ⬅ Back
            </button>
            <button
              onClick={goNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next ➡
            </button>
          </div>
        </>
      )} */}
      {/* {step === 4 && courseId && (
        <>
          <StepTitle title="Step 3: Add module to your course" />
          <AddCourseModule />
          <div className="mt-4 flex justify-between">
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ⬅ Back
            </button>
            <button
              onClick={() => alert("✅ Course creation finished!")}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Finish 🎉
            </button>
          </div>
        </>
      )} */}
    </div>
  );
}
