import { Button } from "@/components/ui/button";
import { IconUserFilled } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconUserCog } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex py-6 flex-wrap items-center justify-between gap-4 mr-4 text-base font-medium">
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 ml-4 hover:text-gray-500"
        >
          <Button variant={"link"}>
            <div className="flex justify-center items-center gap-2">
              <IconHome className="size-8" />
              <span className="text-xl">Home</span>
            </div>
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/signup">
          <InteractiveHoverButton>Sign Up</InteractiveHoverButton>
        </Link>
        <Link href="/signin">
          <InteractiveHoverButton>Sign In</InteractiveHoverButton>
        </Link>
      </div>
      {/*
      <Link href="/">
        <Button size="lg" variant="link">
          <IconHome /> Home
        </Button>
      </Link>
      <Link href="/member">
        <Button size="lg" variant="link">
          <IconUser /> Members
        </Button>
      </Link>

      <Link href="/trainer">
        <Button size="lg" variant="link">
          <IconUserFilled /> Trainers
        </Button>
      </Link>

      <Link href="/admin">
        <Button size="lg" variant="link">
          <IconUserCog /> Administrative Staff
        </Button>
      </Link>
      */}
    </div>
  );
};

export default Header;
