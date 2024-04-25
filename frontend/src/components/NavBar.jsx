import React from 'react';
import styles from '../Styles/Navbar.module.scss';
import logo from '../Assets/thycare.png';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<img
				onClick={() => {
					window.location.href = '/';
				}}
				src={logo}
				alt=''
			/>
			<div className={styles.links}>
				<a href='/'>Home</a>
				<a href='/awareness'>Awareness</a>
				<a href='/prediction'>Prediction</a>
			</div>
		</div>
	);
};

export default NavBar;
