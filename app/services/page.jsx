"use client";


import {
  FaHtml5,
  FaCss3 ,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
}
from "react-icons/fa"

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";


const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis in lectus consectetur ullamcorper. Sed pulvinar neque vel neque semper, vitae facilisis metus porttitor. Donec iaculis, arcu a pellentesque consectetur, justo dolor semper lectus, vel posuere felis neque et velit. Sed vel est at velit convallis venenatis.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Zeeshan Ahmad",
    },
    {
      fieldName: "Phone",
      fieldValue: "+923196440909",
    },
    {
      fieldName: "Email",
      fieldValue: "zeeshan@example.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Urdu",

    }
    
  ]
};

const experience = {
  icon:"/assets/resume/badge.svg",
  title:"My Experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores necessitatibus placeat esse cum in nobis possimus illum eaque sapiente illo quae provident recusandae consectetur nam, excepturi harum repellendus nemo.",
  items:[
    {
      company:"Geo Solutions",
      position:"Software Developer",
      duration:"2018 - 2022",
    },
    {
      company:"Geo Solutions",
      position:"Software Developer",
      duration:"2018 - 2022",
    },
    {
      company:"Geo Solutions",
      position:"Software Developer",
      duration:"2018 - 2022",
    },
    {
      company:"Geo Solutions",
      position:"Software Developer",
      duration:"2018 - 2022",
    },
  ]
};

const education = {
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores necessitatibus placeat esse cum in nobis possimus illum eaque sapiente illo quae provident recusandae consectetur nam, excepturi harum repellendus nemo.",
  items:[
    {
      institution:"Sarhad University of Science and IT",
      degree:"BS Software Engineering",
      location:"Peshawar , Pakistan",
      duration:"2017 - 2021",
    },
    {
      institution:"University of Hull",
      degree:"BS Software Engineering",
      location:"Hull , United Kingdom",
      duration:"2024 - 2025",
    },
   
  ]
};


const skills = {
  title:"My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores necessitatibus placeat esse cum in nobis possimus illum eaque sapiente illo quae provident recusandae consectetur nam, excepturi harum repellendus nemo.",
  skillList:[
    {
      icon:<FaHtml5 />,
      name:"html 5"
    },
    {
      icon:<FaCss3 />,
      name:"CSS 3"
    },
    {
      icon:<FaJs />,
      name:"Javascript"
    },
    {
      icon:<FaReact />,
      name:"React"
    },
    {
      icon:<FaNodeJs />,
      name:"Node js"
    },
    {
      icon:<FaPython />,
      name:"Python"
    },
    {
      icon:<FaDatabase />,
      name:"Database"
    },
    {
      icon:<SiTailwindcss />,
      name:"Tailwind CSS"
    },
    {
      icon:<SiNextdotjs />,
      name:"Next.js"
    }
  
  ]
}

import { Tabs , TabsContent , TabsList , TabsTrigger} from "../../components/ui/tabs";
import { Tooltip,TooltipContent , TooltipProvider , TooltipTrigger} from "../../components/ui/tooltip";
import {ScrollArea} from "../../components/ui/scroll-area";
import { motion } from "framer-motion";



const Services = () => {
  return (
    <motion.dev
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:1,duration:0.4,ease:"easeIn"},
    }}
    className="min-h-[80vh] mt-10 flex items-center justify-content py-12 xl:py-0"
   >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Web Development</TabsTrigger>
              <TabsTrigger value="education" >Mobile Development</TabsTrigger>
              <TabsTrigger value="skills" >Data Science</TabsTrigger>
              <TabsTrigger value="about" >Data Analytics</TabsTrigger>

          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3" >
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                    } )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3" >
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover "></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                    } )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full" >
              <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) =>{

                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                           <Tooltip>
                           <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent >
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                           </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left" >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) => {
                      return (
                        <li key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
      </Tabs>
    </div>

   </motion.dev>
  )
}

export default Services;
