import React, { useState } from "react";
import "../Components/Main.css";
const Home = () => {
    return (
        <>
            <div className="container">
                {/* <!-- --------left-sidebar----------- --> */}
                <div className="left-sidebar">
                    <h1>left  side bar</h1>
                </div>
                {/* <!-- ---------main-content--------- --> */}
                <div className="main-content">
                <h1>main content</h1>

                </div>
                {/* <!-- ---------Right-sidebar--------- --> */}
                <div className="right-sidebar">
                <h1>right sidebar</h1>

                </div>
            </div>
        </>
    );
}
export default Home;