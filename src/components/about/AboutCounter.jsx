import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 24, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 5, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 10, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center flexOverride">
				<CounterItem
					title="Years of Coding"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Months of Experience"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Awards & Certificates"
					counter={<span id="feedbackCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Complete Projects"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
