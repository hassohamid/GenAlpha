import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <div className="mobile-message">
        <h1>
          <span> Oops! </span>This experience requires a
          <span> wider screen</span>
        </h1>
        <h2>
          Requirement:
          <span>Minimum screen width 600px</span>
        </h2>
      </div>
      <Header />
      <Quiz />
      <Footer />
    </>
  );
}

export default App;
