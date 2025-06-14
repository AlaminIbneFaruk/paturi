export default async function UserDashboardPage({ params }) {

    return (
        <div className="bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6">User Dashboard</h1>
        <p className="mb-4">Welcome to the user dashboard!</p>
        <p className="text-lg">Current Slugs: {params?.slugs?.join(', ')}</p>
        </div>
    );
}