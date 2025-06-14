import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function SidePanel() {
  return (
    <div className="bg-white w-full h-full border-2 border-gray-200">
      <div className="p-4">

        <ul className="space-y-2">
          <li>
            <Link
              href="/user-dashboard/dashboard"
              className="text-blue-600 hover:underline"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/user-dashboard/settings"
              className="text-blue-600 hover:underline"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/user-dashboard/profile"
              className="text-blue-600 hover:underline"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/user-dashboard/logout"
              className="text-blue-600 hover:underline"
            >
              Logout
            </Link>
          </li>
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
