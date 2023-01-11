import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Map from '../components/Map';
import Gallery from '../components/Gallery';
import Dropdown from '../components/Dropdown';

const Home: NextPage = () => {
	return (
		<>
			<div className='bg-orange-600 bg-opacity-90 text-slate-200 h-screen snap-mandatory snap-y overflow-scroll -z-10 px-auto mx-auto'>
				<Head>
					<title>Wadadli Jerk | Authentic Antiguan Cuisine</title>
				</Head> 
				<Header />
				{/* Hero */}
				<section id='hero' className='snap-start'>
					<Map />
				</section>
				{/* Gallery */}
				<section id='gallery' className='snap-center'>
					<Gallery/>
				</section>
				{/* Contact Me */}
			</div>
		</>
	);
};
export default Home;