import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface iT{
    children: React.ReactChild | React.ReactNode
}
const App:React.FC<iT> = ({children})=>{
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="container">
                    <>
                        {children}
                    </>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
