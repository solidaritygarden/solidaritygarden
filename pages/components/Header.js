import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Header() {
	return (
		<nav className={styles.header}>
			{/* <figure>
				<Image src="/Grow_it_yourself_Solidarity_edit.jpg" width="300vw" height={300} />
				<figcaption>This is an image of world war 2 victory garden propaganda</figcaption>
			</figure> */}
			<div className={styles.siteTitle}>
				<Link href="/">
					<a className={styles.title}>Solidarity Garden</a>
				</Link>
				<p className={styles.subtitle}>because lawns suck and solidarity is everything</p>
			</div>
			<div className={styles.nav}>
				<Link href="/how">How It Works</Link>
				<Link href="/support">Support</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</nav>
	);
}
