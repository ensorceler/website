/* eslint-disable react/no-unescaped-entities */
const ProfileDescriptionCard = () => {
  return (
    <div className="h-full bg-indigo-800 rounded-2xl text-white p-4 overflow-hidden flex flex-col md:gap-2">
      <p className="font-overpassMono font-semibold md:text-lg">
        hello World ⭐
      </p>

      <p className="text-sm md:text-base ">
        My name is Shakil Ahmed, I’m a software engineer with expertise in web
        development and mobile applications. I have tried my hand at a bunch of
        things and am constantly pushing myself to learn and master new stuff.
        <br />
        When I'm not coding, I enjoy watching anime shows and reading science
        fiction books. It's a great way for me to unwind and escape from the
        world of programming.
      </p>
    </div>
  );
};

export default ProfileDescriptionCard;
