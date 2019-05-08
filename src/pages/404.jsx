import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
	<Layout>
		<div style={{
			width: '50%',
			left: '25%',
			position: 'relative',
		}}
		>
			<h1><b>NOT FOUND</b></h1>
			<img
				alt="not found"
				src="img/svg/undraw_page_not_found_su7k.svg"
				style={{
					width: '50%',
					left: '25%',
					position: 'relative',
				}}
			/>
			<p>You just found a page that doesn&#39;t exist... the sadness.</p>
		</div>
	</Layout>
);

export default NotFoundPage;
