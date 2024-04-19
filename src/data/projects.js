// Import images
import Clustering1 from '../images/Clustering1.png'
import KNN1 from '../images/KNN1.png'
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
		id: 105,
		title: 'K Means Clustering',
		category: 'Artificial Intelligence',
		img: Clustering1,
	},
	{
		id: 106,
		title: 'K Means Clustering',
		category: 'Problem Solving',
		img: Clustering1,
	},
	{
		id: 107,
		title: 'K Nearest Neighbor',
		category: 'Artificial Intelligence',
		img: KNN1,
	},
	{
		id: 108,
		title: 'K Nearest Neighbor',
		category: 'Problem Solving',
		img: KNN1,
	},
	{
		id:109,
		title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs. Local Machine',
		category: 'Machine Learning',
		img: CLOUD_VS_LOCAL,
	}
];

export const projectsData = projectsDataUnsorted.sort(customSort);