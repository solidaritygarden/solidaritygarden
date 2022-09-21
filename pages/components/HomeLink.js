import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function HomeLink() {
	const router = useRouter();
	return router.pathname !== '/' ? <Link href="/">Home</Link> : '';
}
