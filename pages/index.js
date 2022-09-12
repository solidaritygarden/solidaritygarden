import Layout from './components/Layout';
import PropTypes from 'prop-types';

const Home = ({ title, description }) => {
	return (
		<Layout pathname="/" siteTitle={title} siteDescription={description}>
			Hello World.
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
