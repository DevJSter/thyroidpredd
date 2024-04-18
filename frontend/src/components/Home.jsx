import React from 'react';
import styles from '../Styles/Home.module.scss';
import herobg from '../Assets/imagebg.png';
import modelImage from '../Assets/modelimg.png';
import doctor from '../Assets/doctor.png';
import pills from '../Assets/pills.png';
import report from '../Assets/report.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [data, setData] = React.useState([
		{
			id: 1,
			img: doctor,
			title: 'Find Doctors I can See',
			description:
				'Learn More about our network of experienced providers',
		},
		{
			id: 2,
			img: pills,
			title: 'Get your prescription',
			description:
				'Get your prescription analyzed and delivered to you digitally',
		},
		{
			id: 3,
			img: report,
			title: 'Get Your Report',
			description:
				'Get your health report in your hand',
		},
	]);
	return (
		<>
			<div className={styles.mainWrapper}>
				<div className={styles.main}>
					<img
						src={herobg}
						alt=''
					/>
					<div className={styles.heroSection}>
						<div className={styles.leftHero}>
							<h2>
								Thyroid Navigator <br />
								Your Path to Wellness
							</h2>
							<p>
								Transform your thyroid health assessment
								with our state-of-the-art detection
								technology. Seeing beyond the numbers to
								understand your health better.
							</p>
							<div
								className={styles.buttonPredict}
								onClick={() => {
									navigate('/prediction');
								}}
							>
								Predict Now
							</div>
						</div>
						<div className={styles.rightHero}>
							<img
								src='https://images.indianexpress.com/2023/02/thyroid-1.jpg'
								alt='Image'
								onError={(e) => {
									e.target.src = modelImage;
								}}
							/>
						</div>
					</div>
				</div>
				<div className={styles.sectionTwo}>
					<p>Included Features</p>
					<div className={styles.sectionWrapper}>
						{data.map((item) => {
							return (
								<div
									key={item.id}
									className={styles.section}
								>
									<img
										src={item.img}
										alt=''
									/>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<a href='#'>Learn More</a>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.infoSection}>
					<div className={styles.left}>
						<h3>What is thyroid?</h3>
						<ul>
							<li>
								The <b>thyroid</b> is a small,
								butterfly-shaped gland located at the
								front of your neck, just under the skin1.
								It's part of the endocrine system and
								plays a crucial role in regulating many of
								the body's functions by producing and
								releasing thyroid hormones, such as
								thyroxine (T4) and triiodothyronine (T3).
								These hormones are essential for
								controlling the body's metabolic rate,
								which is how your body converts food into
								energy that cells need to function
							</li>
						</ul>
					</div>
					<div className={styles.right}>
						<img
							src='https://st3.depositphotos.com/6563466/36782/i/450/depositphotos_367820126-stock-photo-human-body-glands-thyroid-gland.jpg'
							alt=''
						/>
					</div>
				</div>
				<div className={styles.infoSectionTwo}>
					<div className={styles.left}>
						<h3>How Thyroid Occurs?</h3>
						<ul>
							<li>
								<b>Hyperthyroidism</b>: This condition
								occurs when the thyroid gland produces too
								much thyroid hormone, leading to an
								overactive metabolism. Symptoms include a
								faster heart rate, feeling tired,
								unexplained weight gain, and sensitivity
								to cold 2.
							</li>
							<li>
								<b>Hypothyroidism</b>: Hypothyroidism
								happens when the thyroid gland produces
								too little thyroid hormone, causing a
								slowed metabolism. Symptoms include a
								slower heart rate, fatigue, unexplained
								weight loss, and sensitivity to heat
							</li>
							<li>
								<b>Thyroid Cancer</b>: Thyroid cancer can
								occur in any part of the thyroid gland and
								is often diagnosed through a biopsy. It
								can be treated by removing the cancerous
								tissue or the entire thyroid gland through
								surgery
							</li>
						</ul>
					</div>
					<div className={styles.right}>
						<img
							src='https://teachmeanatomy.info/wp-content/uploads/Overview-of-the-Thryoid-Gland-scaled.jpeg'
							alt=''
							className={styles.imageTwo}
						/>
					</div>
				</div>
				<div className={styles.infoSection}>
					<div className={styles.left}>
						<h3>Thyroid Treatment</h3>
						<ul>
							<li>
								<b>Antithyroid Drugs</b>: For
								hyperthyroidism, antithyroid drugs like
								methimazole and propylthiouracil are used
								to block the thyroid's ability to produce
								hormones, offering rapid control
							</li>
							<li>
								<b>Radioiodine Therapy</b>: This treatment
								involves the use of radioactive iodine to
								damage thyroid cells, preventing them from
								producing high levels of thyroid hormone
							</li>
							<li>
								<b>Surgery</b>: In some cases,
								thyroidectomy (surgical removal of the
								thyroid) may be recommended for a more
								permanent solution, especially for thyroid
								cancer or when other treatments are
								ineffective
							</li>
						</ul>
					</div>
					<div className={styles.right}>
						<img
							src='https://www.informedhealth.org/grafiken/en_schilddruese_anatomie_replacement_image.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
//
