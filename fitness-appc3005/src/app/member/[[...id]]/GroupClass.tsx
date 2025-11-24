"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconCalendarUser } from "@tabler/icons-react";
import { DataTable } from "./data-table";
import { sessionColumns, Session, Health } from "./columns";

export default function GroupClass({ sessions }: { sessions: Session[] }) {
  return (
    <Card className="w-full 2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Group Class Registration <IconCalendarUser />
        </CardTitle>
        <CardDescription>
          Register for upcoming group sessions here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={sessionColumns} data={sessions} />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Register</Button>
      </CardFooter>
    </Card>
  );
}
