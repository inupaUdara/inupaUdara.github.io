import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/footer-grid.svg?alt=media&token=2c9f532f-0c9f-433c-89ec-bc6341e5d32b')]" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-96 min-h-96">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/footer-grid.svg?alt=media&token=2c9f532f-0c9f-433c-89ec-bc6341e5d32b"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Contact</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out to me today for inquiries or collaborations!.
        </p>
        <a href="mailto:inupaudara2@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-3">
          Copyright © {currentYear} Inupa Udara
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-zinc-950 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
