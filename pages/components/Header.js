import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
// import HomeLink from './HomeLink';

export default function Header() {
	return (
		<nav className={styles.header}>
			<div className={styles.siteTitle}>
				<Link href="/">
					<a className={styles.title}>Solidarity Garden</a>
				</Link>
				<p className={styles.subtitle}>because lawns suck and solidarity is everything</p>
			</div>
			<span id={styles.scrim}></span>
			<div className={styles.nav}>
				{/* <HomeLink /> */}
				<Link href="/">Home</Link>
				<Link href="/how">How It Works</Link>
				<Link href="/support">Support</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</nav>
	);
}
