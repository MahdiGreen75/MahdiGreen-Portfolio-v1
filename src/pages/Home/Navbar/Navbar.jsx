import NavInterface from "./NavInterface";
import TopMarquee from "./TopMarquee";


const Navbar = () => {
    return (
        <div className="mx-5 text-stone-400 my-5">
            <TopMarquee></TopMarquee>
            <NavInterface></NavInterface>
        </div>
    );
};

export default Navbar;
