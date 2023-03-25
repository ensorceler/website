import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const DropAMessageCard = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const web3FormRequest = async (email: string, message: string) => {
    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        access_key: "be58b001-482b-4df4-b8f4-4329d8d4c265",
        email: email,
        message: message,
      }),
    });
    const response = await res.json();
    setLoading(false);
    toast.remove();
    setSubmitted(true);
    toast.success("Thanks!!!", {
      id: "success",
      duration: 7000,
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const email: string = e?.target?.[0].value;
    const message: string = e?.target?.[1].value;
    await web3FormRequest(email, message);
  };

  useEffect(() => {
    if (loading) {
      toast.loading("Sending...");
    }
  }, [loading]);

  if (submitted) {
    return (
      <div className="px-6 py-4 bg-lime-400 rounded-2xl flex flex-col gap-2 items-start  text-center">
        <p className="text-lg md:text-2xl font-bold">Thanks!</p>
        <p className="text-sm md:text-base text-black/80">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={submitHandler}
      className="px-6 py-4 bg-lime-400 h-64 rounded-2xl flex flex-col gap-2 items-start "
    >
      <p className="font-overpassMono font-medium">Let&apos;s talk</p>
      <p className="text-sm">
        Drop me a message with the form below, I&apos;ll get back to the
        non-spam
      </p>

      <input
        type="email"
        className="w-full py-1 px-2 rounded-md border border-black text-sm placeholder:text-neutral-600 placeholder:text-sm focus:outline-none focus:border focus:border-sky-600"
        placeholder="hi@shakil.cloud"
      />
      <textarea
        className="w-full h-full py-1 px-2 rounded-md border border-black text-sm placeholder:text-neutral-600 placeholder:text-sm focus:outline-none focus:border focus:border-sky-600"
        placeholder="Your message"
      />
      <div className="w-full flex flex-row justify-end items-center">
        <button
          type="submit"
          className="w-full md:w-64 py-2 bg-black rounded-lg text-white text-sm font-medium active:scale-95 cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
};
export default DropAMessageCard;
