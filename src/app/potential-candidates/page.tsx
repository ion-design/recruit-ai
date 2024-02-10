"use client";
// Generated with Ion on 2/10/2024, 12:52:39 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4001:21660
import Avatar from "@/components/ion/Avatar";
import { MouseEvent, useMemo } from "react";
import {
   DotsThreeOutlineVertical,
   MagnifyingGlass,
   DownloadSimple,
   Sliders,
   ToggleRight,
} from "@phosphor-icons/react";
import Button from "@/components/ion/Button";
import SideNavigation from "@/components/ion/SideNavigation";
import TopBar from "@/components/ion/TopBar";
import Tag from "@/components/ion/Tag";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";

function PotentialCandidatesFilter() {
   const columns = useMemo(
      () =>
         [
            {
               header: "Talent Name",
               cell: ({ row: { original: cellData } }) => (
                  <div className="flex flex-row gap-x-3">
                     <Avatar
                        size="md"
                        src="https://i.ibb.co/jrmkxZZ/placeholder-Person.png"
                     />
                     <div className="flex-col flex justify-center gap-1 text-sm text-foreground">
                        Veronica Mullins
                     </div>
                  </div>
               ),
            },
            {
               header: "Occupation",
               cell: ({ row: { original: cellData } }) => (
                  <div className="flex-col flex justify-center gap-1">
                     <div className="text-foreground">
                        Human Resources Officer | Federal HR
                     </div>
                     <div className="text-sub-foreground">
                        Strategist &amp; Executionist
                     </div>
                  </div>
               ),
            },
            {
               header: "Location",
               cell: ({ row: { original: cellData } }) => (
                  <>Miami, Flordia, United States</>
               ),
            },
            {
               header: "Match (%)",
               cell: ({ row: { original: cellData } }) => <>20%</>,
            },
            {
               header: "Job Title",
               cell: ({ row: { original: cellData } }) => (
                  <>Software Engineer</>
               ),
            },
            {
               id: "none",
               cell: ({ row: { original: cellData } }) => (
                  <Button
                     iconLeading={
                        <DotsThreeOutlineVertical size={16} weight={"fill"} />
                     }
                     emphasis="low"
                     color="secondary"
                     size="sm"
                     onClick={buttonOnClickHandler}
                  />
               ),
            },
         ] as ColumnDef<unknown>[],
      []
   );
   function applyFiltersClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("applyFiltersClickHandler fired");
   }
   function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("buttonOnClickHandler fired");
   }
   function clearAllClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("clearAllClickHandler fired");
   }
   function downloadTableClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("downloadTableClickHandler fired");
   }

   // These are click handlers for the tags, they can be put in to a mapping instead
   function jobTitle3ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("jobTitle3ClickHandler fired");
   }
   function jobTitle3DismissHandler(e: MouseEvent<SVGSVGElement>) {
      alert("jobTitle3DismissHandler fired");
   }
   function miami3ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("miami3ClickHandler fired");
   }
   function miami3DismissHandler(e: MouseEvent<SVGSVGElement>) {
      alert("miami3DismissHandler fired");
   }
   function occupation3ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("occupation3ClickHandler fired");
   }
   function occupation3DismissHandler(e: MouseEvent<SVGSVGElement>) {
      alert("occupation3DismissHandler fired");
   }


   function saveSearchClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("saveSearchClickHandler fired");
   }
   function searchMoreClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("searchMoreClickHandler fired");
   }


   return (
      <div className="bg-weak w-screen h-screen flex">
         <SideNavigation />
         <div className="h-full flex-1 flex-col flex">
            <TopBar />
            <div className="w-full flex-1 flex items-start p-10 overflow-y-scroll">
               <div className="bg-background flex-1 flex-col flex items-center gap-5 px-5 py-8 rounded-radius border border-soft-stroke">
                  <div className="text-xl font-semibold text-foreground w-full">
                     Talents Listing
                  </div>
                  <div className="w-full flex justify-between items-start">
                     <Button
                        iconLeading={
                           <MagnifyingGlass size={16} weight={"bold"} />
                        }
                        emphasis="high"
                        color="primary"
                        size="lg"
                        onClick={searchMoreClickHandler}
                     >
                        Search More
                     </Button>
                     <div className="flex items-start gap-5">
                        <Button
                           iconLeading={
                              <DownloadSimple size={16} weight={"bold"} />
                           }
                           emphasis="medium"
                           color="primary"
                           size="lg"
                           onClick={downloadTableClickHandler}
                        >
                           Download Table
                        </Button>
                        <Button
                           iconLeading={<Sliders size={16} weight={"bold"} />}
                           emphasis="medium"
                           color="primary"
                           size="lg"
                           onClick={applyFiltersClickHandler}
                        >
                           Apply Filters
                        </Button>
                     </div>
                  </div>
                  <div className="w-full flex items-center gap-5">
                     <Tag
                        type="stroke"
                        color="simple"
                        onClick={occupation3ClickHandler}
                        onDismiss={occupation3DismissHandler}
                     >
                        Occupation - 3
                     </Tag>
                     <Tag
                        type="stroke"
                        color="simple"
                        onClick={miami3ClickHandler}
                        onDismiss={miami3DismissHandler}
                     >
                        Miami - 3
                     </Tag>
                     <Tag
                        type="stroke"
                        color="simple"
                        onClick={jobTitle3ClickHandler}
                        onDismiss={jobTitle3DismissHandler}
                     >
                        Job Title - 3
                     </Tag>
                     <Button
                        emphasis="low"
                        color="secondary"
                        size="sm"
                        onClick={clearAllClickHandler}
                     >
                        Clear All
                     </Button>
                  </div>
                  <div className="w-full flex justify-between items-center">
                     <div className="text-sm font-semibold text-black">
                        <span className="text-foreground">Search Result:</span>
                        <span className="text-primary">
                           {" "}
                           20 Candidates found
                        </span>
                     </div>
                     <Button
                        iconTrailing={<ToggleRight size={16} weight={"bold"} />}
                        emphasis="low"
                        color="primary"
                        size="sm"
                        onClick={saveSearchClickHandler}
                     >
                        Save Search
                     </Button>
                  </div>
                  <Table
                     columns={columns}
                     data={Array(5).fill({
                        talentName: "",
                        occupation: "",
                        location: "",
                        match: "",
                        jobTitle: "",
                     })}
                  />
                  <Pagination />
               </div>
            </div>
         </div>
      </div>
   );
}
export default PotentialCandidatesFilter;
