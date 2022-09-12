import React from 'react';
import Header from './components/Header';
import Meta from './components/Meta';

export default function Supplies() {
	return (
		<div>
			<Meta siteTitle={'Shop Supplies'} siteDescription={'Get supplies for your garden'} />
			<Header />
			Supplies!
		</div>
	);
}
