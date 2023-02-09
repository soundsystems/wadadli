import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, animate, motion as m, useMotionValue, MotionConfig } from "framer-motion";
import useKeypress from "react-use-keypress";
import { useGesture } from "@use-gesture/react";
type Props = {};

export default function Gallery({}: Props) {

  let images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
    "/images/13.webp",
    "/images/14.webp",
    "/images/15.webp",
    "/images/16.webp",
    "/images/17.webp",
  ];

  let collapsedAspectRatio = 1 / 3;
  let fullAspectRatio = 3 / 2;
  let gap = 2;
  let margin = 12;

  const [index, setIndex] = useState(0);

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  });

  return (
    <>
      <MotionConfig transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}>
        <div className="pt-48 pb-16">
          <div className="mx-auto flex h-full max-w-3xl flex-col justify-center">
            <div className="relative overflow-hidden">
              <m.div animate={{ x: `-${index * 100}%` }} className="flex">
                {images.map((image, i) => (
                  <m.img
                    key={image}
                    src={image}
                    animate={{ opacity: i === index ? 1 : 0.3 }}
                    className="aspect-[3/2] rounded-xl object-cover"
                  />
                ))}
              </m.div>
              <AnimatePresence initial={false}>
                {index > 0 && (
                  <m.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100"
                    onClick={() => setIndex(index - 1)}
                  >
                    <ChevronLeftIcon className="h-6 w-6 text-orange-500 transition-transform duration-500 hover:h-8 hover:w-8" />
                  </m.button>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {index + 1 < images.length && (
                  <m.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100"
                    onClick={() => setIndex(index + 1)}
                  >
                    <ChevronRightIcon className="h-6 w-6 text-orange-500 transition-transform duration-500 hover:h-8 hover:w-8" />
                  </m.button>
                )}
              </AnimatePresence>
            </div>

    
            <m.div
              className= "inset-x-0 bottom-6 flex justify-center overflow-hidden pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <m.div
                initial={false}
                animate={{
                  x: `-${
                    index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                    index * gap +
                    margin
                  }%`,
                }}
                style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
                className="flex h-24 md:h-28 lg:h-32 xl:h-36"
              >
                {images.map((image, i) => (
                  <m.button
                    key={image}
                    onClick={() => setIndex(i)}
                    whileHover={{ opacity: 1 }}
                    initial={false}
                    animate={i === index ? "active" : "inactive"}
                    variants={{
                      active: {
                        marginLeft: `${margin}%`,
                        marginRight: `${margin}%`,
                        opacity: 1,
                        aspectRatio: fullAspectRatio,
                      },
                      inactive: {
                        marginLeft: "0%",
                        marginRight: "0%",
                        opacity: 0.5,
                        aspectRatio: collapsedAspectRatio,
                      },
                    }}
                  >
                    <m.img src={image} className="h-full rounded-xl object-cover" />
                  </m.button>
                ))}
              </m.div>
            </m.div>
   
          </div>
        </div>
      </MotionConfig>
    </>
  );
}
