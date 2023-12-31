
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import Education from "./Education";
import Experience from "./Experience";
import SkillsMeter from "./SkillsMeter";


const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeadingTitle title={"my skills meter"}></HeadingTitle>
            <SkillsMeter></SkillsMeter>
            <Experience></Experience>
            <Education></Education>
        </div>

    );
};

export default Skills;