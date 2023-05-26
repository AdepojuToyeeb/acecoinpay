import bg from "./assets/images/bg.jpg";
import "./App.css";
import MainContainer from "./components/checkout/checkout";

function App() {
  ``;
  return (
    <>
      <div class="bg-no-repeat bg-auto bg-left bg-hero">
        {" "}
        <div class="py-20 flex justify-center items-center w-[90%] h-auto max-w-[375px] mx-auto lg:max-w-[1000px] lg:h-screen">
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
