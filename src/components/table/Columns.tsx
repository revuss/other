import { Student } from "@/hooks/Student";
import { ColumnDef } from "@tanstack/react-table";

export const studentColumns: ColumnDef<Student>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Email ID",
    accessorKey: "emailId",
  },
  {
    header: "Attendance",
    accessorKey: "attendance",
  },
  {
    header: "Mobile Number",
    accessorKey: "mobileNumber",
  },
];
