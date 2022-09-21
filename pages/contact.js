import React from 'react';
import Layout from './components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	return (
		<Layout siteTitle={'Contact Us'} siteDescription={'Ways to get in touch with us'}>
			<div id={styles.contactBackground}>
				<div id={styles.contactContainer}>
					<p>Fill out this form and we'll get back to you as soon as we can!</p>
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
							<label>Comments or Questions</label>
							<input placeholder="Comments or Questions" />
						</div>
						<button id={styles.contactButton}>Submit</button>
					</form>
				</div>
			</div>
		</Layout>
	);
}
