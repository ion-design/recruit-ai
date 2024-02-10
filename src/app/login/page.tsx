"use client";
// Generated with Ion on 2/10/2024, 1:38:38 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4001:22616
import { useState, MouseEvent } from "react";
import { Envelope, Lock, GoogleLogo } from "@phosphor-icons/react";
import Input from "@/components/ion/Input";
import Checkbox from "@/components/ion/Checkbox";
import Button from "@/components/ion/Button";
import Divider from "@/components/ion/Divider";

function Login() {
   const [inputValue, setInputValue] = useState("");
   const [inputValue_1, setInputValue_1] = useState("");
   function logInClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("logInClickHandler fired");
   }
   function signUpWithGoogleClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("signUpWithGoogleClickHandler fired");
   }
   function loginClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("loginClickHandler fired");
   }
   return (
      <div className="w-screen h-screen flex-col flex">
         <div className="bg-primary-darkest w-full flex justify-center items-start px-5 py-2">
            <img
               className="object-cover h-[106px] w-[125px]"
               alt="Capture-removebg-preview(1) 3"
               src="/images/login/capture-removebg-preview(1)-3.png"
            />
         </div>
         <div className="bg-background w-full flex-1 flex-col flex justify-center items-center">
            <div className="w-[391px] flex-col flex justify-center items-center gap-5 p-5 rounded-radius border border-soft-stroke shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]">
               <div className="text-base font-semibold text-foreground">
                  Log In
               </div>
               <Input
                  placeholder="Company Email"
                  iconLeading={<Envelope size={16} weight={"bold"} />}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full"
               />
               <Input
                  placeholder="Password"
                  iconLeading={<Lock size={16} weight={"bold"} />}
                  value={inputValue_1}
                  onChange={(e) => setInputValue_1(e.target.value)}
                  className="w-full"
               />
               <div className="w-full flex justify-center items-center gap-5">
                  <Checkbox />
                  <div className="text-sm text-black w-[315px]">
                     By continuing, you agree to RecruitAI Terms of Service and
                     Privacy Policy.
                  </div>
               </div>
               <Button
                  emphasis="high"
                  color="primary"
                  size="md"
                  onClick={logInClickHandler}
                  className="w-full"
               >
                  Log In
               </Button>
               <Divider>OR</Divider>
               <div className="w-full flex-col flex items-center gap-2">
                  <Button
                     iconLeading={<GoogleLogo size={16} weight={"bold"} />}
                     emphasis="low"
                     color="secondary"
                     size="md"
                     onClick={signUpWithGoogleClickHandler}
                  >
                     Sign Up with Google
                  </Button>
                  <div className="flex justify-center items-center gap-1">
                     <div className="text-sm text-foreground">
                        Already have an account?
                     </div>
                     <Button
                        emphasis="low"
                        color="primary"
                        size="sm"
                        onClick={loginClickHandler}
                     >
                        Login
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Login;
