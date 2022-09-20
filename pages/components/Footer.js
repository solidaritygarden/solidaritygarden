import React from 'react';
import styles from '../../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Link href="#top">
				<p>Back to Top</p>
			</Link>
			<p>Please copy this site!</p>
			<Link href="https://www.github.com">
				<figure className={styles.imageWrapper}>
					<div style={{ height: '2vh', width: '2vw', position: 'relative' }}>
						<Image src="/GitHub-Mark-Light-120px-plus.png" width={100} height={100} layout="responsive" />
						{/* <figcaption></figcaption> */}
					</div>
				</figure>
			</Link>
			<Link href="https://www.twitter.com">
				<figure className={styles.imageWrapper}>
					<div style={{ height: '2vh', width: '2vw', position: 'relative' }}>
						<Image src="/Twitter social icons - circle - white.png" width={100} height={100} layout="responsive" />
						{/* <figcaption></figcaption> */}
					</div>
				</figure>
			</Link>
		</footer>
	);
}
