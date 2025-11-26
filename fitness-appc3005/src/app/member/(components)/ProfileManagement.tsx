"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconUserScan } from "@tabler/icons-react";
import { updateMember } from "@/lib/actions";

export default function ProfileManagement({ id }: { id: string[] }) {
  return (
    <Card className="w-full lg:max-w-lg md:max-w-sm sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Profile Management
          <IconUserScan />
        </CardTitle>
        <CardDescription>Update your details/fitness goals</CardDescription>
      </CardHeader>
      <form action={updateMember}>
        {/*Hidden Input to retrieve memberId, so we know each member to update details*/}
        <input type="hidden" name="memberId" value={id[0]} />
        <CardContent>
          <div className="flex flex-col gap-4">
            <CardDescription>Personal Details</CardDescription>

            <Input id="email" type="email" name="email" placeholder="Email" />
            <Input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <CardTitle>Fitness Details</CardTitle>
            <Label htmlFor="currWeight">Current Weight</Label>
            <Input
              id="currWeight"
              type="number"
              name="currWeight"
              placeholder="e.g. 156"
            />
            <Label htmlFor="weightTarget"> Weight Target (lbs)</Label>
            <Input
              id="weightTarget"
              type="number"
              name="weightTarget"
              placeholder="e.g. 150"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full">
            Update
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
