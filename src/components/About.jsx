import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          As a fourth-year Computer Science undergraduate student, I am passionate about coding and continuously strive to enhance my skills. With a focus on MERN stack development, I have successfully completed multiple projects, honing my abilities in both frontend and backend web development. Additionally, I possess a strong understanding of machine learning and am actively exploring the realm of blockchain technology. I aim to leverage my knowledge and expertise to contribute meaningfully to the field of technology, embracing new challenges with enthusiasm and a drive for excellence.
        </p>

        <br />

        {/* <p className="text-xl">
          I am a third-year Computer Science undergraduate student with a passion for coding. Proficient in the MERN stack, I have undertaken multiple projects to enhance my skills. Additionally, I possess knowledge in machine learning and am actively exploring the domain of blockchain. My dedication to learning reflects my commitment to becoming a well-rounded developer.
        </p> */}
      </div>
    </div>
  );
};

export default About;
