import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div class="p-2">
      <h1 class="text-3xl font-bold underline text-red-400">Hello world!</h1>
      <Button>111</Button>
    </div>
  );
}
