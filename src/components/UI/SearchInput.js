import React from 'react'
import PropTypes from 'prop-types'

SearchInput.propTypes = {

}

function SearchInput(props) {
	return (
		<div class="ui icon input">
			<input type="text" placeholder="Search..." />
			<i class="search icon"></i>
		</div>
	)
};

export default SearchInput;

