import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import JsonDataTable from "./json-data-table";
import AddJsonDialog from "./AddJsondialog";

export default function JsonEditor() {
  return (
    <div>
       <Card>
      <CardHeader>
        <CardTitle>Saved JSON Data</CardTitle>
        <CardDescription>View and share your saved JSON data.</CardDescription>
      </CardHeader>
      <CardContent>
        <JsonDataTable key={refreshKey} />
      </CardContent>
      <CardFooter>
        <AddJsonDialog onSave={handleSave} />
      </CardFooter>
    </Card>
    </div>
  )
}
