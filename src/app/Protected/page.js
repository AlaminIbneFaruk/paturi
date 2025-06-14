import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/auth/signin');
  return <h1>Welcome, {session.user.name}</h1>;
}