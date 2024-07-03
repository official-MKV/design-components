import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
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
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
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

  const scrollRef = useRef(null);
  const screen = window.innerHeight;
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const heights = Imagelinks.map((_, key) =>
    useTransform(
      scrollYProgress,
      [key / Imagelinks.length, (key + 1) / Imagelinks.length],
      ["100%", "0%"]
    )
  );

  useEffect(() => {
    heights.forEach((height, index) => {
      height.onChange((value) => {
        console.log(`Height of image ${index}: ${value}`);
      });
    });
  }, [heights]);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll Y Progress:", latest);
    });
    const unsubscribeY = y.onChange((latest) => {
      console.log("Scroll Y trans Progress:", latest);
    });

    return () => {
      unsubscribe();
      unsubscribeY();
    };
  }, [scrollYProgress]);

  return (
    <div className="relative h-screen flex w-full overflow-hidden ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div
        className="sticky h-screen w-full  flex overflow-auto "
        ref={scrollRef}
      >
        <div className="relative h-screen w-[30%] ">
          <motion.div className="w-full h-screen " style={{ y }}>
            {textContent.map((item, key) => (
              <motion.div
                id="text_content"
                className="h-screen flex items-center justify-center flex-col gap-[20px] text-center"
                key={key}
              >
                <span className="text-[30px] font-bold">{item.title}</span>
                <span>{item.subtext}</span>
                <div className="px-[20px] py-[10px] bg-[black] text-[white] font-bold rounded-[3px]">
                  {item.cta.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div id="images" className="absolute right-0 h-screen w-[70%]">
          {Imagelinks.map((item, key) => {
            const height = heights[key];
            return (
              <motion.div
                id="images_content"
                className="fixed h-[100vh] bottom-0 w-[70%] bg-cover origin-top"
                style={{
                  backgroundImage: `url('${item.img}')`,
                  height,
                  zIndex: -(key + 1) * 10,
                }}
                key={key}
              ></motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
