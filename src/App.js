
import './App.css';
<<<<<<< HEAD
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
=======
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Routing from './components/Routing';
import Routing2 from './components/Routing2';
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
>>>>>>> c2e50a3 (initial commit)
}

export default App;
