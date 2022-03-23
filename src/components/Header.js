import PropTypes from 'prop-types';
import './Header.css'
import Button from './Button';

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1 className='header__title'>{title}</h1>
			{/* <button className='header__button'>Button</button> */}
			<Button color='lightskyblue' text='Add' />
		</header>
	)
}

Header.defaultProps = {
	title: 'Header default props'
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header


// Version 1

// import React from 'react';
// import "./Header.css";

// export default class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className='header'>
// 				<h1 className='header__title'>Header title</h1>
// 				<button className='header__button'>Button</button>
// 			</header>
// 		)
// 	}
// }