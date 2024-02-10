"use client";
// Generated with Ion on 2/10/2024, 12:31:44 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4014:26285
import { useState } from "react";
import { MagnifyingGlass, Bell } from "@phosphor-icons/react";
import Input from "@/components/ion/Input";
import Avatar from "@/components/ion/Avatar";
import clsx from "clsx";
type TopBarProps = {
   className?: string;
};

function TopBar({ className = "" }: TopBarProps) {
   const [inputValue, setInputValue] = useState("");
   return (
      <div
         className={clsx(
            "bg-background w-full flex justify-between items-center px-10 py-5 border-b border-sub-stroke h-fit",
            className
         )}
      >
         <Input
            placeholder="Search Job"
            iconLeading={<MagnifyingGlass size={16} weight={"bold"} />}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <div className="flex items-center gap-10">
            <Bell size={24} weight={"regular"} />
            <Avatar
               subtitle="gracemandy@gmail.com"
               title="Grace"
               size="lg"
               src="https://i.ibb.co/jrmkxZZ/placeholder-Person.png"
            />
         </div>
      </div>
   );
}
export default TopBar;
