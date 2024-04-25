import React from 'react';
import styles from '../Styles/Footer.module.scss';
import logo from '../Assets/thycare.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<img
					src={logo}
					alt=''
				/>
				<p>Your Path to wellness</p>
			</div>
			<div className={styles.right}>
				<ul>
					<Link to='/prediction'>Prediction</Link>
					<Link to='/awareness'>Awareness</Link>
					<Link to='https://github.com/DevJSter/thyroidpredd.git'>
						Github
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
