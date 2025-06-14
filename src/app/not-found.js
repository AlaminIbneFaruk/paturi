import Link from "next/link";

export default function NotFoundPage({ params }) {
    return (
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline">
            Go back to Home Page
        </Link>
        </div>
    );
}