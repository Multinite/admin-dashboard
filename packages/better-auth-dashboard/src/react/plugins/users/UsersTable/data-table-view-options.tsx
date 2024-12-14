"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import type { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";

import type { RequiredComponents } from "../../../types";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  components: RequiredComponents;
}

export function DataTableViewOptions<TData>({
  table,
  components,
}: DataTableViewOptionsProps<TData>) {
  const {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    Button,
  } = components;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          // @ts-expect-error - Intentional
          variant="outline"
          size="sm"
          className="hidden h-8 ml-auto lg:flex"
        >
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
