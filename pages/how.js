// import Link from 'next/link';
import Layout from './components/Layout';
import styles from '../styles/How.module.css';

export default function How() {
	return (
		<Layout
			siteTitle={'How It Works'}
			siteDescription={'Step by step explainer for the solidarity garden process works'}
		>
			<div className={styles.content}>
				<div>
					<h2 className={styles.aboutTitle}>How It Works</h2>
					<p className={styles.explainer}>
						I'm baby gochujang typewriter hashtag ethical, post-ironic pour-over tacos irony chambray coloring book man
						braid waistcoat sartorial. Pitchfork hella offal, sustainable tonx literally subway tile shaman twee vinyl.
						Big mood iPhone asymmetrical la croix chambray pitchfork. Retro whatever narwhal actually hexagon meh copper
						mug asymmetrical lumbersexual polaroid vegan four loko cloud bread lyft kogi.
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Pre-season</h3>
					<p className={styles.explainer}>
						Whatever taxidermy raw denim franzen etsy. Deep v lyft pitchfork yr, gochujang palo santo narwhal venmo
						selvage butcher small batch fingerstache. Forage echo park cardigan coloring book freegan glossier gochujang
						palo santo 3 wolf moon. Vice direct trade knausgaard portland pabst, bicycle rights jean shorts yuccie
						slow-carb synth vape beard.
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Growing Season</h3>
					<p className={styles.explainer}>
						Schlitz hell of tofu iceland pitchfork. Listicle roof party fit, subway tile chambray vaporware celiac
						knausgaard. Street art snackwave meditation austin, mukbang unicorn small batch banh mi direct trade. Next
						level actually fashion axe you probably haven't heard of them, raw denim wolf snackwave.
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Harvest</h3>
					<p className={styles.explainer}>
						Meh cornhole 8-bit, kogi pitchfork biodiesel unicorn plaid vegan fashion axe aesthetic mixtape try-hard tote
						bag salvia. Skateboard gatekeep keffiyeh XOXO air plant before they sold out yes plz, street art distillery
						swag squid austin meggings. Stumptown tumeric tattooed disrupt. Photo booth man bun tbh, disrupt blog
						everyday carry intelligentsia XOXO. Organic thundercats tilde same, chartreuse mustache mixtape bruh photo
						booth meh blue bottle narwhal. Irony artisan mumblecore cray, pop-up palo santo literally twee raclette
						fanny pack DIY chicharrones vinyl.
					</p>
				</div>
				<div>
					<h3 className={styles.subtitle}>Moving On</h3>
					<p className={styles.explainer}>
						Yuccie ascot praxis la croix gluten-free cliche iPhone twee plaid. IPhone pop-up air plant master cleanse,
						pok pok artisan tacos shoreditch coloring book lumbersexual raw denim bodega boys helvetica wolf lo-fi.
						Austin XOXO waistcoat chartreuse flexitarian narwhal helvetica hashtag, twee cloud bread thundercats.
						Bitters hammock af actually.
					</p>
				</div>
			</div>
			{/* <div>
				Back to <Link href="/">Home</Link>
			</div> */}
		</Layout>
	);
}
