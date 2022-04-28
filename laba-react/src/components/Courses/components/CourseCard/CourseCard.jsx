import React from 'react';
import '../../../../App.scss';
import '../CourseCard/card.scss';

function CourseCard() {
	return (
		<div className='course'>
			<div className='course-text'>
				<h2 className='course-title'>Java</h2>
				<p className='course-subtitle'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
					similique expedita totam tenetur labore laborum atque voluptatibus
					provident! Quia, consequuntur officiis, accusantium aut, incidunt
					delectus pariatur autem soluta quidem sit hic. Quisquam illum placeat
					sunt quia inventore quam accusamus dolorum, quibusdam porro minus
					maiores incidunt, deserunt, quasi totam consequatur mollitia.
				</p>
			</div>
			<div className='course-information'>
				<div className='information-block'>
					<span className='information-title'>Authors:</span>
					<span className='information-text'>
						Dave Simmons, Nikolas Le-Mark, Dave Simmons, Nikolas Le-Mark
					</span>
				</div>
				<div className='information-block'>
					<span className='information-title'>Duration:</span>
					<span className='information-text'>8:00 hours</span>
				</div>
				<div className='information-block'>
					<span className='information-title'>Created:</span>
					<span className='information-text'>01.02.2018</span>
				</div>
				<button className='show-course button'>Show course</button>
			</div>
		</div>
	);
}

export default CourseCard;
