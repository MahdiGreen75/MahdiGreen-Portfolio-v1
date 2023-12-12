import "./skills.css"
const SkillsMeter = () => {
    return (
        <div className="wrap-circles text-xs">
        <div className="circle per-95">
            <div className="inner leading-7">HTML <br /> 95%</div>
        </div>
        <div className="circle per-90">
            <div className="inner leading-7">CSS <br /> 90%</div>
        </div>
        <div className="circle per-100">
            <div className="inner leading-7">JS <br />100%</div>
        </div>
        <div className="circle per-70">
            <div className="inner leading-7">React <br /> 70%</div>
        </div>
        <div className="circle per-20">
            <div className="inner leading-7">Express <br /> 20%</div>
        </div>
        <div className="circle per-30">
            <div className="inner leading-7">MongoDB <br /> 30%</div>
        </div>
    </div>
    );
};

export default SkillsMeter;