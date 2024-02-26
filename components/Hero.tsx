import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100%] mt-[10vh]">
      <div className="relative h-[50%] w-[80%] left-[13%]">
        <Image
          fill
          priority
          src="/Images/YNHero.png"
          alt="Hero"
          className="rounded-[5%]"
        />
      </div>
      <div className="relative mt-[5%] left-[10%]">
        <h1 className="text-[5vh] font-bold w-[80%] text-[#4c4b4b] leading-1">
          Your Best friends during exams
        </h1>
        <h1 className="text-[2.4vh] font-semibold">100% Automatically and </h1>
      </div>
    </div>
  );
}

export default Hero
