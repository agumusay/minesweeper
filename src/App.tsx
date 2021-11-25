import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header logo={logo}>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Link href='https://reactjs.org' target='_self'>
					Learn React
				</Link>
			</Header>
		</div>
	);
}

interface HeaderProps {
	logo: string;
}

const Header: FC<HeaderProps> = ({ children, logo }) => {
	return (
		<header className='App-header'>
			{/* {Boolean(logo) && <img src={logo} className='App-logo' alt='logo' />}
			{Boolean(logo) || 'There is not a logo!'} */}
			{Boolean(logo) ? <img src={logo} className='App-logo' alt='logo' /> : 'There is not a logo!'}
			{children}
		</header>
	);
};

interface LinkProps {
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	rel?: string;
}

const Link: FC<LinkProps> = ({ children, ...restProps }) => (
	<a className='App-link' {...restProps}>
		{children}
	</a>
);

Link.defaultProps = {
	target: '_blank',
	rel: 'noopener noreferrer',
};

export default App;
