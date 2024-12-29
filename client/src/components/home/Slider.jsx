import Image from "next/image";
import React from "react";
import Container from "../common/Container";

function Slider() {
  return (
    <Container>
      <div className="w-full flex py-[4rem]">
        <Image
          src="/images/hero2.png"
          height={200}
          width={400}
          className="max-2xl:hidden"
        />
        <div className="flex flex-col w-full items-center justify-center gap-4">
          {/* hero content of my lms with sentiment analysis with facial expression to report about the cource to the lecturar */}
          <h1 className="text-3xl font-bold text-gray-800 text-center leading-10">
            Ai driven LMS with sentiment analysis and facial expression to
            report about the course to the lecturer
          </h1>
          <p className="text-sm font-light text-center leading-6">
            welcome to the future of learning. we are here to help you learn
            better and faster with our Ai driven LMS. we provide you with the
            best learning experience and help you improve your learning with our
            sentiment analysis and facial expression to report about the course
            to the lecturer. we are here to help you learn better and faster
            with our Ai driven LMS.
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
            <button className="border border-primary text-priborder-primary px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <Image
          src="/images/hero3.png"
          height={200}
          width={400}
          className="-mb-2 max-2xl:hidden"
        />
      </div>
    </Container>
  );
}

export default Slider;
