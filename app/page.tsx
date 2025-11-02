'use client'

import RotatingCube from "@/components/RotatingCube";

export default function Home() {
  return (
        <main className="">
          <div className="w-full flex justify-center items-center mt-20 space-x-10">
            <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
            <RotatingCube />
          </div>
              <div className="flex flex-col m-28 whitespace-break-spaces">
                <h2 className="font-bold">About this blog</h2>
                <p className="my-4">This blog reflects my personal vision of the technological evolution shaping our world — with a particular focus on Bitcoin and blockchain, two forces driving one of the most profound disruptions of our time.

I’m genuinely passionate about these technologies and their potential to redefine the way we think about trust, value, and human interaction in the digital age.

Beyond expressing my ideas, this space also serves as a platform to share knowledge, explore innovation, and present my projects, highlighting my continuous journey as a developer and thinker in the field of emerging technologies.
</p>
</div>    
  </main>
  );
}
