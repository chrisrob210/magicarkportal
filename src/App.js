import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Pages
import Home from './pages';
import Shop from './pages/shop';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/shop' element={<Shop/>} />
	</Routes>
	</Router>
);
}

export default App;
