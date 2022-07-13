
import React from 'react';

const MainLayout = ({ title, children }) => {

    return (
        <header className="">
            {/* <h2 id={titleToId(title) + '-title'}>{title}</h2> */}
            <h1>{title}</h1>
            <div className="">{children}</div>
        </header>
    );

}

export default MainLayout;

