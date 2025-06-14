'use client';

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function AuthStatus() {
  const { isAuthenticated, user, login, logout } = useKindeAuth();

  if (isAuthenticated === null) return <p>Loading...</p>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.given_name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}
