
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Routing from './components/Routing';
// import Routing2 from './components/Routing2';
import About from './components/About';

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Routing />} />
					{/* <Route exact path="/routing2" element={<Routing2 />} /> */}
					<Route exact path="/About" element={<About />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
