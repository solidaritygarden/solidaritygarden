import Header from './Header';
import Meta from './Meta';
import styles from '../../styles/Layout.module.css';
import PropTypes from 'prop-types';

export default function Layout({ siteDescription, siteTitle, children }) {
	return (
		<section className={styles.layout}>
			<Meta siteTitle={siteTitle} siteDescription={siteDescription} />
			<Header />
			<div id={styles.contentBackground}>
				<div id={styles.content}>{children}</div>
			</div>
		</section>
	);
}

Layout.propTypes = {
	siteDescription: PropTypes.string,
	siteTitle: PropTypes.string,
	children: PropTypes.node,
};
