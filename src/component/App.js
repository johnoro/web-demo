import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/App.css';
import Nav from 'component/nav/index.js';

const App = ({ children }) => {
	return (
		<div className='container'>
			<Nav />
			{children}
		</div>
	);
};

export default App;
