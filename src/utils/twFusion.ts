import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const twFusion = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default twFusion;
