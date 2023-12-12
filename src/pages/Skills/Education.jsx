import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

const Education = () => {
    return (
        <>
            <HeadingTitle title={"My Education"}></HeadingTitle>
            <div className="border-2 rounded-2xl m-5 flex flex-col sm:flex-row items-center gap-5 p-5">
                <div className="p-5 border rounded-xl text-base">
                    <h2 className="text-2xl font-bold">Hon's Major in Mathmatics</h2>
                    <p>Secure CGPA 4.00</p>
                    <p>Rajshahi College</p>
                </div>
                <div className="p-5 border rounded-xl text-base">
                    <h2 className="text-2xl font-bold">Higher School Secondary</h2>
                    <p>Secure GPA 5.00</p>
                    <p>Science Division</p>
                </div>
                <div className="p-5 border rounded-xl text-base">
                    <h2 className="text-2xl font-bold">Secondary School Certificate</h2>
                    <p>Secure GPA 5.00</p>
                    <p>Science Division</p>
                </div>
            </div>
        </>
    );
};

export default Education;