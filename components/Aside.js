import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import Tools from "./Tools";
import ContactForm from "./ContactForm";
import { BsArrowRightCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

const Aside = () => {
  return (
    <>
      <div className="bg-white border-black border-b-2 border-r-2">
        <div className="flex justify-center flex-col p-5">
          <p className="">
            Hi there, {"I'm"} Elsa. All of my featured website projects are
            listed here.
          </p>
          <BsArrowRightCircleFill />
          <div className="relative pr-[80px] pl-1 my-3">
            <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
          </div>
          <p>
            I am always looking for opportunities to further my skills... and
            work with other like minded people in tech. If you would like to
            contact me, you can reach me <Link href="/#contact">here.</Link>
          </p>
        </div>

        <div
          className="flex justify-center flex-col p-5"
          style={{ borderTop: "solid 2px #000" }}
        >
          <div>
            <ul>
              <li>
                <h2 style={{ paddingBottom: "10px" }}>
                  A little bit about me...
                </h2>
                <div className="font-bold"> 2020-2023:</div>
                <p>
                  {"I'm"} based in Joshua Tree, CA. My days are spent working on
                  my websites, and freelance projects. I am also very interested
                  in working with other developers to gain team building
                  experience, and build up a network to bounce ideas off of.
                </p>
                <Tools />
                <p>
                  During the last few years, {"I've"} learned how to program
                  websites using javascript and javascript frameworks. {"I've"}{" "}
                  utilized resources such as: youtube developer tutorials,
                  Freecodecamp, The Odin Project and Geeks for Geeks.
                </p>
              </li>
              <li>
                <div className="mt-[50px] font-bold"> 2008-2020:</div>
                <p>
                  All of my work experience and studies had revolved around food
                  during this time. I worked in small restaurants, assisted
                  living kitchens, and learned how to cook.{" "}
                </p>

                <p>
                  In 2016, I graduated with a bachelors degree in Nutrition and
                  Food Science. From 2018-2020, I worked as a dietary manager,
                  and loved it until I desired a change. That was when I started
                  looking for more creative employment in web design and
                  progamming.
                </p>
              </li>
            </ul>
            dfds
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
