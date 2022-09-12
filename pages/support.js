import Link from 'next/link';
import React from 'react';
import Layout from './components/Layout';

export default function Support() {
	return (
		<Layout siteTitle={'Support Us'} siteDescription={'Ways to support out work.'}>
			<div>
				<Link href="">
					<p>Open Collective</p>
				</Link>
			</div>
			<div>
				<h2>Shop</h2>
				<div>
					<Link href="">
						<p>Calendar</p>
					</Link>
					<Link href="">
						<p>Seed Starter</p>
					</Link>
					<Link href="">
						<p>Seed Starter</p>
					</Link>
				</div>
			</div>
		</Layout>
	);
}
