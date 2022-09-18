import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// import Image from 'next/image';

const Home = ({ title, description }) => {
	return (
		<Layout siteTitle={title} siteDescription={description}>
			<div className={styles.content}>
				<section id={styles.landingCardSection}>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<div style={{ width: '100%', height: '100%', position: 'relative' }}>
								<Image
									src="/smallest-jonathan-kemper-1HHrdIoLFpU-unsplash.jpg"
									width={500}
									height={500}
									layout="responsive"
								/>
								{/* <figcaption>
								Hands, wearing garden gloves pulls a green leafy vegetable from a raised bed garden.
							</figcaption> */}
							</div>
						</figure>
						<h3>* grow veggies for yourself and your neighbors</h3>
					</div>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<div style={{ width: '100%', height: '100%', position: 'relative' }}>
								<Image
									src="/small-valentina-locatelli-flower-lawn-dark-unsplash.jpg"
									width={500}
									height={500}
									layout="responsive"
								/>
								{/* <figcaption></figcaption> */}
							</div>
						</figure>
						<h3>* ditch your lawn for a sustainable option</h3>
					</div>
					<div className={styles.landingCard}>
						<figure className={styles.imageWrapper}>
							<div style={{ width: '100%', height: '100%', position: 'relative' }}>
								<Image
									src="/small-priscilla-du-preez-tending-garden-unsplash.jpg"
									width={500}
									height={500}
									layout="responsive"
								/>
								{/* <figcaption></figcaption> */}
							</div>
						</figure>
						<h3>* build local food security</h3>
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
