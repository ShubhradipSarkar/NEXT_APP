"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Navbar_ from "@/components/Navbar"
import Footer_ from "@/components/Footer"
import library from "./library.json"
import {useEffect} from 'react';
import { useSession } from "next-auth/react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"

const columns = [

  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("author")}</div>
    ),
  },
  {
    accessorKey: "book",
    header: "Book",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("book")}</div>
    ),
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      return <div className="text-right font-medium">{amount}</div>
    },
  },
  
]

export default function DataTableDemo() {
  const { toast } = useToast()
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState(
    []
  )
  const [name, SetName] = React.useState("");
  const [author, SetAuthor] = React.useState("");
  const [unit, SetUnit] = React.useState("");
  const [data, SetData] = React.useState([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})
  const { data: session } = useSession();
  //console.log(session);
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  useEffect(() => {
      const getBooks = async() => {
          try {
              const books = await axios.get("/api/users/library_");
              
              SetData(books.data.allBooks);
          } catch (error) {
              console.log(error);
          } finally {
              //setLoading(false);
          }
      }
      getBooks();
  }, []);
  const AddBookToLibrary = async() => {
    try{
      const addBook = await axios.post("/api/users/library_",{
        author: author,
        book: name,
        amount: unit,
      });
      toast({
          title: "Book added to library",
          description: `a new book added`,
      })
      SetData(prev => [...prev, {author: author, book: name, amount: unit,}])
      SetName("");
      SetAuthor("");
      SetUnit("");
    }
    catch(error){
      toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem and book could not be published.",
          
      })
      console.log(error);
    }

  }

  return (
    <div>
      <Navbar_/>
      {session?.user?.isAdmin && <div className="w-80 m-3"> <p className="text-2xl text-white flex">Add Book in Library <p className="text-sm text-blue-500">(admin only)</p>  </p> 
      <div className="my-1.5">Book Name <input type="text" className="w-80 rounded" value={name} onChange={(e)=>{SetName(e.target.value)}}/></div>
      <div className="my-1.5">Author <input type="text" className="w-80 rounded" value={author} onChange={(e)=>{SetAuthor(e.target.value)}}/></div>
      <div className="my-1.5">Units/Units <input type="text" className="w-80 rounded" value={unit} onChange={(e)=>{SetUnit(e.target.value)}}/></div>
      
      <Button size="sm" className="m-2" onClick={AddBookToLibrary}>Add Book</Button>
      </div> }
      <div className="m-3">
      
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Book Names..."
          value={(table.getColumn("book")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("book")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button  size="sm" className="">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="m-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}

                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      </div>
      <Footer_/>
    </div>
    
  )
}
