import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import './courses.scss';

function Courses({filterPosts}) {
	return (
		<div className='content'>
			<div className='content-courses'>{
				filterPosts.map((post) => {
					return (
						<CourseCard
							title={post.title}
							description={post.description}
							authors={post.authors}
							duration={post.duration}
							creationDate={post.creationDate}
							key={post.id}
						/>
					)
				})
			}</div>
		</div>
	);
}

export default Courses;
