import React from 'react'
import PropTypes from 'prop-types'

SearchInput.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

function SearchInput(props) {
	const { value, onChange } = props;

	return (
		<div className="ui fluid icon input">
			<input type="text" value={value} onChange={onChange} placeholder="Search..." />
			<i className="search icon"></i>
		</div>
	)
};

export default SearchInput;

