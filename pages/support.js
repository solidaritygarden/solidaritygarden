import Link from 'next/link';
import React from 'react';
import Layout from './components/Layout';
import styles from '../styles/Support.module.css';
import Image from 'next/image';

export default function Support() {
	return (
		<Layout siteTitle={'Support Us'} siteDescription={'Ways to support out work.'}>
			<div id={styles.supportContainer}>
				<div className={styles.supportSection}>
					<h2 className={styles.title}>Ways to Get Involved</h2>
					<p className={styles.explainer}>
						The best way to support us is the way that suits you the best! Not everyone is able to share their land or
						donate, not everyone is able to be hands on, but everyone is able to participate!
					</p>
				</div>
				{/* Land Section */}
				<div id={styles.landSection}>
					<div id={styles.landExplainer}>
						<h3 className={styles.subtitle}>Land</h3>
						<p className={styles.explainer}>
							One of the most important ways to get involved and show your solidarity is to make the commitment to share
							your land. This can be for one season or several, but this project will not work without folks offering up
							their lawns for community food production.
						</p>
					</div>
					<div>
						<figure className={styles.supportImage}>
							<Image src="/i-do-nothing-but-love-yard-unsplash.jpg" height="300vh" width="400vw" />
						</figure>
						<div className={styles.colorChunk} />
					</div>
				</div>
				{/* Labor Section */}
				<div id={styles.laborSection}>
					<div id={styles.laborExplainer}>
						<h3 className={styles.subtitle}>Labor</h3>
						<p className={styles.explainer}>
							Showing solidarity with your labor doesn't have to mean getting getting your hands dirty. There are lots
							of ways to help! You can talk to your friends and family, spread the love on social media, or get involved
							with behind the scenes with admin or agitprop.
						</p>
					</div>
					<figure className={styles.supportImageLeft}>
						<Image src="/jonathan-kemper-gloves-unsplash.jpg" height="300vh" width="400vw" />
					</figure>
					<div className={styles.colorChunkLeft} />
				</div>
				{/* Money section */}
				<div id={styles.moneySection}>
					<div id={styles.moneyExplainer}>
						<h3 className={styles.subtitle}>Lastly, money</h3>
						<p className={styles.explainer}>
							While offering up your land or labor would be the most encoraged ways to show your solidarity, not
							everyone has time or energy to make that happen. (And frankly we need *some* money for supplies until our
							network gets stronger) We have options for one time donations, sustainer subscriptions, and things for
							purchase like seed bombs, a garden calendar, etc.
						</p>
					</div>
					<div id={styles.imageSection}>
						<div className={styles.supportCard}>
							<p>Calendar</p>
							<figure>
								<Image src="/maddi-bazzocco-calendar-unsplash.jpg" height="200vh" width="300vw" />
							</figure>
						</div>
						<div className={styles.supportCard}>
							<p>Seed Bombs</p>
							<figure>
								<Image src="/small-jonathan-kemper-seed-bomb-close-unsplash.jpg" height="200vh" width="300vw" />
							</figure>
						</div>
						<div className={styles.supportCard}>
							<p>Seed Starter Packs</p>
							<figure>
								<Image src="/small-eco-warrior-princess-seed-packets-unsplash.jpg" height="200vh" width="300vw" />
							</figure>
						</div>
						<div className={styles.supportCard}>
							<p>Open Collective</p>
							<Link href="">
								<Image src="/OpenCollective.jpeg" height="200vh" width="200vw" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
