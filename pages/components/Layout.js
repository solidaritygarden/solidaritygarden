import Header from './Header';
import Meta from './Meta';
import styles from '../../styles/Layout.module.css';
import PropTypes from 'prop-types';

export default function Layout({ siteDescription, siteTitle, children }) {
	return (
		<section className={styles.layout}>
			<Meta siteTitle={siteTitle} siteDescription={siteDescription} />
			<Header />
			<div className={styles.content}>{children}</div>
		</section>
	);
}

Layout.propTypes = {
	siteDescription: PropTypes.string,
	siteTitle: PropTypes.string,
	children: PropTypes.node,
};
