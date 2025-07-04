import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Example mock auth check
  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await fakeTokenCheck(); // Replace with real logic
      setIsAuthenticated(loggedIn);
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
}

const fakeTokenCheck = async () => {
  // Simulate async check
  await new Promise((res) => setTimeout(res, 500));
  return true; // or false if not logged in
};
