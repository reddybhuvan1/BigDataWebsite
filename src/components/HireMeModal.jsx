import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { projectsData } from '../data/projects';

const selectOptions = [...new Set(projectsData.map(project => project.category))]

const HireMeModal = ({ onClose, onRequest }) => {
	const form = useRef()
	const [name, setname] = useState('')
	const [email, setemail] = useState('')
	const [category, setcategory] = useState('hardcoded')
	const [desc, setdesc] = useState('')
	const [SendRequest, setSendRequest] = useState(false)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div style={{ overflow: "scroll" }} className="hide-scrollbar-modal modal-wrapper flex items-center z-30 overflow-scroll">
					<div className="hire-me-modal modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark min-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={() => onClose(false)}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form
								ref={form}
								onSubmit={async (e) => {
									e.preventDefault();
									if (name && email && desc && category) {
										await setSendRequest(true)
										// setname('')
										// setemail('')
										// setdesc('')
										// setcategory('')
										e.target.reset()
										emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY_EMAILJS, process.env.REACT_APP_HIRE_ME_TEMPLATE_KEY_EMAILJS, form.current, process.env.REACT_APP_PUBLIC_KEY_EMAILJS)
											.then(async (result) => {
												onClose(true)
												setname('')
												setemail('')
												setdesc('')
												setcategory('')
												await setSendRequest(false)
											})
											.catch(async (err) => {
												await setSendRequest(false)
												toast.error("An error occurred!")
											})
									}
								}}
								className="max-w-xl m-4 text-left"
							>
								<div className="">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required
										onInvalid={(e) => e.target.setCustomValidity("Please fill out your name.")}
										onInput={e => e.target.setCustomValidity('')}
										placeholder="Name"
										aria-label="Name"
										onChange={(e) => setname(e.target.value)}
										value={name}
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="email"
										required
										onInvalid={(e) => e.target.setCustomValidity("Please fill out your email.")}
										onInput={e => e.target.setCustomValidity('')}
										placeholder="Email"
										aria-label="Email"
										onChange={(e) => setemail(e.target.value)}
										value={email}
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="category"
										type="text"
										required

										aria-label="Project Category"
										onChange={(e) => setcategory(e.target.value)}
										value={category}
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										required
										onInvalid={(e) => e.target.setCustomValidity("Please fill out description")}
										onInput={F => F.target.setCustomValidity('')}
										aria-label="Details"
										placeholder="Project description"
										onChange={(e) => setdesc(e.target.value)}
										value={desc}
									></textarea>
								</div>

								<div className="mt-6 pb-4 sm:pb-1">
									<span
										type="submit"
										className={`${SendRequest && 'hire-me-modal-button-opacity'} px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500 sendReqWidth`}
										aria-label="Submit Request"
									>
										<button className={'send-req-button'} disabled={SendRequest}>Send Request</button>
										{/* <div style={{ marginLeft: '7.4rem', marginBottom: '' }} className="spin"></div> */}
										{/* <div className="spin"></div> */}
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
