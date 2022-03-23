// import React from 'react'

const Button = ({ color, text }) => {
	return (
		<button className="btn">{text}</button>
	)
}

Button.defaultProps = {
	text: 'Button',
}

export default Button