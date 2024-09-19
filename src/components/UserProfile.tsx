"use client";

import React, { useState, useEffect } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserProfile;
