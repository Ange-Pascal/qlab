"use client";
import AddCourseForm from "@/components/courses/AddCourseForm";
// import AddCourseOutcomePage from "@/components/courses/AddCourseOutcome";
import StepTitle from "@/components/courses/StepTitle";


export default function CreateCoursePage() {
  


  return (
    <div className="">
      
      <StepTitle title = " Étape 1 sur X — Informations de base"/>
      <AddCourseForm/> 
      {/* <AddCourseOutcomePage/> */}
      <AddCourseForm/>
      <AddCourseForm/>
      <AddCourseForm/>

     
    </div>
  );
}
