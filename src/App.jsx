import "./App.css";
import Atask from "./components/Atask";

function App() {
  return (
    <div className="App">
        <div className="flex justify-center w-500 bg-gradient-to-r from-blue-900 to-blue-500">
          <h1 className="inline-flex font-serif text-4xl my-3 text-yellow-400">
            To Do List
          </h1>
        </div>
        <div className="flex min-h-fit justify-center bg-gradient-to-r  from-blue-900 to-blue-500">
          <div className="overflow-x-auto mt-11 w-full md:w-2/3 px-8 h-screen backdrop-blur-md bg-white/30  rounded-xl ">
            <Atask />
          </div>
        </div>
      </div>
  );
}

export default App;
