'use client';

import React from 'react';
import Link from 'next/link';

type Course = {
  id: number;
  title: string;
  imageUrl: string;
};

type Props = {
  courses: Course[];
  seeMoreUrl?: string;
};

const HorizontalCourseList: React.FC<Props> = ({ courses, seeMoreUrl = '/courses' }) => {
  return (
    <div className="relative p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Formations Populaires</h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 text-center"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-md"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">{course.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Link
          href={seeMoreUrl}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Voir plus →
        </Link>
      </div>
    </div>
  );
};

export default HorizontalCourseList;
