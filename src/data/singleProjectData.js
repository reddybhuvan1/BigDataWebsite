// Import images
import CVL1 from '../images/cloudvslocal.jpg';
import CVL2 from '../images/cloudvslocal2.png';
import CVL3 from '../images/cloudvslocal3.png';
import CVL4 from '../images/cloudvslocal4.jpg.png';
import CVL5 from '../images/cloudvslocal5.png';
import CVL6 from '../images/cloudvslocal6.png';
import CVL7 from '../images/cloudvslocal7.png';
import CVL8 from '../images/cloudvslocal8.jpg';
import Clustering2 from '../images/Clustering2.png';
import Clustering3 from '../images/Clustering3.png';
import Clustering4 from '../images/Clustering4.png';
import KNN2 from '../images/KNN2.png';
import KNN3 from '../images/KNN3.png';
import KNN4 from '../images/KNN4.png';
// Import icons
import {
	FiLinkedin,
	FiYoutube,
} from 'react-icons/fi';
import { projectsData } from './projects';

const processData = () => {
	return singleProjectRawData.map(rawProject => {
		rawProject['ProjectInfo'].SocialSharingHeading = 'Share This'
		rawProject['ProjectInfo'].SocialSharing = [
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		]

		let categories = (projectsData.filter(project => rawProject.id.includes(project.id))).map(project => project.category)

		let relatedProjects = projectsData.filter(project => categories.includes(project.category) && !rawProject.id.includes(project.id))
		relatedProjects = relatedProjects.filter((value, index, self) => {
			return self.findIndex(v => v.title === value.title) === index;
		})

		relatedProjects.forEach(rp => {
			let count = (projectsData.filter(p => p.title==rp.title && categories.includes(p.category))).length
			rp.count = count
		})

		relatedProjects.sort((a,b) => b.count - a.count)
		
		rawProject['RelatedProject'] = {
			title: 'Related Projects',
			Projects: relatedProjects
		}

		return rawProject
	})
}

let singleProjectRawData = [
	{
		id:[109],
		ProjectHeader: {title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', publishDate: 'APR 19, 2024', tags: 'ML - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL1},
			{id: 2, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL2},
			{id: 3, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL3},
			{id: 4, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL4},
			{id: 5, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL5},
			{id: 6, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL6},
			{id: 7, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL7},
			{id: 8, title: 'Comparative Performance Evaluation of Machine Learning Model on Cloud vs Local Machine', img: CVL8},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'The objective of this study is to compare the performance of machine learning models executed on cloud-based platforms versus local machine infrastructure. As cloud computing becomes increasingly prevalent in various fields, it is crucial to understand the differences in performance between cloud-based and conventional local computing environments. This research focuses on evaluating metrics such as execution time, resource utilization, and cost-effectiveness of machine learning models on cloud-based platforms like Azure ML and AWS SageMaker, in comparison to traditional local machine configurations. The goal is to assess the feasibility and efficiency of using cloud resources for executing machine learning tasks.',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/",
			demoUrlHeading: "Demo",
			demoUrl: "",
			Technologies: [{title: 'Tools & Technologies', techs: ['Microsoft Azure ML Studio', 'Amazon AWS SageMaker', 'Local Machine Configuration', 'Python']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This project is a comprehensive comparative performance evaluation of a machine learning model—specifically, a decision tree classifier—across cloud-based platforms and a local machine infrastructure. The study primarily focuses on the execution of the model using Microsoft Azure ML Studio and Amazon AWS SageMaker as cloud computing platforms, contrasted with a local setup utilizing a machine equipped with an M2 chip and 8GB of unified memory.'},
				{id: 2, details: 'The decision tree model is employed to predict stroke using a healthcare dataset selected from Kaggle. The dataset is prepared by cleaning and imputing missing values for age and BMI with the mean values to ensure there are no null values. Each platform—Azure, AWS, and the local machine—builds the model under similar conditions to ensure a fair comparison of evaluation metrics, including accuracy, precision, recall, and F1-score.'},
				{id: 3, details: 'Key elements of the project include:'},
				{id: 4, details: 'Data Preparation and Storage: Utilizing Azure Blob Storage and Amazon S3 for cloud storage, with data preparation facilitated through tools like AWS Data Wrangler.'},
				{id: 5, details: 'Model Building and Evaluation: Each platform runs the decision tree algorithm, with performance metrics evaluated to assess model effectiveness in classifying and predicting outcomes.'},
				{id: 6, details: 'Resource Utilization and Cost Analysis: The study examines CPU and memory usage across platforms to determine the most cost-effective solution while considering scalability and computational demands.'}
			],
			Conclusion: [
				{id: 1, details: 'The project aims to highlight the advantages and potential limitations of cloud-based machine learning solutions compared to traditional local computing, providing insights into scalability, cost, and performance efficiency. This information is crucial for organizations considering the transition to cloud platforms for their machine learning tasks.'},
			],
		}
	},
	
	{
		id:[105,106],
		ProjectHeader: {title: 'K Means Clustering', publishDate: 'June 25, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'K Means Clustering', img: Clustering2},
			{id: 2, title: 'K Means Clustering', img: Clustering3},
			{id: 3, title: 'K Means Clustering', img: Clustering4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement K-Means Clustering Algorithm and visualize using graph',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/K-Means-Cluster",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/K-Means-Cluster/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Chart.JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'An unsupervised machine learning classification algorithm implemented in JavaScript.'},
				{id: 2, details: 'Chart.js is used to visualize how K-Means algorithm works. In this project, data points have two features RGB and WGB which relate to the medical data of patients. After the algorithm has finished executing, patients are divided into different groups based on clusters.'},
			]
		}
	},

	{ 
		id:[107,108],
		ProjectHeader: {title: 'K Nearest Neighbor', publishDate: 'June 19, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'K Nearest Neighbor', img: KNN2},
			{id: 2, title: 'K Nearest Neighbor', img: KNN3},
			{id: 3, title: 'K Nearest Neighbor', img: KNN4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement K-Nearest Neighbor Algorithm and visualize using graph',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/K-Nearest-Neighbor",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/K-Nearest-Neighbor",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Chart.JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A supervised machine learning classification algorithm implemented in JavaScript.'},
				{id: 2, details: 'Chart.js is used to visualize how K-Nearest Neighbor algorithm works. In this project, data points have two features Humidity and Pressure which relate to the history of weather. The algorithm makes a prediction whether it will rain or not based on the input test data.'},
			],
		}
	},
]

export const singleProjectData = processData()