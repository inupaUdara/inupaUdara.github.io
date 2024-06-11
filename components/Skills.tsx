import { skills } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">Skills</h1>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 max-lg:mt-10">
          {skills.map(({id, img, name})=> (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2 items-center'>
                <img src={img}
                alt={name}
                className="md:w-10 w-6"/>
                <p className="text-sm sm:text-lg">{name}</p>
                {/* <img src={nameImg}
                alt={name}
                className="md:w-24 w-20"/> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
