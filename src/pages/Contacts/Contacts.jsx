import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ai2i9g', 'template_q4i94de', form.current, 'UK0NQDQQ1u9uHNePi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-full flex items-center justify-center'>
            <form ref={form} onSubmit={sendEmail} className='text-white flex flex-col items-center p-5 border border-gray-700 rounded-3xl'>
                <label>Name</label>
                <input type="text" name="user_name" className='className=" px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400 text-gray-500 font-extrabold hover:bg-gray-300 hover:text-black active:bg-gray-700"' />
                <br />
                <label>Email</label>
                <input type="email" name="user_email" className='className=" px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400 text-gray-500 font-extrabold hover:bg-gray-300 hover:text-black active:bg-gray-700"' />
                <br />
                <label>Message</label>
                <textarea name="message" className='className=" px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400 text-gray-500 font-extrabold hover:bg-gray-300 hover:text-black active:bg-gray-700"' />
                <br />
                <input type="submit" value="Send" className="px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400 text-gray-500 font-extrabold hover:bg-gray-300 hover:text-black active:bg-gray-700" />
            </form>
        </div>

    );
};

export default Contacts;