import React from 'react';
import PropTypes from 'prop-types';

export const DisplayMessage = (props)=>{
	return(
		<div className="message">
			<h1>{props.message}</h1>
		</div>
	)
}


DisplayMessage.propTypes = {
	message: PropTypes.string.isRequired
}