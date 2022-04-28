import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import './App.scss';

function App() {
	return (
		<main className='main'>
			<Header />
			<Courses />
		</main>
	);
}

export default App;
