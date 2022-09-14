import React from 'react';
import '../App.css';
import Maintenance from "./Maintenance";

function App() {
    return (
        <div
            className="h-screen w-screen text-center justify-centert bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2018/05/scheduled-maintenance-message-examples-and-inspiration0a@3x.png')]">
            <div className="backdrop-blur-md">
                <Maintenance/>
            </div>
        </div>
    );
}

export default App;
