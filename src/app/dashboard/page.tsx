'use client';

import UserCard from '@/components/UserCard';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin?callbackUrl=/client');
		}
	});

	return (
		<>
			{session ? (
				<UserCard user={session?.user} pagetype={'Home'} />
			) : (
				<h1 className="text-5xl">You Shall Not Pass!</h1>
			)}
		</>
	);
}
