import Link from 'next/link';
import React from 'react';
import Layout from './components/Layout';
import styles from '../styles/Support.module.css';
import Image from 'next/image';

export default function Support() {
	return (
		<Layout siteTitle={'Support Us'} siteDescription={'Ways to support out work.'}>
			<div id={styles.supportContainer}>
				<div className={styles.supportSection}>
					<h2 className={styles.title}>Ways to Get Involved</h2>
					<p className={styles.explainer}>
						The best way to support us is the way that suits you the best! Not everyone is able to donate, not everyone
						is able to be hands on, but everyone is able to participate!
					</p>
				</div>
				{/* Land Section */}
				<div id={styles.landSection}>
					<div id={styles.landExplainer}>
						<h3 className={styles.subtitle}>Land</h3>
						<p className={styles.explainer}>
							I'm baby microdosing disrupt paleo drinking vinegar helvetica schlitz street art. Praxis meditation
							vaporware schlitz, organic kogi retro kickstarter hell of health goth lomo copper mug bitters viral
							shoreditch scenester, helvetica ugh chartreuse cardigan tilde poutine try-hard 3 wolf moon DSA stumptown
							tumeric. Pork belly twee humblebrag, succulents subway tile williamsburg vegan fingerstache. Ethical pug
							bodega boys.
						</p>
					</div>
					<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="500vw" />
				</div>
				{/* Labor Section */}
				<div id={styles.laborSection}>
					<div id={styles.laborExplainer}>
						<h3 className={styles.subtitle}>Labor</h3>
						<p className={styles.explainer}>
							Irony freegan ethical direct trade bitters palo santo. Yuccie roof party cloud bread narwhal cred, pop-up
							slow-carb ramps XOXO meditation banjo. Hashtag trust fund church-key swag gatekeep taiyaki. Butcher 3 wolf
							moon hexagon glossier DSA tumeric. Dreamcatcher disrupt lyft letterpress hoodie. Waistcoat lomo ascot
							cornhole health goth cloud bread cliche edison bulb.
						</p>
					</div>
					<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="500vw" />
				</div>
				{/* Love Section */}
				<div>
					<h3 className={styles.subtitle}>Love</h3>
					<p className={styles.explainer}>
						Pitchfork celiac chia, cornhole bodega boys pinterest edison bulb biodiesel selfies pour-over street art
						narwhal brunch. 8-bit hella occupy austin YOLO vexillologist wayfarers chicharrones authentic gentrify.
						Copper mug DIY letterpress waistcoat chartreuse chicharrones gatekeep air plant keytar subway tile cloud
						bread skateboard farm-to-table. Kitsch tote bag post-ironic, subway tile hot chicken banh mi health goth
						before they sold out whatever man bun sriracha ugh meggings gochujang cray. Cronut vinyl flannel freegan art
						party viral bruh plaid marfa vice photo booth keffiyeh direct trade. Disrupt deep v williamsburg normcore
						viral chambray, cronut salvia cloud bread kinfolk wayfarers sus.
					</p>
				</div>
				{/* Money section */}
				<div id={styles.moneySection}>
					<div id={styles.moneyExplainer}>
						<h3 className={styles.subtitle}>Lastly, money</h3>
						<p className={styles.explainer}>
							Money is unavoidable. We have options for one time donations, sustainer subscriptions, seed bombs, a
							garden calendar etc.
						</p>
					</div>
					<div id={styles.imageSection}>
						<div>
							<p>Calendar</p>
							<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="300vw" />
						</div>
						<div>
							<p>Seed Bombs</p>
							<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="300vw" />
						</div>
						<div>
							<p>Seed Starter Packs</p>
							<Image src="/jonathan-hanna-hvSBya7hX2Q-unsplash.jpg" height="200vh" width="300vw" />
						</div>
						<div>
							<Link href="">
								<p>Open Collective</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
