import React  from 'react';
import MainPhoto from '../components/home/MainPhoto';
import MainBottom from '../components/home/MainBottom';
import SubPhoto from '../components/home/SubPhoto';
import MiddlePhoto from '../components/home/MiddlePhoto';
import { useRef } from 'react';


const HomeView = () => {
	const MainPhotoRef = useRef(null);
	const SubPhotoRef = useRef(null);
	const MiddlePhotoRef = useRef(null);

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div>
			<div ref={MainPhotoRef}>
				<MainPhoto scrollToSection={scrollToSection} MainPhotoRef={MainPhotoRef} SubPhotoRef={SubPhotoRef} MiddlePhotoRef={MiddlePhotoRef}  />
				</div>
			<div ref={SubPhotoRef}><SubPhoto /></div>
			<div ref={MiddlePhotoRef}><MiddlePhoto /></div>
			<MainBottom />
		</div>
	);
};

export default HomeView;