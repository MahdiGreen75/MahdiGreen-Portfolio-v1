import Marquee from "react-fast-marquee";

const TopMarquee = () => {
    return (
        <div>
           <div className="p-3 px-2 border  rounded-lg border-gray-600 bg-opacity-10 bg-gray-400">
                <Marquee>
                    <span className="">
                        Welcome to my portfolio, I am very passionate
                        about programming. I am very good at React and
                        tailwind. Now I am currently learning Redux. I
                        have a plan to learn DSA in future insha Allah.
                    </span>
                </Marquee>
            </div> 
        </div>
    );
};

export default TopMarquee;