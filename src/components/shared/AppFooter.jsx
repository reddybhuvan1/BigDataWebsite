import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiFacebook,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/bhuvan-reddy-78903b176',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark controlMargin-3">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="hidden sm:flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
					{/* for small screen */}
					<div className='scroll-contact-icons sm:hidden'>
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i style={{ fontSize: '20px' }}>
									{link.icon}
								</i>
							</a>
						))}
					</div>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
