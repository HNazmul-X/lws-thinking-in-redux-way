import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Router from "./Router/Router";

function App() {
    const lessonData = {
        lessonName: "React State Management issue",
        lessonNo: 1.3,
    };

    return (
        <BrowserRouter>
            <Router lessonData={lessonData}></Router>
        </BrowserRouter>
    );
}

export default App;