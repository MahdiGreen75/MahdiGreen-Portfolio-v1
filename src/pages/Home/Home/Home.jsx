/* eslint-disable react/jsx-no-target-blank */
import HeadingTitle from "../../../components/HeadingTitle/HeadingTitle";
import ProjectSwiper from "../ProjectSwiper/ProjectSwiper";
import pic1 from "../../../assets/project1/pic1.png";
import pic2 from "../../../assets/project1/pic2.png";
import pic3 from "../../../assets/project1/pic3.png";
import pic4 from "../../../assets/project1/pic4.png";
import pic5 from "../../../assets/project1/pic5.png";

import pic6 from "../../../assets/project2/img (1).png";
import pic7 from "../../../assets/project2/img (2).png";
import pic8 from "../../../assets/project2/img (3).png";
import pic9 from "../../../assets/project2/img (4).png";
import SwiperTwo from "../SwiperTwo/SwiperTwo";

const pics = { pic1, pic2, pic3, pic4, pic5 };
const nextPics = {pic6, pic7, pic8, pic9};
// console.log(nextPics);

const Home = () => {

    const handleDownloadResume = (e) => {
        e.preventDefault();
        const pdfPath = '../../../../public/pdfs/document.pdf';

        // Create a download link
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'document.pdf';

        // Append the link to the document, trigger the click, and remove the link
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div className="border border-gray-900 my-10"></div>
            <div className="w-full flex justify-center items-center">
                <button onClick={handleDownloadResume} className=" px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400 text-gray-500 font-extrabold hover:bg-gray-300 hover:text-black active:bg-gray-700">Download My Resume</button>
            </div>
            <div className="border border-gray-900 my-10"></div>
            <div className="m-5 flex flex-col items-center justify-center gap-5">
                <HeadingTitle title={"My projects"}></HeadingTitle>
                <div className="p-5 border border-gray-800 rounded-3xl flex flex-col items-center justify-center gap-5">
                    <ProjectSwiper {...pics}></ProjectSwiper>
                    <div className="font-semibold">
                        <span className="font-extrabold">
                            This is a mern stack project. here are some highlighting features:
                        </span>
                        <ol className="list-decimal list-inside">
                            <li>It provides Admin authorization.Admin can do anything.</li>
                            <li>It provides User intrinsic dashboard.</li>
                            <li>Stripe payment intrgration.</li>
                            <li>All the products and items are fully dynamic.</li>
                        </ol>
                    </div>
                    <a href="https://github.com/MahdiGreen75/AlphaFeast-client" target="_blank" className="px-2 py-1 font-bold bg-blue-600 hover:bg-blue-800 active:bg-blue-900 rounded-md">Check This Project</a>
                </div>
            </div>
            <div className="border border-gray-900 my-10"></div>
            <div className="flex items-center justify-center">
                <div className="p-5 border border-gray-800 rounded-3xl flex flex-col items-center justify-center gap-5">
                    <SwiperTwo {...nextPics}></SwiperTwo>
                    <div className="font-semibold">
                        <span className="font-extrabold">
                            This is a mern stack project. here are some highlighting features:
                        </span>
                        <ol className="list-decimal list-inside">
                            <li>It provides user authorization.</li>
                            <li>It provides User intrinsic dashboard.</li>
                            <li>All the API endpoint is protected.</li>
                            <li>All the products and items are fully dynamic.</li>
                        </ol>
                    </div>
                    <a href="https://github.com/MahdiGreen75/TechJobBD-client" target="_blank" className="px-2 py-1 font-bold bg-blue-600 hover:bg-blue-800 active:bg-blue-900 rounded-md">Check This Project</a>
                </div>
            </div>
            <div className="border border-gray-900 my-10"></div>
        </>
    );
};

export default Home;