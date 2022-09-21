import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import HomeLink from './HomeLink';
// import propTypes from 'prop-types';

export default function Header() {
	const router = useRouter();
	console.log('this is router', router);
	console.log('this is router.pathname', router.pathname);

	return (
		<nav className={styles.header}>
			<figure className={styles.imageWrapper}>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'relative',
					}}
				>
					{/* <Image src="/small-sandie-clarke-Hands-in-Dirt-unsplash.jpg" width={500} height={500} layout="responsive" /> */}
					<figcaption>Hands digging in dirt in a raised bed garden.</figcaption>
				</div>
			</figure>
			<div className={styles.siteTitle}>
				<Link href="/">
					<a className={styles.title}>Solidarity Garden</a>
				</Link>
				{/* <Link href="/">
					<a className={styles.title}>Garden</a>
				</Link> */}
				<p className={styles.subtitle}>because lawns suck and solidarity is everything</p>
			</div>
			<span id={styles.scrim}></span>
			<div className={styles.nav}>
				<HomeLink />
				<Link href="/how">How It Works</Link>
				<Link href="/support">Support</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</nav>
	);
}
