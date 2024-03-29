import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Denver" />
        <footer>
          This project was coded by{" "}
          <a
            href="
        https://github.com/Vivianna12"
            target="blank"
            rel="nooperner noreferrer"
          >
            Vivianna Samite Estevez
          </a>{" "}
          is open sourced on{" "}
          <a
            href="https://github.com/Vivianna12/react-weather-app"
            target="blank"
            rel="nooperner noreferrer"
          >
            Github
          </a>{" "}
          and hosted on {""}
          <a
            href="https://viv-react-weather-app.netlify.app"
            target="blank"
            rel="nooperner noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
