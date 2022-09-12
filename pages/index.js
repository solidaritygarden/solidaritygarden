import PropTypes from 'prop-types';
import Header from './components/Header';
import Meta from './components/Meta';
import styles from '../styles/Home.module.css';

const Home = ({ title, description }) => {
	return (
		<div>
			<Meta siteTitle={title} siteDescription={description} />
			<Header />
			<div className={styles.content}></div>
		</div>
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
