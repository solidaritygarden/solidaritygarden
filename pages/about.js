import PropTypes from 'prop-types';
import Layout from './components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';

const About = ({ about_title, about_description }) => {
	return (
		<Layout siteTitle={about_title} siteDescription={about_description}>
			<div className={styles.content}>
				<section>
					<h2 className={styles.title}>What We're About</h2>
					<div id={styles.solidaritySection}>
						<div id={styles.solidarityExplainer}>
							<h3 className={styles.subtitle}>Solidarity</h3>
							<p className={styles.explainer}>
								For us, solidarity is the name of the game.Solidarity isn't charity. It means showing up for your
								community. Things can seem very uncertain in a lot of ways these days, and it often feels like those in
								charge have left us out to dry, but by building solid bonds with your neighbors--in our case, through
								food security--we can build strong and resilient communities that we can feel safer in given an
								uncertain future.
							</p>
						</div>
						<div>
							<figure className={styles.aboutImage}>
								<Image src="/small-joel-muniz-MA-food-distro-unsplash.jpg" height="300vh" width="400vw" />
							</figure>
							<div className={styles.colorChunk} />
						</div>
					</div>
					<div id={styles.climateSection}>
						<div id={styles.climateExplainer}>
							<h3 className={styles.subtitle}>Climate Justice</h3>
							<p className={styles.explainer}>
								The climate crisis is here; there's no denying it anymore. As it's effects are currently and have always
								affected marginalized communities disproportionately more, it is important to center those communities
								in our struggle toward climate resilience. While we cannot promise that we won't mess up, we try and
								guide our decisions with climate justice in mind.
							</p>
						</div>
						<div>
							<figure className={styles.aboutImage}>
								<Image src="/small-markus-spiske-climate-justice-protest-unsplash.jpg" height="300vh" width="400vw" />
							</figure>
							<div className={styles.colorChunkLeft} />
						</div>
					</div>
					<div id={styles.foodSecuritySection}>
						<div id={styles.foodSecurityExplainer}>
							<h3 className={styles.subtitle}>Food Security</h3>
							<p className={styles.explainer}>
								These concepts come together under food security. Many people in our community experience food
								insecurity. This, unfortunately, is only set to increase as climate events destroy harvests and change
								the way we grow our food. We strive to build strong food networks locally so we aren't as reliant on
								food imported from other regions.
							</p>
						</div>
						<div>
							<figure className={styles.aboutImage}>
								<Image src="/Grow_it_yourself_Solidarity_edit.jpg" height="300vh" width="400vw" />
							</figure>
							<div className={styles.colorChunk} />
						</div>
					</div>
				</section>
				<div className={styles.lineBreak} />
				<div id={styles.landback}>
					<h3 className={styles.subtitle}>Land Back</h3>
					<div className={styles.landBackImage}>
						<figure>
							<Image src="/small-joanna-kozik-west-landscape-unsplash.jpg" height="300vh" width="500vw" />
						</figure>
					</div>
					<p className={styles.landBackExplainer}>
						Something that is one of the guiding principles of our work is understanding that this land we are living on
						was stolen from the indigenous tribes that lived here long before the so-called "United States of America"
						was formed. It is important to understand that this colonial project isn't "finished" and land is currently
						being taken from tribal soverignty as the government sees fit to go back on treaties that have existed for
						over a century or more. We invite participants to examine what "land ownership" means on land that was
						stolen and how that incorporates into building solidarity and food security with your community.{' '}
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default About;

export async function getStaticProps() {
	const siteConfig = await import(`../data/config.json`);
	return {
		props: {
			about_title: siteConfig.default.about_title,
			about_description: siteConfig.default.about_description,
		}, // will be passed to the page component as props
	};
}

About.propTypes = {
	about_title: PropTypes.string,
	about_description: PropTypes.string,
};
