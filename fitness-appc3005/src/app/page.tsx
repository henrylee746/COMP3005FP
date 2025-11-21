import { Button } from "@/components/ui/button";
import { IconUserFilled } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconUserCog } from "@tabler/icons-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-16
       px-16"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-s text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            COMP 3005 - Fall 2025 Final Project: Henry L
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Health and Fitness Club Management System
          </p>
        </div>
        <div className="w-full flex gap-8 m-4">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Members <IconUser />
              </CardTitle>
              <CardDescription>
                {" "}
                Gain access to features such as:
                <ul className="list-disc ml-2 mt-2">
                  {" "}
                  <li>Dashboard (Showing your latest stats and goals)</li>
                  <li>
                    Profile Management (Update your details and fitness goals)
                  </li>
                  <li>Group Class Enrollments</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Trainers
                <IconUserFilled />
              </CardTitle>
              <CardDescription>
                {" "}
                Trainers will be able to:
                <ul className="list-disc ml-2 mt-2">
                  <li>See assigned PT sessions and classes</li>
                  <li>
                    Define time windows on when they can have sessions/classes
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Admin Staff
              <IconUserCog />
            </CardTitle>
            <CardDescription>
              {" "}
              Admins will be able to:
              <ul className="list-disc ml-2 mt-2">
                <li>Assign rooms for sessions or classes</li>
                <li>
                  Define new classes and assign trainers/rooms in accordance to
                  scheduling
                </li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col mt-12 items-center justify-center gap-4 text-base font-medium">
          <h2 className="max-w-sm my-6 text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            You are entering as a:
          </h2>
          <div className="sm:flex-row">
            <Link href="/member">
              <Button size="lg" variant="link">
                <IconUser /> Member
              </Button>
            </Link>

            <Link href="trainer">
              <Button size="lg" variant="link">
                <IconUserFilled /> Trainer
              </Button>
            </Link>

            <Link href="admin">
              <Button size="lg" variant="link">
                <IconUserCog /> Administrative Staff
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
