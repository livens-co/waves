"use client";

import { useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { BookingColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface BookingClientProps {
  data: BookingColumn[];
}

export const BookingClient: React.FC<BookingClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Bookings (${data.length})`}
          description="All bookings"
        />
        <Button onClick={() => router.push(`/admin/bookings/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Create booking
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="email" columns={columns} data={data} />
    </>
  );
};
