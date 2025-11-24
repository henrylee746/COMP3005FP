import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconZoomCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GroupClass from "./GroupClass";

export default async function Member() {
  return (
    <div className="dark:bg-stone-950 h-full flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans">
      <h1 className="max-w-s mb-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Trainers
      </h1>
      <div className="flex w-full gap-4 flex-wrap justify-center items-center items-stretch">
        <GroupClass />
        <Card className="w-full lg:max-w-lg md:max-w-md sm:max-w-sm">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              Member Search
              <IconZoomCheck />
            </CardTitle>
            <CardDescription>
              Search members by name (case-insensitive) to view their current
              weight goal and lastly measured weight.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="text" placeholder="Henry Lee" />
              <Button type="submit" variant="outline">
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
