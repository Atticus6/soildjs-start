import { render } from "solid-js/web";
import { RouterProvider, createRouter } from "@tanstack/solid-router";
import "./assets/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  scrollRestoration: true,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  render(
    () => (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    ),
    rootElement
  );
}
