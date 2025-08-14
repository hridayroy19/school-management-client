"use client";

import { useUser } from "@/context/UserContext";

const Home = () => {
  const user = useUser();
  console.log(user);
  return <div>Home</div>;
};

export default Home;
