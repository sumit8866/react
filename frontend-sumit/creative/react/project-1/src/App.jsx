import logo from "./logo.svg";
import "./App.css";
import Header1 from "./Header";
import Pages from "./Pages";
import Menu from "./Menu";
import Sliders from "./Slider";
import Team from "./Team";
import Userreview from "./Userreview";
import Cartpage from "./Cartpage";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  return (
    <>
      <Header1></Header1>
      <Pages></Pages>
      <Menu></Menu>
      <Sliders></Sliders>
      <Team></Team>
      <Userreview></Userreview>
      <Cartpage></Cartpage>
      <Login></Login>
      <Signin></Signin>
    </>
  );
}

export default App;
