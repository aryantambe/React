import './App.css'
 
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); {/*This is how you access enviornment variables in react using vite*/}

  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
