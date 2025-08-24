import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopExit from "./components/Popups/PopExit.jsx";
import PopNewCard from "./components/Popups/PopNewCard.jsx";
import PopBrowse from "./components/Popups/PopBrowse.jsx";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}
export default App;
