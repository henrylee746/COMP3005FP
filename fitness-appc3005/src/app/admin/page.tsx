"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Header from "../../components/Header";
import { IconDoor } from "@tabler/icons-react";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sessionColumns, Session } from "./columns";
import { DataTable } from "./data-table";
import { Calendar24 } from "@/components/calendar-24";

async function getSessions(): Promise<Session[]> {
  return [
    {
      id: "728ed52f",
      date: new Date().toLocaleDateString("en-CA"),
      title: "Yoga Session",
      capacity: 50,
      trainer: "Coach Chris",
      room: "101",
    },
    {
      id: "728edawr",
      date: new Date().toLocaleDateString("en-CA"),
      title: "Chest Day",
      capacity: 2,
      trainer: "Instructor Mary",
      room: "",
    },
  ];
}

export default function Member() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    getSessions().then(setSessions);
  }, []);

  return (
    <div className="dark:bg-stone-950 h-full flex flex-col items-center justify-center bg-zinc-50 font-sans">
      <h1 className="max-w-s mb-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Admin Portal
      </h1>
      <div className="flex w-full gap-4 flex-wrap justify-center items-center">
        <Card className="w-full xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              Room Booking
              <IconDoor />
            </CardTitle>
            <CardDescription>
              Book different rooms for the following class sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={sessionColumns} data={sessions} />
          </CardContent>
        </Card>
        <Card className="w-full xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              Class Management
              <IconCirclePlusFilled />
            </CardTitle>
            <CardDescription>Create new sessions here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full items-center  gap-2">
              <form className="w-full">
                <div className="flex flex-col gap-4">
                  <CardDescription>Basic Details</CardDescription>

                  <Input id="session" type="text" placeholder="Session Name" />
                  <Input id="capacity" type="number" placeholder="Capacity" />
                  <Input id="trainer" type="text" placeholder="Trainer" />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Calendar24 />
                  <CardDescription>Room #</CardDescription>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">101</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">102</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3">103</Label>
                    </div>
                  </RadioGroup>
                  <Button type="submit" variant="secondary">
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
