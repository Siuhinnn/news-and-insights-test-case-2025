"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

const AuthSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO: handle sso
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="flex items-center space-x-3 px-4 py-2 font-futura text-sm">
      <input
        type="email"
        placeholder="Enter your email address"
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <Button variant="outline">SUBSCRIBE</Button>
      <Button
        variant="filled"
        onClick={isLoggedIn ? handleLogout : handleLogin}
      >
        {isLoggedIn ? "LOG-OUT" : "LOG-IN"}
      </Button>
    </div>
  );
};

export default AuthSection;
