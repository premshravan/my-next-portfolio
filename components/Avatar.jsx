// next image

import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image 
      src={'/profile.png'}
      width={747}
      height={688}
      alt=""
      className="translate-z-0 h-full w-full rounded-md  "
      />
    </div>
  )
};

export default Avatar;
