import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ title, description }) => {
	return (
		<Layout siteTitle={title} siteDescription={description}>
			<div className={styles.content}>
				<section id="aboutBrief">
					<h2>What We're Aboout</h2>
					<h3>Solidarity</h3>
					<h3>Climate Justice</h3>
					<h3>Food Security</h3>
					<h3>Land Back</h3>
				</section>
				<section id="mutualAidBrief">
					<h2>What is Mutual Aid?</h2>
					<h3>Solidarity Not Charity</h3>
				</section>
				<section id="involvedWays">
					<h2>Ways to Get Invlolved</h2>
					<h3>Donor</h3>
					<h3>Hands-on Participant</h3>
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
