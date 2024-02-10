"use client";
// Generated with Ion on 2/10/2024, 1:40:30 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4014:26726
import { MouseEvent, useMemo } from "react";
import { CurrencyDollar, UserCirclePlus } from "@phosphor-icons/react";
import Tag from "@/components/ion/Tag";
import Button from "@/components/ion/Button";
import Avatar from "@/components/ion/Avatar";
import SideNavigation from "@/components/ion/SideNavigation";
import TopBar from "@/components/ion/TopBar";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import DashboardCard from "@/components/ion/DashboardCard";

function Dashboard() {
   const columns = useMemo(
      () =>
         [
            {
               header: "#",
               cell: ({ row: { original: cellData } }) => <>1</>,
            },
            {
               header: "Job Title",
               cell: ({ row: { original: cellData } }) => (
                  <div className="flex-col flex justify-center gap-1">
                     <div className="text-foreground">Supervisory</div>
                     <div className="text-sub-foreground">HR</div>
                  </div>
               ),
            },
            {
               header: "Industry",
               cell: ({ row: { original: cellData } }) => <>Vetrans Affairs</>,
            },
            {
               header: "Salary ($)",
               cell: ({ row: { original: cellData } }) => (
                  <Tag
                     iconLeading={<CurrencyDollar size={16} weight={"bold"} />}
                     type="stroke"
                     color="simple"
                     onClick={_3000ClickHandler}
                  >
                     3000
                  </Tag>
               ),
            },
            {
               header: "Action",
               cell: ({ row: { original: cellData } }) => (
                  <Button
                     iconLeading={<UserCirclePlus size={16} weight={"bold"} />}
                     emphasis="low"
                     color="primary"
                     size="sm"
                     onClick={searchTalentClickHandler}
                  >
                     Search Talent
                  </Button>
               ),
            },
         ] as ColumnDef<unknown>[],
      []
   );
   const columns_1 = useMemo(
      () =>
         [
            {
               header: "#",
               cell: ({ row: { original: cellData } }) => <>1</>,
            },
            {
               header: "Talent Photo",
               cell: ({ row: { original: cellData } }) => (
                  <Avatar
                     size="md"
                     src="https://i.ibb.co/jrmkxZZ/placeholder-Person.png"
                  />
               ),
            },
            {
               header: "Industry",
               cell: ({ row: { original: cellData } }) => <>Marquis Thompson</>,
            },
            {
               header: "Salary ($)",
               cell: ({ row: { original: cellData } }) => (
                  <Tag
                     iconLeading={<CurrencyDollar size={16} weight={"bold"} />}
                     type="stroke"
                     color="simple"
                     onClick={_3000ClickHandler}
                  >
                     3000
                  </Tag>
               ),
            },
            {
               header: "Action",
               cell: ({ row: { original: cellData } }) => (
                  <Button
                     iconLeading={<UserCirclePlus size={16} weight={"bold"} />}
                     emphasis="low"
                     color="primary"
                     size="sm"
                     onClick={searchTalentClickHandler}
                  >
                     Search Talent
                  </Button>
               ),
            },
         ] as ColumnDef<unknown>[],
      []
   );
   function _3000ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("_3000ClickHandler fired");
   }
   function searchTalentClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("searchTalentClickHandler fired");
   }
   return (
      <div className="bg-weak w-screen h-screen flex">
         <SideNavigation />
         <div className="h-full flex-1 flex-col flex bg-weak">
            <TopBar />
            <div className="w-full flex-1 flex-col flex gap-5 p-10 overflow-scroll">
               <div className="text-3xl font-medium text-foreground">
                  Dashboard
               </div>
               <div className="w-full flex items-start gap-5">
                  <DashboardCard title="Total Opening" value="1 Job" src="/images/dashboard/untitled-2.png" />
                  <DashboardCard
                     src="/images/dashboard/untitled-2.png"
                     value="5 Candidates"
                     title="Total Candidates"
                  />
                  <DashboardCard src="/images/dashboard/untitled-2.png" value="1 Hired" title="Total Hired" />
                  <DashboardCard
                     src="/images/dashboard/untitled-2.png"
                     value="0 Rejected"
                     title="Total Rejected"
                  />
               </div>
               <div className="bg-background w-full h-[539px] flex-col flex gap-5 p-5 rounded-radius shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)] text-xl font-semibold text-foreground">
                  <div>Candidates Overview</div>
                  <img
                     className="object-cover w-full h-[437px]"
                     alt="chart-placeholder 1"
                     src="/images/dashboard/chart-placeholder-1.png"
                  />
               </div>
               <div className="w-full flex-1 flex gap-5 items-stretch">
                  <div className="bg-background h-full flex-1 flex-col flex gap-3 p-3 rounded-radius shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]">
                     <div className="text-xl font-semibold text-black">
                        Potential Candidates
                     </div>
                     <Table
                        columns={columns}
                        data={Array(3).fill({
                           jobTitle: "",
                           industry: "",
                           salary: "",
                           action: "",
                        })}
                        className="w-full"
                     />
                  </div>
                  <div className="bg-background h-full flex-1 flex-col flex gap-3 p-3 rounded-radius shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]">
                     <div className="text-xl font-semibold text-black">
                        Potential Candidates
                     </div>
                     <Table
                        columns={columns_1}
                        data={Array(3).fill({
                           talentPhoto: "",
                           industry: "",
                           salary: "",
                           action: "",
                        })}
                        className="w-full"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Dashboard;
