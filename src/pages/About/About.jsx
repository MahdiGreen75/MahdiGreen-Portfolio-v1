import myProfile from "../../assets/my-profile.jpeg";

const About = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="border border-gray-800 rounded-3xl p-5">
                <div className="w-full flex items-center justify-center my-5">
                    <img src={myProfile} className="w-40 rounded-full border-2 border-gray-700 " />
                </div>
                <div>
                    <p className="text-xl font-bold text-white text-center w-80 mx-auto">Hi, I am Md. Mahdi Hasan. I am very passionate about programming. Currently , I am learning Redux.
                        I have a dream to be a front end architect. I have worded on several projects, including some MERN projects.

                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;