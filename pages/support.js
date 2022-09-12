import Link from 'next/link';
import React from 'react';
import Header from './components/Header';
import Meta from './components/Meta';

export default function Support() {
	return (
		<div>
			<Meta siteTitle={'Support Us'} siteDescription={'Ways to support out work.'} />
			<Header />
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
		</div>
	);
}
