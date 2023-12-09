import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
const ContactUs = () => {
    return (
        <div className="mt-28 w-full bg-[#C4C1A4] p-5 text-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h3 className="uppercase text-4xl">Get In Touch</h3>
                <p className="flex gap-1 items-center text-xl"><FaPhone/> Phone: 93(348) 8834 </p>
                <p className="flex gap-1 items-center text-xl"><MdMail/> Email: notemail@gamil.com</p>
                <p className="flex gap-1 items-center text-xl"><FaLocationDot /> Address: Uttora 123, block-D, Dhaka</p>
            </div>
            <form className="mt-8 w-full max-w-[500px] mx-auto flex flex-col gap-4 justify-center items-center">
                <input placeholder="Your Name" className="p-3 w-full h-12" type="email" name="" id="" />
                <input placeholder="Your Email" className="p-3 w-full h-12" type="email" name="" id="" />
                <textarea placeholder="Your Message" rows={5} className="p-3 w-full"></textarea>
                <button className="bg-brown-800  px-5 py-2 rounded-md text-xl font-medium text-white">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;