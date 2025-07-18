"use client" 

import { createContext, useContext } from "react"; 

export type Course = {
  id: number;
  title: string;
  slug: string;
  price: number;
  category: string;
  course_image: string;
  training_space: string;
  language: string;
  description: string;
  duration: number;
};

const CourseContext = createContext<Course[]| null>(null); 

export const useCourse = () =>{
    const context = useContext(CourseContext); 
    if(!context){
        throw new Error("useCourses must be used inside a CoursesProvider");
    } 
    return context;
}

export default CourseContext
