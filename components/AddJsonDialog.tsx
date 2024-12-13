"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useState } from "react";

const AddJsonDialog = () => {
  const [jsonData, setJsonData] = useState<string>("");
  const [jsonName, setJsonName] = useState<string>("");
  const handelSave = ()=>{

  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add JSON Data</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>JSON Editor</DialogTitle>
          <DialogDescription>Edit and save your data.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>JSON Name</Label>
            <Input
              placeholder="Enter JSON Name"
              className="rounded-none"
              value={jsonName}
              onChange={(e) => {
                setJsonName(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label>JSON Data</Label>
            <CodeMirror
              className="border shadow-sm"
              value={jsonData}
              height="400px"
              extensions={[json()]}
              onChange={(value) => {
                setJsonData(value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant={"secondary"}>Close</Button>
          </DialogClose>
          <Button disabled={!jsonName || !jsonData} onClick={handelSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddJsonDialog;
