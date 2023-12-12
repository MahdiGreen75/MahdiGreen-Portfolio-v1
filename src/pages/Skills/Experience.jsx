import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiTwotoneApi } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSyncAlt } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
const Experience = () => {
    return (
        <div>
            <HeadingTitle title={"work experience"}></HeadingTitle>
            <div className="p-5 border-2">
                <p className="text-base font-semibold"><span className="mr-1 text-extrabold p-1 rounded-sm bg-blue-600">Note:</span> I have no Professional word experience.During my learning period.
                    I achived some client side and server side programming using react, node,
                    mongodb and countless npm packages.
                </p>
                <div>
                    <ol className="flex flex-col gap-1 mt-2">
                        <li className="flex">
                        <SiMongodb className="p-1 text-3xl text-green-600 border mr-1 rounded-full"/>
                            Proficiency in working with MongoDB, a NoSQL database, for storing and retrieving data.
                        </li>
                        <li className="flex">
                        <SiExpress  className="p-1 text-3xl text-white-600 border mr-1 rounded-full"/>
                            Strong knowledge of Express.js, a web application framework for Node.js, to build robust and scalable server-side applications.
                        </li>
                        <li className="flex">
                        <IoLogoReact  className="p-1 text-3xl text-blue-600 border mr-1 rounded-full"/>
                            Expertise in building user interfaces using React.js, a JavaScript library for creating dynamic and interactive UIs.
                        </li>
                        <li className="flex">
                        <AiTwotoneApi  className="p-1 text-3xl text-red-600 border mr-1 rounded-full"/>
                            Ability to design and implement RESTful APIs for communication between the frontend and backend components.
                        </li>
                        <li className="flex">
                        <IoLogoJavascript  className="p-1 text-3xl text-yellow-500 border mr-1 rounded-full"/>
                            Proficiency in modern JavaScript (ES6 and beyond) for both frontend and backend development.
                        </li>
                        <li className="flex">
                        <FaGit  className="p-1 text-3xl border mr-1 rounded-full"/>
                            Knowledge of version control systems, particularly Git, for collaborative development and code management.
                        </li>
                        <li className="flex">
                        <FaSyncAlt  className="p-1 text-3xl text-pink-600 border mr-1 rounded-full"/>
                            Understanding and implementation of asynchronous programming in JavaScript using concepts like Promises and async/await.
                        </li>
                        <li className="flex">
                        <GrDeploy  className="p-1 text-3xl text-blue-600 border mr-1 rounded-full"/>
                            I deployed all the project in vercel, surge, github pages and firbase.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Experience;