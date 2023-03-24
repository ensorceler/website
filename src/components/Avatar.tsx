import Image from "next/image";
import { avatarImg } from "../../public/assets";

const Avatar = () => {
  return (
    <Image
      src={avatarImg?.src}
      fill
      className="brightness-95"
      alt="avatar_image"
    />
  );
};

export default Avatar;
