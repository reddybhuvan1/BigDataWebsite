import { useState, createContext, useEffect } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { useParams } from 'react-router-dom';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const params = useParams()
	const name = params.name.replace(/-/g, ' ')
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson.map((el, key) => {
			if (el.ProjectHeader.title.toLowerCase() === name) {
				return singleProjectDataJson[key]
			}
		})
	);
	useEffect(() => {
		setSingleProjectData(singleProjectDataJson.map((el, key) => {
			if (el.ProjectHeader.title.toLowerCase() === name) {
				return singleProjectDataJson[key]
			}
		}))
	}, [name])
	let onlyCurrentProject = singleProjectData.filter((el) => el !== undefined)
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, onlyCurrentProject: onlyCurrentProject[0] }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
