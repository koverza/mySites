import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import './courses.scss';

function Courses({posts}) {
	const coursesList = posts.map((post) => {
		return (
			<CourseCard
				title={post.title}
				description={post.description}
				authors={post.authors}
				duration={post.duration}
				creationDate={post.creationDate}
				key={post.id}
			/>
		);
	});

	return (
		<div className='content'>
			<div className='content-courses'>{coursesList}</div>
		</div>
	);
}

export default Courses;
