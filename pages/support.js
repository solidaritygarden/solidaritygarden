import Link from 'next/link';
import React from 'react';
import Layout from './components/Layout';
import styles from '../styles/Support.module.css';

export default function Support() {
	return (
		<Layout siteTitle={'Support Us'} siteDescription={'Ways to support out work.'}>
			<div id={styles.supportContainer}>
				<div id={styles.supportInvolved}>
					<h1>Ways to Get Involved</h1>
					<p>
						The best way to support us is the way that suits you the best! Not everyone is able to donate, not everyone
						is able to be hands on, but everyone is able to participate!
					</p>
				</div>
				<div>
					<div>
						<h2>Land</h2>
					</div>
					<div>
						<h2>Labor</h2>
					</div>
					<div>
						<h2>Love</h2>
					</div>
				</div>
				<div>
					<h2>Lastly, money</h2>
					<p>Calendar</p>
					<p>Seed Bombs</p>
					<p>Seed Starter Packs</p>
					<Link href="">
						<p>Open Collective</p>
					</Link>
				</div>
				<div></div>
			</div>
		</Layout>
	);
}
