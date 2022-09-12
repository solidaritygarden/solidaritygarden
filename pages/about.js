import Link from 'next/link';
import Layout from './components/Layout';

export default function About() {
	return (
		<Layout>
			<div>
				<h2>How It Works</h2>
				<h3>Pre-season</h3>
				<h3>Growing Season</h3>
				<h3>Harvest</h3>
				<h3>Moving On</h3>
			</div>
			<div>
				Back to <Link href="/">Home</Link>
			</div>
		</Layout>
	);
}
