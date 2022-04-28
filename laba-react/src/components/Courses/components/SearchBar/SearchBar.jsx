import React from 'react';
import '../../../../App.scss';
import '../SearchBar/search.scss';

function SearchBar() {
	return (
		<div className='content-top'>
			<div className='search-block'>
				<input
					type='text'
					id='search'
					className='search-input input'
					placeholder='Enter course name...'
				/>
				<label htmlFor='search' className='search-button button'>
					Search
				</label>
			</div>
			<div className='button-add button'>Add new course</div>
		</div>
	);
}

export default SearchBar;
