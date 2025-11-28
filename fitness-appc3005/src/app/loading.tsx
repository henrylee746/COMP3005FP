import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center gap-2 items-center w-screen h-full [--radius:1rem]">
      <p className="text-muted-foreground">Loading..</p>
      <Spinner />
    </div>
  );
}
