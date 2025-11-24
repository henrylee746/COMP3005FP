"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconZoomCheck } from "@tabler/icons-react";
import React, { useState } from "react";

export default function MemberSearch() {
  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/member/search", {
      method: "POST",
      body: JSON.stringify({ name: query }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    setResults(data);
  };

  return (
    <Card className="w-full lg:max-w-lg md:max-w-md sm:max-w-sm">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            Member Search <IconZoomCheck />
          </CardTitle>
          <CardDescription>
            Search members by name (case-insensitive) to view their current
            weight goal and last measured weight.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Henry Lee"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="outline">
              Search
            </Button>
          </div>

          {/* Render results */}
          {results.length > 0 && (
            <ul>
              {results.map((member) => (
                <li key={member.id}>
                  {member.firstName} {member.lastName} — {member.email}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </form>
    </Card>
  );
}
