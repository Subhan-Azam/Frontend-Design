import React from "react";
import Image from "next/image";

export default function OurProcess() {
  return (
    <>
      <div className="py-16 lg:my-4 flex flex-wrap-reverse justify-around items-center">
        <div className="max-w-[600px]">
          <div className="flex flex-col py-2 px-5 gap-5 w-full">
            <div className="text-lg font-bold ">
              01 <span className="text-red-900">.</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Scoping & Estimation</h2>
            </div>
            <div>
              <p>
                Get the right suggestions for your business plan, validate your
                idea, and set down the tool stack, teams, and the right approach
                required for the next round.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[400px]">
          <Image
            width={400}
            height={400}
            src="/assets/img2.jpg"
          />
        </div>
      </div>
    </>
  );
}
