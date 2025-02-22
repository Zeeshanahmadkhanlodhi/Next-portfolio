

import Image from "next/image";
import { Button } from "../components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Work from "./projects/page";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-center xl:text-left">Full Stack Engineer | Data Scientist </span>
            <h1 className="h1 mb-6">{"Hello I'm"} <br /> <span className="text-accent-hover">Zeeshan Ahmad</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa, in eos nisi vitae fuga assumenda expedita optio, totam laboriosam est consectetur consequatur ab quasi consequuntur quam rerum, enim repellat?
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownloadCloud  />
              </Button>
              <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex  gap-6" iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Work/>
    </section>
  );
}
