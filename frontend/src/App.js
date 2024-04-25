import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
// import Thyroid from "./components/Prediction";
import Login from './components/Login';
import Home from './components/Home';
import Blogs from './components/Blogs';
import NavBar from './components/NavBar';
import Thyroid from './components/Prediction';
import Footer from './components/Footer';
import AwareNess from './components/AwareNess';

const App = () => {
	return (
		<>
			<Router>
				<NavBar className='w-screen h-auto' />
				<Routes>
					<Route
						exact
						path='/Blogs'
						element={<Blogs />}
					/>
					<Route
						path='/Login'
						element={<Login />}
					/>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					{/* <Route exact path="*" element={<NotFound />} /> */}
					<Route
						path='/Home'
						element={<Home />}
					/>
					<Route
						path='/prediction'
						element={<Thyroid />}
					/>
					<Route
						path='/Awareness'
						element={<AwareNess />}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default App;
