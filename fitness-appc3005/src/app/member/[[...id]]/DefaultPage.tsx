import { IconHandFinger } from "@tabler/icons-react";

export default function DefaultPage() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <IconHandFinger />
      <p className="text-muted-foreground text-sm">
        Select a member here to see personalized features.
      </p>
    </div>
  );
}
