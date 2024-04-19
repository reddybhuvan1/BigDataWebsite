import { useRef } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';


const ContactForm = () => {
	const form = useRef()
	const [isFormSubmitted, setisFormSubmitted] = useState(false)
	return (
		<div className="w-full lg:w-1/2">
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			<div className="leading-loose">
				<form
					ref={form}
					onSubmit={(e) => {
						setisFormSubmitted(true)
						e.preventDefault();
						emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY_EMAILJS, process.env.REACT_APP_TEMPLATE_KEY_EMAILJS, form.current, process.env.REACT_APP_PUBLIC_KEY_EMAILJS)
							.then((result) => {
								setisFormSubmitted(false)
								toast.success('Contact form submitted!', {
									duration: 4000,
								})
								e.target.reset()
							}, (error) => {
								toast.error('An error occurred!', {
									duration: 4000,
								})
							});
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left controlWidth controlMargin"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							required
							cols="14"
							rows="4"
							aria-label="Message"
						></textarea>
					</div>

					<div className={`${isFormSubmitted && 'contact-form-submit-button'} send-message-size font-general-medium px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500 controlPadding-2`}>
						<button
							disabled={isFormSubmitted}
							type="submit"
							aria-label="Send Message"
						>Send Message</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
