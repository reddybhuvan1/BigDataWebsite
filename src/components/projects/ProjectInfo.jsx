import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { onlyCurrentProject } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-6 sm:mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{onlyCurrentProject.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light textJustify">
						{onlyCurrentProject.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* URL demo */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{onlyCurrentProject.ProjectInfo.demoUrlHeading}
					</p>
					<a href={onlyCurrentProject.ProjectInfo.demoUrl} className="font-general-regular text-primary-dark dark:text-ternary-light hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300">
						Project Preview
					</a>
				</div>

				{/* URLs code */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{onlyCurrentProject.ProjectInfo.CodeUrlHeading}
					</p>
					<a href={onlyCurrentProject.ProjectInfo.codeUrl} className="font-general-regular text-primary-dark dark:text-ternary-light hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300">
						View Github Repository
					</a>
				</div>

				{/* Single project client details */}
				{ onlyCurrentProject.ProjectInfo.ClientHeading &&
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{onlyCurrentProject.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{onlyCurrentProject.ProjectInfo.CompanyInfo.map(
								(info) => {
									const isWebsite = info.title == 'Website'

									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light textJustify overflowControl"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												{...(isWebsite && { href: info.details })}
												className={
													info.title === 'Website'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>
				}

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{onlyCurrentProject.ProjectInfo.Technologies[0].title}
					</p>
					{/* <p className="font-general-regular text-primary-dark dark:text-ternary-light textJustify">
						{onlyCurrentProject.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p> */}

					<p className="font-general-regular text-primary-dark dark:text-ternary-light techContainer">
						{onlyCurrentProject.ProjectInfo.Technologies[0].techs.map((tech, index) => {
								return <span className='font-general-regular bg-ternary-light dark:bg-ternary-dark techSpan'>{tech}</span>
						})}	
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{onlyCurrentProject.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5 flexWrap">
						{onlyCurrentProject.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-xl lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-3">
					{onlyCurrentProject.ProjectInfo.ProjectDetailsHeading}
				</p>
				{onlyCurrentProject.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light textJustify"
						>
							{details.details}
						</p>
					);
				})}

				{onlyCurrentProject.ProjectInfo.Conclusion && 
					<div className='mt-10'>
						<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-3">
							Conclusion
						</p>
						{onlyCurrentProject.ProjectInfo.Conclusion.map((ins) => {
							return (
								<p
									key={ins.id}
									className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light textJustify"
								>
									{ins.details}
								</p>
							);
						})}
					</div>
				}
			</div>

		</div>
	);
};

export default ProjectInfo;
