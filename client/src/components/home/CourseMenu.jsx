"use client";
import Image from "next/image";
import React, { useState } from "react";

const courses = [
  "Data Science",
  "Web Development",
  "Communication",
  "Business Analytics",
];

function CourseMenu() {
  const [currentCourse, setCurrentCourse] = useState(courses[0]);
  return (
    <div className="py-2">
      <div className="flex space-x-6 border-b-[1.5px] border-black/[0.5]">
        {courses.map((data) => (
          <button
            key={data}
            onClick={() => setCurrentCourse(data)}
            className={`tracking-wide hover:border-black transition-all ease py-1 ${
              currentCourse == data ? "border-b-[1.5px] border-black" : ""
            }`}
          >
            {data}
          </button>
        ))}
      </div>
      <CoursesList />
    </div>
  );
}

export default CourseMenu;

const courseDetails = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data Science with harish kumar",
    description:
      "Data Science is a field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data.",
    duration: "6 months",
    href: "/data-science",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web Development with harish kumar",
    description:
      "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).",
    duration: "6 months",
    href: "/web-development",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Communication with harish kumar",
    description:
      "Communication is the act of conveying meanings from one entity or group to another through the use of mutually understood signs, symbols, and semiotic rules.",
    duration: "6 months",
    href: "/communication",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Analytics with harish kumar",
    description:
      "Business analytics is the practice of iterative, methodical exploration of an organization's data, with an emphasis on statistical analysis.",
    duration: "6 months",
    href: "/business-analytics",
  },
];

const CoursesList = () => {
  return (
    <div className="w-full py-4">
      <div className="w-full h-fit overflow-hidden p-2 flex flex-nowrap gap-6">
        {courseDetails.map((data) => (
          <Card
            key={data.id}
            img={data.img}
            title={data.title}
            description={data.description}
            duration={data.duration}
            href={data.href}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ img, title, description, duration, href }) => {
  return (
    <div className="max-w-[300px] min-h-[300px] bg-white rounded-lg shadow-md">
      <Image
        src={img}
        alt={title}
        height={200}
        width={400}
        className="rounded-t-lg w-[300px] h-[200px]"
      />
      <div className="px-4 py-2 w-full flex flex-col justify-between gap-1">
        <div className="">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm text-gray-600 text-ellipsis line-clamp-3">{description}</p>
          <p className="text-sm text-gray-600">{duration}</p>
        </div>
        <a href={href} className="w-full p-2 text-white bg-primary text-center rounded-xl">
          Enroll Now
        </a>
      </div>
    </div>
  );
};
