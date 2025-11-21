import { Button } from "@/components/ui/button";
import { IconUserFilled } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconUserCog } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="dark flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-16
       px-16 bg-white dark:bg-black"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-s text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            COMP 3005 - Fall 2025 Final Project: Henry L
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Health and Fitness Club Management System
          </p>
          <h2 className="max-w-sm my-6 text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            You are entering as a:
          </h2>
        </div>
        <div className="flex flex-col my-12 items-center justify-center gap-4 text-base font-medium sm:flex-row">
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
      </main>
    </div>
  );
}
