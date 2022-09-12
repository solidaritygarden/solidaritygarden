import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Meta({ siteTitle, siteDescription }) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>{siteTitle}</title>
			<meta name="Description" content={siteDescription}></meta>
		</Head>
	);
}

Meta.propTypes = {
	siteTitle: PropTypes.string,
	siteDescription: PropTypes.string,
};
