// import React from 'react';

// eslint-disable-next-line react/prop-types
const HeadingTitle = ({title}) => {
    return (
        <div className="w-fit space-y-1">
        <div className="border-2 border-purple-600"></div>
        <h2 className="uppercase italic font-bold 
        text-white bg-purple-600 px-2">{title}</h2>
        <div className="border-2 border-purple-600"></div>
    </div>
    );
};

export default HeadingTitle;