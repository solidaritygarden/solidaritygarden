import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home = ({ title, description }) => {
	return (
		<Layout siteTitle={title} siteDescription={description}>
			<div className={styles.content}>
				<section id="landingCardSection" className={styles.landingCardSection}>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<Image
								src="/jonathan-hanna-raised-bed-beets-unsplash_adobe_express.png"
								width={500}
								height={500}
								layout="responsive"
							/>
						</figure>
						<h3 className={styles.cardTitles}>share your lawn and grow food for you and your neighbors</h3>
					</div>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<Image
								src="/small-priscilla-du-preez-tending-garden-unsplash.jpg"
								width={100}
								height={100}
								layout="responsive"
							/>
						</figure>
						<h3 className={styles.cardTitles}>build local food security</h3>
					</div>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<Image
								src="/small-valentina-locatelli-flower-lawn-dark-unsplash.jpg"
								width={500}
								height={500}
								layout="responsive"
							/>
							{/* <figcaption></figcaption> */}
						</figure>
						<h3 className={styles.cardTitles}>ditch your lawn for a sustainable option</h3>
					</div>
				</section>
				<section id="bulletPoint" className={styles.bulletPoints}>
					<div id="growLocalFood" className={styles.resilient}>
						<h3>Growing food locally creates more resilient communities.</h3>
						<p>
							Our main goal is to grow food resiliency for our community, starting with those experiencing food
							insecurity.
						</p>
					</div>
					<div id="noMoreGrassLawns">
						<h3>Traditional grass lawns increase urban temps and are resource intensive</h3>
						<p>
							Even if you don't want to grow food on your property, changing your lawn to a drought-tolerant,
							low-growing, grass alternative like clover, or a native wildflower mix helps native pollinator populations
							and helps ensure those neighbors who are growing veggies have abundant harvests.
						</p>
					</div>
					<div id="solidarityIsEverything">
						<h3>Solidarity is Everything</h3>
						<p>
							There are many ways to get involved with solidarity gardens even if you can't share your yard. We need
							gardeners, designers, evangelists, artists, and donors. If you have a different way you'd like to show
							your solidarity, that works too!
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	const siteConfig = await import(`../data/config.json`);
	return {
		props: {
			title: siteConfig.default.title,
			description: siteConfig.default.description,
		}, // will be passed to the page component as props
	};
}

Home.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};
