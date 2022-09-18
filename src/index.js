import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from 'app';
import Home from 'home';
import About from 'about';
import Contact from 'contact';
import Testimonials from 'testimonials';
import Entertainment from 'entertainment';
import DragonCave from 'entertainment/dragonCave';
import HumansVsGoblins from 'entertainment/humansVsGoblins';

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
						<Route
							path='humans-vs-goblins'
							element={<HumansVsGoblins />}
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
