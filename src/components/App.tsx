import React from 'react';
import '../App.css';
import Maintenance from "./Maintenance";

function App() {
    return (
        <div
            className="animate-fade-in-down h-screen w-screen bg-center bg-[url('/pictures/minimalistic.jpeg')]">
            <div className="backdrop-blur-md backdrop-brightness-100">
                <Maintenance/>
            </div>
        </div>
    );
}

export default App;
