import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'nav/index.js';

const App = ({ children }) => {
	return (
		<div className='container'>
			<Nav />
			{children}
		</div>
	);
};

export default App;
