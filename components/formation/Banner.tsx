import React from "react";

import courses from "@/utils/cours";
import Link from "next/link";

function FormationBanner() {
  return (
    <section className="py-20">
      <div>
        <h1 className="text-7xl font-bold mb-5"> Ensemble de formation</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          cupiditate ipsa labore recusandae illo magni ipsum, neque autem. Vel,
          distinctio.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <Link href={`/formation/${course.title}`}>
                <div className="h-60 border rounded-xl shadow-lg px-5 py-5 ">
                  <h5 className="font-bold hover:text-purple-600">
                    {course.title}
                  </h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FormationBanner;
