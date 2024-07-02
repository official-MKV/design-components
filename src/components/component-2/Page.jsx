import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import { scroll, useTransform, useScroll } from "framer-motion";

const Page = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const Imagelinks = [
    {
      title: "Innovative Design Solutions",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    {
      title: "Expert Development Team",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
    {
      title: "Custom Software Development",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1b",
    },
    {
      title: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Continuous Support",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    },
  ];
  const textContent = [
    {
      title: "Innovative Design Solutions",
      subtext: "Creating visually stunning and user-friendly interfaces.",
      cta: {
        text: "Learn More",
        link: "/design",
      },
    },
    {
      title: "Expert Development Team",
      subtext: "Building robust and scalable web applications.",
      cta: {
        text: "Our Work",
        link: "/development",
      },
    },
    {
      title: "Custom Software Development",
      subtext: "Tailored solutions to meet your business needs.",
      cta: {
        text: "Get a Quote",
        link: "/contact",
      },
    },
    {
      title: "UI/UX Design",
      subtext: "Enhancing user experiences through thoughtful design.",
      cta: {
        text: "See Our Portfolio",
        link: "/portfolio",
      },
    },
    {
      title: "Continuous Support",
      subtext: "Providing ongoing maintenance and updates.",
      cta: {
        text: "Support Plans",
        link: "/support",
      },
    },
  ];
  const [clicked, setClicked] = useState(0);
  const Click = () => {};
  return (
    <div class="relative h-full w-full bg-white flex overflow-hidden">
      <div className="relative h-full flex-[0.5]" ref={scrollRef}>
        <div className=" flex flex-col overflow-y-scroll" id="text">
          {textContent.map((item, key) => {
            return (
              <motion.div
                id="text_content"
                className="w-full h-screen flex items-center justify-center flex-col gap-[20px] text-center "
              >
                <span className="text-[30px] font-bold">{item.title}</span>
                <span>{item.subtext}</span>
                <div className="px-[20px] py-[10px] bg-[black] text-[white] font-bold rounded-[3px]">
                  {item.cta.text}
                </div>
              </motion.div>
            );
          })}
        </div>
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px]  [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <div
        id="images"
        className="relative w-full h-screen flex-1 bg-[green] flex flex-col "
      >
        {Imagelinks.map((item, key) => {
          return (
            <motion.div
              id="images_content"
              className={`absolute w-full  h-screen  bg-cover `}
              style={{ backgroundImage: `url('${item.img}')`, height }}
            ></motion.div>
            // <img
            //   src={item.img}
            //   style={{ objectFit: "cover" }}
            //   className="relative w-full h-screen"
            //   key={key}
            //   alt={item.title}
            // />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
