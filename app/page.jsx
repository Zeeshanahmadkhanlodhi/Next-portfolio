

import Image from "next/image";
import { Button } from "../components/ui/button";
import FiDownload from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-center xl:text-left">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent-hover">Zeeshan Ahmad</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa, in eos nisi vitae fuga assumenda expedita optio, totam laboriosam est consectetur consequatur ab quasi consequuntur quam rerum, enim repellat?
            </p>
          </div>
          {/* <Button variant="outline">
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
          <div>photo</div> */}
        </div>
      </div>
    </section>
  );
}
