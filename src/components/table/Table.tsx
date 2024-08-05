import { getStudents, Student } from "@/hooks/Student";
import { Loader } from "@/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { studentColumns } from "./Columns";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { AddForm } from "../addForm/AddForm";
import { PaginationComponent } from "./Pagination";

export function TableComponent() {
  const { data, error, isLoading } = useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const columns = useMemo(() => studentColumns, []);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPaginated, setIsPaginated] = useState(true);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
    initialState: { pagination: { pageSize: 2 } }, // Default page size
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTogglePagination = () => {
    setIsPaginated(!isPaginated);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <section className="mx-10 p-5 my-10 border-2 border-orange-700 rounded-lg">
      <div className="flex flex-row gap-5 py-5">
        <Input
          placeholder="search..."
          type="text"
          id="search"
          className="focus-visible:ring-orange-700 w-[50%] my-5 ring-2 ring-orange-700"
        />
        <Button
          className="w-full my-5 bg-amber-700 hover:bg-amber-900"
          onClick={openDialog}
        >
          Add Student
        </Button>

        <AddForm isOpen={isDialogOpen} closeDialog={closeDialog} />
      </div>
      <Table className="mx-auto">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <TableCell className="text-right space-x-1">
                <Button className="bg-blue-300 border-2 border-orange-100">
                  View
                </Button>
                <Button className="bg-green-300 border-2 border-orange-100">
                  Edit
                </Button>
                <Button className="bg-red-300 border-2 border-orange-100">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isPaginated && (
        <PaginationComponent
          currentPage={table.getState().pagination.pageIndex + 1}
          pageCount={table.getPageCount()}
          onPageChange={(page) => table.setPageIndex(page - 1)}
        />
      )}
    </section>
  );
}
