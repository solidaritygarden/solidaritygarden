import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Meta({ siteTitle, siteDescription }) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>{siteTitle}</title>
			<meta name="Description" content={siteDescription}></meta>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet"></link>
		</Head>
	);
}

Meta.propTypes = {
	siteTitle: PropTypes.string,
	siteDescription: PropTypes.string,
};
