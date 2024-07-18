import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ToTop from './components/common/ToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div>
			<Header></Header>
			<main><Outlet /></main>
			<ToTop></ToTop>
			<Footer></Footer>
		</div>
	);
};

export default Layout;