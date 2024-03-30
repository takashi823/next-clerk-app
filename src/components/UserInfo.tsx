"use client";
import { useUser } from "@clerk/nextjs";

export const UserInfo = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <div>こんにちは！{user.firstName}!</div>;
  }

  return <div>Not signed in</div>;
};
