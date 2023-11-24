import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableTwo from "@/components/Tables/TableTwo";
import TableThree from "@/components/Tables/TableThree";
import TableFour from "@/components/Tables/TableFour";
import { Metadata } from "next";
import useFlowbite from "@/hooks/useFlowbite";

export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  useFlowbite()
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
        <TableFour />
      </div>
    </>
  );
};

export default TablesPage;
