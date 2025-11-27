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
import { Member } from "@/lib/types";

export default function MemberSelect({
  members,
  id,
}: {
  members: Member[];
  id: string[] | undefined;
}) {
  const router = useRouter();

  const handleChange = (id: string) => {
    router.push(`/member/${id}`);
  };
  return (
    <Select value={id?.[0]} onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a member" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Members</SelectLabel>
          {members.map((member: Member) => (
            <SelectItem value={String(member.id)} key={member.id}>
              {member.firstName + " " + member.lastName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
