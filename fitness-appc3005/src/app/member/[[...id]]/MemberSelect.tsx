"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemberSelect({ members }: any) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (id: string) => {
    setValue(id);
    router.push(`/member/${id}`);
  };
  return (
    <Select defaultValue={value} onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a member" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Members</SelectLabel>
          {members.map((member: any) => (
            <SelectItem value={member.id} key={member.id}>
              {member.firstName + " " + member.lastName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
