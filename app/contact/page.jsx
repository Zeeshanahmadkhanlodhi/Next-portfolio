"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import { Select , SelectContent , SelectGroup , SelectItem ,SelectLabel , SelectTrigger , SelectValue } from "../../components/ui/select";

import { FaPhoneAlt , FaEnvelope , FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 1234567890"
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "zeeshan@example.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    label: "Address",
    value: "123 Main St, City, State, Zip Code"
  }
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1 , transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent-hover">
                Let's Work Together
              </h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dignissimos ratione veritatis accusamus exercitationem illum quia unde libero voluptate dicta eaque dolores repellendus laudantium cumque suscipit magni, pariatur voluptatibus error.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="lastname" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone Number" />

              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="website">Website Developement</SelectItem>
                    <SelectItem value="webapp">Web App Developement</SelectItem>
                    <SelectItem value="mobileapp">Mobile App Developement</SelectItem>
                    <SelectItem value="datascience">Data Science</SelectItem>
                    <SelectItem value="dataanlytics">Data Analytice</SelectItem>


                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px] " placeholder="Type your message here.." />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>

          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center ">
                        <div className="text-[28px]">
                            {
                              item.icon
                            }
                        </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/60">{item.label}</p>
                            <h3 className="text-xl">{item.value}</h3>
                        </div>


                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact;
