import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { onlyCurrentProject } = useContext(SingleProjectContext);

	return (
		<div>
			
				{onlyCurrentProject.ProjectHeader.title=="Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine"
				?<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
			A Project by Bhuvan and Ram Charan
			</p>
			:<></>}

				
			
			

			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{onlyCurrentProject.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light svgMinWidth" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{onlyCurrentProject.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light svgMinWidth" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{onlyCurrentProject.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
