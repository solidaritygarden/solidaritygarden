import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Header() {
	return (
		<nav className={styles.nav}>
			<Image src="/Grow_it_yourself_Solidarity_edit.jpg" width="300vw" height={300} />
			<div>
				<h1>Solidarity Garden</h1>
				<p>because lawns suck and solidarity is everything</p>
			</div>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/support">Support</Link>
		</nav>
	);
}
