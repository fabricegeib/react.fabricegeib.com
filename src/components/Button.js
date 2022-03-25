// import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
	const onClick = () => {
		console.log('click')
	}

	const onEvent = (e) => {
		console.log(e)
	}

	return (
		<button onClick={onEvent} style={{ backgroundColor: color }} className="btn">{text}</button>
	)
}

Button.defaultProps = {
	color: 'steelblue',
	text: 'Button',
}

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
}

export default Button