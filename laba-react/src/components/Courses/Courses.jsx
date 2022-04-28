import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import '../../App.scss';
import './courses.scss';

function Courses() {
	return (
		<div className='content'>
			<SearchBar />
			<div className='content-courses'>
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
		</div>
	);
}

export default Courses;
