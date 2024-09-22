import Text from "../../Text/Text";
import { AboutIcon } from "../icons";
import HeroNav from "./HeroNav";
import HireMeButton from "./HireMeButton";
import ResumeButton from "./ResumeButton";
import { m } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* text */}
      <div className="relative w-full mx-auto">
        {/* name */}
        <div className="w-full font-bold text-cyan font-pop">
          <m.p
            className="mb-4 text-lg font-pop md:text-xl md:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.55 },
            }}
          >
            Hi there, 👋I&apos;m
          </m.p>
          <m.h1
            className="flex items-center space-x-5 pb-7 font-pop text-text text-3xl sm:text-4xl md:text-[5rem] md:leading-[1.3]"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
          >
            <span className="relative text-cyan before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 md:before:h-2 md:before:-bottom-3 before:block before:bg-cyan before:rounded-full">
              Zaheer.
            </span>
          </m.h1>
        </div>
        {/* brief about */}
        <div className="w-full mb-6 ">
          <m.p
            className="text-text_Light text-3xl sm:text-4xl md:text-6xl font-semibold md:leading-[1.3]"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.7 },
            }}
          >
            I build impactful solutions for the web.
          </m.p>
        </div>
        {/* brief about info */}
        <div className="max-w-[40.75rem]">
          <m.p
            className="text-text_Light text-base md:text-xl md:leading-[1.3]"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.8 },
            }}
          >
            As a <span className="text-cyan">Software Engineer</span>, I
            specialize in building dynamic, scalable web applications. I have
            contributed to projects like <Text text="nonoise.ai" />, an
            automated telecalling solution, and <Text text="Algohire" />, a
            recruitment platform designed to streamline the hiring process. My
            focus is on creating user-friendly, efficient platforms leveraging
            modern technologies like{" "}
            <Text text="React.js, Next.js, Node.js, AWS" /> and more. I’m
            passionate about delivering optimal, long-term solutions that
            enhance user experiences and drive business growth.
          </m.p>
        </div>
        {/* buttons */}
        <m.div
          className="flex items-center w-full mb-10 space-x-5 md:space-x-7 mt-11 md:mt-14"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
        >
          <HireMeButton />
          <ResumeButton />
        </m.div>
        {/* btn2 */}
        <m.div
          className="flex items-center space-x-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
        >
          <HeroNav name="learn about me">
            <AboutIcon height="4" width="4" />
          </HeroNav>
        </m.div>
      </div>
    </div>
  );
};

export default HeroSection;
