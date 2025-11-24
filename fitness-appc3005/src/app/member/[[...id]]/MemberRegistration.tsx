"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import prisma from "../../../../lib/prisma";

export default function MemberRegistration() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    await prisma.member.create({
      data: { email, firstName, lastName },
    });
  };

  return (
    <Dialog>
      {/* SERVER ACTION → assign to `action` */}
      <form action={handleSubmit}>
        <DialogTrigger asChild>
          <Button variant="outline">Register New Member</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Signup</DialogTitle>
            <DialogDescription>Register as a new member.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />

            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" type="text" required />

            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" type="text" required />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
