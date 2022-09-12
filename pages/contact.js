import React from 'react';
import Header from './components/Header';
import Meta from './components/Meta';

export default function Contact() {
	return (
		<div>
			<Meta siteTitle={'Contact Us'} siteDescription={'These are the ways to get in touch with us!'} />
			<Header />
			<p>
				If you have any questions, comments or concerns, please direct them to the following contact methods, otherwise,
				use the form below. We are a lean operation, but will respond as soon as time permits.
			</p>
			<form>
				<div>
					<label>Name</label>
					<input />
				</div>
				<div>
					<label>Email Address</label>
					<input />
				</div>
				<div>
					<label>Comments</label>
					<input />
				</div>
			</form>
		</div>
	);
}
