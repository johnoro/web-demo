import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'css/index.css';
import App from 'component/App';
import Home from 'component/home';
import About from 'component/about';
import Contact from 'component/contact';
import Testimonials from 'component/testimonials';
import Entertainment from 'component/entertainment';
import DragonCave from 'component/entertainment/dragonCave';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App>
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='entertainment'
						element={<Entertainment />}>
						<Route
							path='dragon-cave'
							element={<DragonCave />}
						/>
					</Route>
					<Route
						path='testimonials'
						element={<Testimonials />}
					/>
				</Routes>
			</App>
		</BrowserRouter>
	</React.StrictMode>
);
