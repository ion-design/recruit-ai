// ion/Sidebar: Generated with Ion on 2/10/2024, 12:29:12 PM
import clsx from "clsx";

interface Props {
   className?: string;
   filled?: boolean;
   children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({
   children,
   filled = false,
   className,
}: Props) {
   return (
      <div
         className={clsx(
            "block h-screen min-h-screen flex-col justify-between shrink-0",
            {
               "bg-primary-darker dark:bg-primary-lighter": filled,
               "border-r border-soft-stroke": !filled,
            },
            className
         )}
      >
         {children}
      </div>
   );
}
