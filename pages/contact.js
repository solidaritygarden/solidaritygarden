import React, { useState } from 'react';
import Layout from './components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	const [contactInfo, setContactInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		preference: '',
		comment: '',
	});

	const clearInput = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: '' });
	};
	const handleChange = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const JSONdata = JSON.stringify(contactInfo);
		const endpoint = '/api/contactForm';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};
		const response = await fetch(endpoint, options);
		const result = await response.json();

		alert(`Thanks ${result.data}! Someone will reach out to you soon!`);
		setContactInfo({ firstName: '', lastName: '', email: '', phone: '', preference: '', comment: '' });
	};

	return (
		<Layout siteTitle={'Contact Us'} siteDescription={'Get in touch with us'} className={styles.fill}>
			<h2 className={styles.title}>Contact Us</h2>
			<section className={styles.content}>
				<div className={styles.contactContainer}>
					<p>Fill out this form and we'll get back to you as soon as we can!</p>
					<form id={styles.contactForm} action="https://formspree.io/f/xzbwrwyg" method="post" onSubmit={handleSubmit}>
						<div className={styles.input}>
							<label htmlFor="firstName">First Name</label>
							<input
								name="firstName"
								placeholder="First Name"
								value={contactInfo.firstName}
								onChange={(e) => handleChange(e)}
								onFocus={(e) => clearInput(e)}
								minLength="10"
								maxLength="25"
								required
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor="lastName">Last Name</label>
							<input
								name="lastName"
								placeholder="Last Name"
								value={contactInfo.lastName}
								onChange={(e) => handleChange(e)}
								onFocus={(e) => clearInput(e)}
								minLength="10"
								maxLength="30"
								required
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor="email">Email Address</label>
							<input
								name="email"
								placeholder="Email"
								value={contactInfo.email}
								onChange={(e) => handleChange(e)}
								onFocus={(e) => clearInput(e)}
								minLength="10"
								maxLength="30"
								required
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor="phone">Phone #</label>
							<input
								name="phone"
								placeholder="Phone"
								value={contactInfo.phone}
								onChange={(e) => handleChange(e)}
								onFocus={(e) => clearInput(e)}
								minLength="10"
								maxLength="30"
								pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
							/>
						</div>
						<div className={styles.methodRadioSection}>
							<h3>Preferred Contact Method</h3>
							<div className={styles.methodRadios}>
								<div className={styles.radio}>
									<label htmlFor="phoneRadio">Phone</label>
									<input name="preference" value={'Phone'} type={'radio'} onChange={(e) => handleChange(e)} />
								</div>
								<div className={styles.radio}>
									<label htmlFor="textRadio">Text</label>
									<input name="preference" value={'Text'} type={'radio'} onChange={(e) => handleChange(e)} />
								</div>
								<div className={styles.radio}>
									<label htmlFor="emailRadio">Email</label>
									<input name="preference" value={'Email'} type={'radio'} onChange={(e) => handleChange(e)} />
								</div>
								<div className={styles.radio}>
									<label htmlFor="noneRadio">No Preference</label>
									<input name="preference" value={'No Preference'} type={'radio'} onChange={(e) => handleChange(e)} />
								</div>
							</div>
						</div>
						<div className={styles.inputComment}>
							<label htmlFor="comment">Comments or Questions</label>
							<textarea
								name="comment"
								value={contactInfo.comment}
								placeholder="Comments, Questions, etc"
								onChange={(e) => handleChange(e)}
							/>
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
