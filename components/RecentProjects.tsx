import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-10 sm:gap-y-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] sm:h-[41rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[24vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/bg.png?alt=media&token=aa73e9ca-5b6a-41db-b824-54a0f9282079"
                    alt="bg-img"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 rotate-6"
                  width={530}
                  height={350}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="image"
                        className="p-2"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      GitHub Repo
                    </p>
                    <FaGithub className="ms-3" color="#cbacf9" />
                  </div>
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
