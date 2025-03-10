
import { Posts } from "./component/Posts";
function App() {

  return (
    <section className="flex justify-center w-screen h-auto flex-col items-center ">
    <div className=" p-4 mb-3 shadow-sm shadow-white ml-[50px] mt-[9px]"> <h1 className="text-white text-5xl">CURD operation with react</h1></div>  
    <Posts/>
    </section>
  )
}

export default App;
