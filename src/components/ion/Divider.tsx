// ion/Divider: Generated with Ion on 2/10/2024, 12:29:13 PM
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import clsx from "clsx";

const Divider = React.forwardRef<
   React.ElementRef<typeof SeparatorPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
      children?: React.ReactNode;
   }
>(
   (
      {
         className,
         orientation = "horizontal",
         children,
         decorative = true,
         ...props
      },
      ref
   ) => (
      <div className="relative w-full">
         <div className="absolute inset-0 flex items-center">
            <SeparatorPrimitive.Root
               ref={ref}
               decorative={decorative}
               orientation={orientation}
               className={clsx(
                  "bg-weak-foreground",
                  orientation === "horizontal"
                     ? "h-[1px] w-full"
                     : "h-full w-[1px]",
                  className
               )}
               {...props}
            />
         </div>

         <div className="relative flex justify-center text-xs uppercase">
            <span className="px-3 text-soft-foreground bg-background">
               {children}
            </span>
         </div>
      </div>
   )
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export default Divider;
