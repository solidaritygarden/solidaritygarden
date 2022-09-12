import React from 'react';
import Layout from './components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	return (
		<Layout siteTitle={'Contact Us'} siteDescription={'Ways to get in touch with us'}>
			<div id={styles.contactContainer}>
				<div>
					<p>
						If you have any questions, comments or concerns, please direct them to the following contact methods,
						otherwise, use the form below. We are a lean operation, but will respond as soon as time permits.
					</p>
					<form id={styles.contactForm}>
						<div className={styles.input}>
							<label>Name</label>
							<input placeholder="Name" />
						</div>
						<div className={styles.input}>
							<label>Email Address</label>
							<input placeholder="Email Address" />
						</div>
						<div className={styles.input}>
							<label>Comments</label>
							<input placeholder="Comments" />
						</div>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</Layout>
	);
}
