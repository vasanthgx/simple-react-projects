import useLocalStorage from "./useLocalStorage"
import './theme.css';


export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme','dark');
     
    function handleToggleMode(){
        setTheme(theme === "light"? 'dark' : 'light');
    }

    console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme} >
      <div className="container" >
            <p>Hello World !!!</p>
            <button onClick={handleToggleMode} >Change Mode</button>
      </div>
    </div>
  )
}
