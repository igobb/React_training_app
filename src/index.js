import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header"
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>    
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)