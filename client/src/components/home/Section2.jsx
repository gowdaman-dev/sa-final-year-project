import React from "react";
import Container from "../common/Container";
import CourseMenu from "./CourseMenu";

function Section2() {
  return (
    <Container containerStyle="bg-orange-50">
      <div className="w-full p-8">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-gray-800 text-center leading-10">
            All the skills you need in one place
          </h1>
          <p className="text-sm font-light text-center leading-6">
            From critical skills to technical topics, LearnoPedia supports your
            professional development.
          </p>
        </div>
        <CourseMenu />
      </div>
    </Container>
  );
}

export default Section2;
