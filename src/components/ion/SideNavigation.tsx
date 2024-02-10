// ion/SideNavigation/default: Generated with Ion on 2/10/2024, 12:29:12 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4001:14951
import Divider from "@/components/ion/Divider";
import {
   SquaresFour,
   Briefcase,
   UsersThree,
   Folders,
} from "@phosphor-icons/react";
import {
   NavigationMenuLink,
   NavigationMenuItem,
   NavigationMenu,
   NavigationMenuList,
} from "@/components/ion/Navigation";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavigation() {
   const pathname = usePathname();
   return (
      <Sidebar filled className="w-[340px] rounded-br-[250px]">
         <div className="w-full flex-col flex gap-10 py-10 h-full">
            <div className="w-full flex justify-center items-start">
               <img
                  className="object-cover h-[126px] w-[220px]"
                  alt="Capture-removebg-preview(1) 1"
                  src="/images/dashboard/capture-removebg-preview(1)-1.png"
               />
            </div>
            <Divider />
            <NavigationMenu className="w-full">
               <NavigationMenuList className="w-full flex-col flex gap-4">
                  <NavigationMenuItem className={"px-3"}>
                     <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                           selected={pathname === "/"}
                           iconLeading={
                              <SquaresFour size={16} weight={"fill"} />
                           }
                           type={"filled"}
                           className="w-full"
                        >
                           Dashboard
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <Link href="/jobs-listed" legacyBehavior passHref>
                        <NavigationMenuLink
                           selected={pathname === "/jobs-listed"}
                           iconLeading={<Briefcase size={16} weight={"fill"} />}
                           type={"filled"}
                           className="w-full"
                        >
                           Jobs Listed
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <Link href="/potential-candidates" legacyBehavior passHref>
                        <NavigationMenuLink
                           selected={pathname === "/potential-candidates"}
                           iconLeading={
                              <UsersThree size={16} weight={"fill"} />
                           }
                           type={"filled"}
                           className="w-full"
                        >
                           Potential Candidates
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <Link href="/saved-candidates" legacyBehavior passHref>
                        <NavigationMenuLink
                           selected={pathname === "/saved-candidates"}
                           iconLeading={<Folders size={16} weight={"fill"} />}
                           type={"filled"}
                           className="w-full"
                        >
                           Saved Candidates
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </div>
      </Sidebar>
   );
}
export default SideNavigation;
