import React, { useState } from 'react';
import Layout from './components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	const [contactInfo, setContactInfo] = useState({
		name: 'Name',
		email: 'Email',
		phone: 'Phone Number',
		preference: '',
		comment: 'Questions, Comments, Concerns',
	});
	console.log(contactInfo);

	const handleChange = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('this is contact info', contactInfo);
	};

	return (
		<Layout siteTitle={'Contact Us'} siteDescription={'Get in touch with us'} className={styles.fill}>
			<h2 className={styles.title}>Contact Us</h2>
			<section className={styles.content}>
				<div className={styles.contactContainer}>
					<p>Fill out this form and we'll get back to you as soon as we can!</p>
					<form id={styles.contactForm}>
						<div className={styles.input}>
							<label>Name</label>
							<input
								placeholder="Name"
								name="name"
								value={contactInfo.name}
								onChange={(e) => handleChange(e)}
								minLength="10"
								maxLength="25"
								required
							/>
						</div>
						<div className={styles.input}>
							<label>Email Address</label>
							<input
								placeholder="Email"
								name="email"
								value={contactInfo.email}
								onChange={(e) => handleChange(e)}
								minLength="10"
								maxLength="30"
								required
							/>
						</div>
						<div className={styles.input}>
							<label>Phone #</label>
							<input
								placeholder="Phone"
								name="phone"
								value={contactInfo.phone}
								onChange={(e) => handleChange(e)}
								minLength="10"
								maxLength="30"
							/>
						</div>
						<div className={styles.methodRadioSection}>
							<h3>Preferred Contact Method</h3>
							<div className={styles.methodRadios}>
								<div className={styles.radio}>
									<label>Phone</label>
									<input
										placeholder="Phone"
										type={'radio'}
										name="preference"
										value={'Phone'}
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className={styles.radio}>
									<label>Text</label>
									<input
										placeholder="Text"
										type={'radio'}
										value={'Text'}
										name="preference"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className={styles.radio}>
									<label>Email</label>
									<input
										placeholder="Email"
										type={'radio'}
										value={'Email'}
										name="preference"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className={styles.radio}>
									<label>No Preference</label>
									<input
										placeholder="No Preference"
										type={'radio'}
										name="preference"
										value={'No Preference'}
										onChange={(e) => handleChange(e)}
									/>
								</div>
							</div>
						</div>
						<div className={styles.inputComment}>
							<label>Comments or Questions</label>
							<input placeholder={contactInfo.comment} onChange={(e) => handleChange(e)} />
						</div>
						<button type="submit" className={styles.contactButton} onClick={(e) => handleSubmit(e)} minLength="3">
							Submit
						</button>
					</form>
				</div>
			</section>
		</Layout>
	);
}
