// Import images
import CVL1 from '../images/cloudvslocal.jpg';
import CVL2 from '../images/cloudvslocal2.png';
import CVL3 from '../images/cloudvslocal3.png';
import CVL4 from '../images/cloudvslocal4.jpg.png';
import CVL5 from '../images/cloudvslocal5.png';
import CVL6 from '../images/cloudvslocal6.png';
import CVL7 from '../images/cloudvslocal7.png';
import CVL8 from '../images/cloudvslocal8.jpg';
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
			Results:[
				{id:0, details:'-------------------------------------'},
				{id:1, details:'AWS Amazon Web Services'},
				{id:1, details:'-------------------------------------'},
				{id:2, details:'Confusion Matrix: High number of true negatives (TN) at 925, but relatively low true positives (TP) at 9.'},
				{id:3, details:'Precision for class 1 (positive class) is very low at 0.20.'},
				{id:4, details:'Recall for class 1 is also low at 0.15, meaning the model has low sensitivity.'},
				{id:5, details:'AUC is 0.554, which is close to 0.5, indicating poor performance in distinguishing between classes.'},
				{id:6, details:'Very low memory usage and CPU usage, which is beneficial for cost.'},
				{id:7, details:'-------------------------------------'},
				{id:8, details:'Azure'},
				{id:9, details:'-------------------------------------'},
				{id:10, details:'Confusion Matrix: Similar to AWS and Local, but with a slight increase in TP at 10.'},
				{id:11, details:'Precision for class 1 is the highest among the three at 0.21.'},
				{id:12, details:'Recall for class 1 is also the highest at 0.16.'},
				{id:13, details:'AUC is 0.561, slightly better than AWS and Local.'},
				{id:14, details:'Memory usage is still very low, and CPU usage during training and prediction is in between AWS and Local.'},
				{id:15, details:'-------------------------------------'},
				{id:16, details:'Local Machine'},
				{id:17, details:'-------------------------------------'},
				{id:18, details:'Confusion Matrix: Similar pattern to AWS, with a high number of TN at 924 but low TP at 8.'},
				{id:19, details:'Precision for class 1 is slightly lower than AWS at 0.18.'},
				{id:20, details:'Recall for class 1 is the lowest among the three at 0.13.'},
				{id:21, details:'AUC is 0.546, again indicating poor performance.'},
				{id:22, details:'Memory usage during training is higher, and CPU usage is significantly lower during prediction.'},
			],
			Conclusion: [
				{id: 1, details: 'Considering the performance metrics, Azure leads with a modest advantage in effectively classifying the positive class and distinguishing between the classes. When factoring in the cost-effectiveness, AWS appears more economical due to its lower resource consumption. For scalability, both AWS and Azure provide superior options over a local setup, with the ability to adapt to increased computational demands. The choice between AWS and Azure would depend on the specific requirements of cost efficiency versus performance.'},
			],
		}
	},
]

export const singleProjectData = processData()