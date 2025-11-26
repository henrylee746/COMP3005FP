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
import { registerMember } from "@/lib/actions";

export default function MemberRegistration() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register New Member</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Signup</DialogTitle>
          <DialogDescription>Register as a new member.</DialogDescription>
        </DialogHeader>
        <form action={registerMember}>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />

            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" type="text" required />

            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" type="text" required />
          </div>
          <DialogFooter className="pt-6">
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
