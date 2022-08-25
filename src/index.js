import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'css/index.css';
import App from 'component/App';
import Home from 'component/home';
import About from 'component/about';
import Contact from 'component/contact';
import Entertainment from 'component/entertainment';
import Testimonials from 'component/testimonials';
import reportWebVitals from 'util/reportWebVitals';

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
						element={<Entertainment />}
					/>
					<Route
						path='testimonials'
						element={<Testimonials />}
					/>
				</Routes>
			</App>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
