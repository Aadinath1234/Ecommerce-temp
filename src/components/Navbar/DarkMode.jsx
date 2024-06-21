import React,{useState, useEffect} from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");


    const element = document.documentElement;
    console.log(element);
    
    
    useEffect(() => {
        
        localStorage.setItem("theme", theme);
        if (theme == "dark") {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.remove("dark");
            element.classList.add("light");
        }
    },[theme]);

    return (
        <div className='relative'>
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton}
                alt="Light Mode Button"
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkButton}
                alt="Dark Mode Button"
                className={`w-12 cursor-pointer `}
            />
        </div>
    );
}

export default DarkMode;











