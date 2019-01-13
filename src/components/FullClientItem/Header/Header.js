import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '../../../utils/validation';

FullClientItemContacts.defaultProps = {
	general: {},
	job: {},
};

FullClientItemContacts.propTypes = {
	general: PropTypes.object.isRequired,
	job: PropTypes.object.isRequired,
};

function FullClientItemContacts(props) {
	const { general, job, } = props;

	const firstName = !isEmpty(general.firstName) ? general.firstName : 'Name';
	const lastName = !isEmpty(general.lastName) ? general.lastName : '';
	const jobTitle = !isEmpty(job.title) ? job.title : '';
	const jobCompany = !isEmpty(job.company) ? job.company : '';


	return (
		<div className="fullClientInform__header">
			<h1>{ `${ firstName } ${ lastName }` }</h1>
			<h4>{ `${ jobTitle } — ${ jobCompany }` }</h4>
		</div>
	);
};



export default FullClientItemContacts;

