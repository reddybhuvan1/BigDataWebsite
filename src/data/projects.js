// Import images
import CLOUD_VS_LOCAL from '../images/CLOUD_VS_LOCAL.png'

const customSort = (a, b) => {
	const customOrder = [105, 106, 107, 108
	]; 
	const indexA = customOrder.indexOf(a.id);
	const indexB = customOrder.indexOf(b.id);
  
	if (indexA === -1) {
	  return 1; 
	}
	
	if (indexB === -1) {
	  return -1; 
	}
  
	return indexA - indexB; 
};

let projectsDataUnsorted = [
	{
		id:109,
		title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs. Local Machine',
		category: 'Machine Learning',
		img: CLOUD_VS_LOCAL,
	}
];

export const projectsData = projectsDataUnsorted.sort(customSort);