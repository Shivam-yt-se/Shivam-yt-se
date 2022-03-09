import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Explore from './Explore/Explore'
import Program from './Program/Program'
import Event from './Event/Event'
import Feature from './Feature/Feature'
import Partner from './Partner/Partner'
import Ticker from './Home/Ticker'



const Routing = () => {
  return (
		<div>
			<Header />
		    <Home />
		    <Ticker/>
			<Program />
			<Explore />
			<Event />
			<Feature />
			<Partner />
			<Footer />
		</div>
	);
}

export default Routing