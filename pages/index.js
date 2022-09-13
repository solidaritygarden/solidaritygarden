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
						<Image src="/smallest-jonathan-kemper-1HHrdIoLFpU-unsplash (1).jpg" width="200vw" height="300vh" />
						<h3>* grow veggies for yourself and your neighbors</h3>
					</div>
					<div className={styles.landingCard}>
						<Image src="/small-valentina-locatelli-P8bsrm8KbM0-unsplash.jpg" width="200vw" height="300vh" />
						<h3>* ditch your lawn for a sustainable option</h3>
					</div>
					<div className={styles.landingCard}>
						<Image src="/small-priscilla-du-preez-JCZ2pE-Szpw-unsplash.jpg" width="200vw" height="300vh" />
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
