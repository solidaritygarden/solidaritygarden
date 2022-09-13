import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';
// import Image from 'next/image';

const Home = ({ title, description }) => {
	return (
		<Layout siteTitle={title} siteDescription={description}>
			<div className={styles.content}>
				<section>
					<h2>Tired: Victory Garden</h2>
					<h2>Wired: Solidarity Garden</h2>
					<h3>* grow veggies for yourself and your neighbors</h3>
					<h3>* ditch your lawn for a sustainable option</h3>
					<h3>* build local food security</h3>
					<h3>* </h3>
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
