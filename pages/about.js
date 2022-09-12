import Link from 'next/link';
import Layout from './components/Layout';

export default function About() {
	return (
		<Layout>
			<div>About</div>
			<div>
				Back to <Link href="/">Home</Link>
			</div>
		</Layout>
	);
}
