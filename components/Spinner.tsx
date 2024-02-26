import React from 'react'
import Image from "next/image"

const Spinner = () => {
  return (
    <div className="absolute top-[50%] left-[45%] h-[10%] w-[10%] bg-neutral-950">
      <Image
        fill
        priority
        src="/Images/Loading.svg"
        alt="loading"
        className="invert "
      />
    </div>
  );
}

export default Spinner
