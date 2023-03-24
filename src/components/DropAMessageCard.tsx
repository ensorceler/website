import React from "react";

const DropAMessageCard = () => {
  return (
    <div className="px-6 py-4 bg-lime-400 h-64 rounded-2xl flex flex-col gap-2 items-start ">
      <p className="font-overpassMono font-medium">Let&apos;s talk</p>
      <p className="text-sm">
        Drop me a message with the form below, I&apos;ll get back to the
        non-spam
      </p>

      <input
        className="w-full py-1 px-2 rounded-md border border-black text-sm placeholder:text-neutral-600 placeholder:text-sm focus:outline-none focus:border focus:border-sky-600"
        placeholder="hi@shakil.sh"
      />
      <textarea
        className="w-full h-full py-1 px-2 rounded-md border border-black text-sm placeholder:text-neutral-600 placeholder:text-sm focus:outline-none focus:border focus:border-sky-600"
        placeholder="Your message"
      />
      <div className="w-full flex flex-row justify-end items-center">
        <button className="w-full md:w-64 py-2 bg-black rounded-lg text-white text-sm font-medium active:scale-95 cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};
export default DropAMessageCard;
