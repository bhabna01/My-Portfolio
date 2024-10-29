
import BlurIn from "../@/components/magicui/blur-in";
import './App.css'
import Skills from "./components/Skills";

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <div>
        <BlurIn word={"Hello World"}></BlurIn>
        <Skills></Skills>
      </div>
    </>
  )
}

export default App
