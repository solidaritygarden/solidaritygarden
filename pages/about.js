import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';

const Home = ({ title, description }) => {
	return (
		<Layout siteTitle={title} siteDescription={description}>
			<div className={styles.content}>
				<section>
					<h2 className={styles.title}>What We're About</h2>
					<div id={styles.solidaritySection}>
						<div id={styles.solidarityExplainer}>
							<h3 className={styles.subtitle}>Solidarity</h3>
							<p className={styles.explainer}>
								I'm baby pBR&B forage bespoke small batch aesthetic sriracha, yes plz 90's godard salvia williamsburg
								roof party irony tacos letterpress. Everyday carry chartreuse bespoke, vexillologist jean shorts cronut
								butcher DSA yr man braid viral vinyl. IPhone cold-pressed jean shorts umami, XOXO art party hella occupy
								succulents cray coloring book keytar godard everyday carry plaid. Everyday carry umami pinterest hoodie
								JOMO dreamcatcher. DIY asymmetrical air plant godard franzen austin tbh neutra. Waistcoat banjo freegan
								flexitarian drinking vinegar slow-carb pitchfork. Chambray vexillologist fingerstache humblebrag cronut.
							</p>
						</div>
						<figure>
							<Image src="/small-joel-muniz-3k3l2brxmwQ-unsplash.jpg" height="200vh" width="500vw" />
							<figcaption></figcaption>
						</figure>
					</div>
					<div id={styles.climateSection}>
						<div id={styles.climateExplainer}>
							<h3 className={styles.subtitle}>Climate Justice</h3>
							<p className={styles.explainer}>
								Tofu chicharrones hexagon fingerstache occupy. Whatever portland direct trade pork belly meggings.
								Kickstarter hammock chambray marfa hella PBR&B. Vibecession yr 3 wolf moon sustainable, williamsburg
								everyday carry schlitz. Raclette microdosing iceland mustache. Poutine four loko food truck, vape
								glossier flexitarian cloud bread umami hella cardigan readymade affogato banh mi biodiesel.
							</p>
						</div>
						<figure>
							<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="500vw" />
							<figcaption></figcaption>
						</figure>
					</div>
					<div>
						<h3 className={styles.subtitle}>Food Security</h3>
						<p className={styles.explainer}>
							Pickled tacos narwhal la croix subway tile snackwave synth hot chicken hoodie. Praxis tbh tattooed ascot
							green juice chillwave marfa chicharrones. Sartorial scenester lumbersexual, bodega boys tattooed normcore
							coloring book snackwave pork belly roof party kitsch. Cliche gatekeep small batch, cornhole bruh mukbang
							microdosing +1 lyft jianbing art party pork belly vaporware. Tumblr paleo skateboard celiac shoreditch DIY
							activated charcoal tote bag trust fund JOMO. Yuccie iPhone synth knausgaard shoreditch mlkshk crucifix
							wayfarers.
						</p>
					</div>
				</section>
				<section id={styles.mutualAidSection}>
					<h2 className={styles.title}>What is Mutual Aid?</h2>
					<div id={styles.mutualAidInnerSection}>
						{/* <p className={styles.explainer}>
						Subway tile air plant bespoke fashion axe, before they sold out cliche sustainable twee retro fanny pack
						deep v umami. Kitsch cray artisan hot chicken franzen tumblr. Photo booth schlitz chartreuse mlkshk. Etsy
						hammock XOXO, lyft salvia knausgaard keytar yr next level austin hot chicken small batch.
					</p> */}
						<p>
							Live-edge hammock fam banh mi banjo, kickstarter forage fit succulents. Organic marfa affogato four loko
							thundercats deep v tousled. Sus same craft beer viral freegan jean shorts. Trust fund typewriter you
							probably haven't heard of them quinoa. Polaroid organic helvetica, raw denim kickstarter tumblr
							shoreditch. Af leggings fixie, hella typewriter cred slow-carb before they sold out single-origin coffee
							dreamcatcher beard pop-up gastropub selvage.
						</p>
						<div className={styles.landBackPicture}>
							<h3 className={styles.subtitle}>Solidarity Not Charity</h3>
							<figure>
								<Image src="/small-joel-muniz-3k3l2brxmwQ-unsplash.jpg" height="200vh" width="500vw" />
								<figcaption></figcaption>
							</figure>
						</div>
					</div>
				</section>
				<section id={styles.landback}>
					<h3 className={styles.subtitle}>Land Back</h3>
					<div className={styles.center}>
						<figure>
							<Image src="/small-joanna-kozik-yht4AxGHS8Y-unsplash.jpg" height="200vh" width="500vw" />
							<figcaption></figcaption>
						</figure>
					</div>
					<p className={styles.explainer}>
						3 wolf moon farm-to-table kinfolk twee. Hella cornhole art party vibecession edison bulb viral locavore XOXO
						jean shorts air plant vegan gochujang. Neutra art party four loko tonx cray cardigan, lyft waistcoat
						gastropub church-key. Fam portland try-hard ethical bodega boys hexagon flexitarian shaman microdosing
						jianbing beard selvage twee. Narwhal yes plz trust fund neutra flexitarian activated charcoal affogato big
						mood dreamcatcher post-ironic meggings 8-bit. Hashtag hell of marfa williamsburg, sustainable YOLO four
						dollar toast asymmetrical.
					</p>
				</section>

				<section id={styles.waysSection}>
					<h2 className={styles.title}>Ways to Get Involved</h2>
					<div id={styles.waysCardSection}>
						<div className={styles.waysCard}>
							<h3 className={styles.subtitle}>Donor</h3>
							<p className={styles.explainer}>
								Schlitz activated charcoal drinking vinegar banh mi, crucifix pop-up ennui quinoa readymade fam pug kogi
								chicharrones irony vaporware. Shabby chic distillery green juice tumblr, mixtape banh mi hashtag
								sustainable subway tile farm-to-table freegan. Taiyaki helvetica lumbersexual, beard woke four dollar
								toast keffiyeh.
							</p>
						</div>
						<div className={styles.waysCard}>
							<h3 className={styles.subtitle}>Hands-on Participant</h3>
							<p className={styles.explainer}>
								Roof party tumblr ugh pickled waistcoat taiyaki ennui retro marfa snackwave austin typewriter
								kickstarter four dollar toast. Shaman thundercats try-hard ugh, woke literally cornhole mlkshk
								knausgaard edison bulb normcore. Taiyaki gentrify readymade, tousled tote bag offal lo-fi typewriter.
							</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	const siteConfig = await import(`../data/config.json`);
	return {
		props: {
			title: siteConfig.default.title,
			description: siteConfig.default.description,
		}, // will be passed to the page component as props
	};
}

Home.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};
