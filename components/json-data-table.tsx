import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
const jsonDataList = [{id:1,name:"name",createdAt:"fdv"}]
export default function JsonDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className="sr-only">Share</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList?.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{format(new Date(data.createdAt),"MMMM d, yyyy")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
