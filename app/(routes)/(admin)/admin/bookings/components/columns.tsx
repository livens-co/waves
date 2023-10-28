"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type BookingColumn = {
  id: string;
  firstName: string;
  lastName: string;
  date: string;
  destination: string;
  size: number;
  paid: string;
  createdAt: string;
};

export const columns: ColumnDef<BookingColumn>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "destination",
    header: "Tour",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "paid",
    header: "Desposit",
  },
  {
    accessorKey: "createdAt",
    header: "created",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
