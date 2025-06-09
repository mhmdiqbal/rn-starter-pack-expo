import client from "@/services/client";


export const fetchPosts = async () => {
  const response = await client.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
