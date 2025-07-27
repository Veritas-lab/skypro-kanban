import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/Popups/PopExit";
import PopNewCard from "./components/Popups/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse";
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
