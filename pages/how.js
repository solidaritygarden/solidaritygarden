import Layout from './components/Layout';
import styles from '../styles/How.module.css';

export default function How() {
	return (
		<Layout
			siteTitle={'How It Works'}
			siteDescription={'Step by step explainer for the solidarity garden process works'}
		>
			<div className={styles.content}>
				<div className={styles.titleSection}>
					<h2 className={styles.title}>How It Works</h2>
					<p>(We're new and figuring this out, so expect changes!)</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Pre-season</h3>
					<p className={styles.explainer}>
						Through these winter months we're getting new people onboarded, finding new plots that people are willing to
						share, and getting supplies ready for the spring. If you're sharing land, we can figure out how much
						vegetable space you're able to offer and make plans for planting, and decide what percentage of the harvest
						you want to keep and what you'd like to share. There will likely be some community building events or skill
						shares too!
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Growing Season</h3>
					<p className={styles.explainer}>
						This will look different depending on how you're participating. If you're sharing land (thank you!), there's
						nothing more you need to do unless you want to. In the early season we will help convert all or a portion of
						the yard that gets full sun to vegetable growing space and prepare other parts of the yard (as desired) for
						moving away from grass lawns.
					</p>
					<p className={styles.explainer}>
						If you're a garden volunteer (thank you!), you'll be helping convert lawns for planting and generally just
						getting your hands dirty.
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Post-Growing Season</h3>
					<p className={styles.explainer}>
						At the end of the growing season, we'll get everything ready for winter. If you're sharing your land again
						the next year, we'll prepare your bed for spring planting. If you're moving on, we'll plant seed for a
						low-maintenance, climate friendly lawn-alternative.
					</p>
				</div>
			</div>
		</Layout>
	);
}
