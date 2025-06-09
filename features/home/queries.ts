import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "./services";

// React Query hook to use in your components
export function usePosts() {
  return useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });
}
