import './Header.css'

const Header = (props) => {
	return (
		<header className='header'>
			<h1 className='header__title'>{props.title}</h1>
			<button className='header__button'>Button</button>
		</header>
	)
}

Header.defaultProps = {
	title: 'Header default props'
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