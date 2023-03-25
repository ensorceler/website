import Image from "next/image";
import { nightGif } from "../../../public/assets";
import { motion } from "framer-motion";

const NightCard = ({ time }: { time: string }) => {
  return (
    <div className="relative bg-sky-900 rounded-2xl overflow-hidden">
      <Image
        src={nightGif?.src}
        className="brightness-125"
        fill
        alt="nightime_gif"
      />
      <div className="relative w-full h-full z-10 flex justify-center items-center ">
        <div className="flex flex-col gap-0.5 items-center">
          <p className="font-medium text-white text-glow-white/5">{time}</p>
          <p className="font-medium text-xs text-white/75">in India</p>
        </div>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pt-2 pl-2 "
      >
        <motion.div>
          <div className="  pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
            <div className=" pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
              <motion.div
                initial={false}
                animate={{
                  // invert the parent's scale to make the child appear to be the same size
                  scale: [1, 0.9, 0.9, 1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-neutral-400 w-10 h-10 md:w-6 md:h-6 rounded-tl-full relative"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NightCard;
