
import { Posts } from "./component/Posts";
function App() {

  return (
    <section className="flex justify-center w-screen h-auto flex-col items-center mt-10">
      <div className="p-4">
      <h1 className="text-white text-5xl text-center text-bold">
     CRUD operation<span className="block">with React</span>
    </h1>
      </div>
    <Posts/>
    </section>
  )
}

export default App;
