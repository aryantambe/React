import Test from "./test"

function App() {

  const username="Aryan"
  return (<>  {/*this empty tag is a fragment, also this is the syntax for a comment in jsx file*/} 
   <h1>React using vite</h1>
   <h1>Hello my name is {username}</h1>
   <Test/>
   </>
  )
}
export default App
