import React from 'react';
import "./Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<h1 className='header__title'>Header title</h1>
				<button className='header__button'>Button</button>
			</div>
		)
	}
}