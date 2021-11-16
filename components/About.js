import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center font-bold md:text-7xl md:text-left">
          The Story so far
        </h1>

        <p className="text-xl mt-5 px-5">
          At ten years old, I found out what a computer was and what it could
          do. Being able to play online games together with friends, socialize
          over the web and being able to explore another country on Google Maps.
          All of this was possible only because of technology and the web.
          Little did I know, much of what I was interacting with was called UI.
          I had no idea how it was created nor what front-end development was.
        </p>
        <p className="text-xl mt-5 px-5">
          Fast forward to the summer of 2018, I was introduced to the world of
          React and web development. Coding various UI components and
          interacting with them on the screen was fascinating and knowing that
          someone else was going to see my work and interact with it gave me a
          great sense of reward and accomplishment. It was as if I was creating
          something for my younger self and it is empowering to know that I can
          create these things that I could not have imagined at ten years old.
        </p>
        <p className="text-xl my-5 px-5">
          Yes, CSS is still a pain but in the end, it is well worth it.
        </p>
        <h1 className="mx-5 bg-red-500 text-xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
          Tech Stack
        </h1>
        <div className="flex flex-row flex-wrap mt-8 mx-5 gap-4">
          <Image alt="next icon" src="/icons/next.svg" height={75} width={75} />
          <Image
            alt="react icon"
            src="/icons/react.svg"
            height={75}
            width={75}
          />
          <Image
            alt="angular icon"
            src="/icons/ang.svg"
            height={75}
            width={75}
          />
          <Image
            alt="tailwind icon"
            src="/icons/tail.svg"
            height={75}
            width={75}
          />
          <Image
            alt="material icon"
            src="/icons/material.svg"
            height={75}
            width={75}
          />
          <Image
            alt="redux icon"
            src="/icons/redux.svg"
            height={75}
            width={75}
          />
          <Image alt="sass icon" src="/icons/sass.svg" height={75} width={75} />
          <Image
            alt="javascript icon"
            src="/icons/js.svg"
            height={75}
            width={75}
          />
          <Image
            alt="html icon"
            src="/icons/html5.svg"
            height={75}
            width={75}
          />
          <Image alt="css icon" src="/icons/css3.svg" height={75} width={75} />
          <Image
            alt="firebase icon"
            src="/icons/firebase.svg"
            height={75}
            width={75}
          />
        </div>
      </div>
    </section>
  );
}
