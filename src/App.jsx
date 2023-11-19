import './App.css'

function App() {
  // Step 3: create a function that chage the color of the header
  const changeColor = () => {
    const header = document.querySelector('.header-text')
    header.style.color = 'purple'
  }
  return (
    <>
    {/* Step 1: change this to red */}
      <h1 className="header-text">React App</h1>
      <p>Blank Template</p>
      {/* step 2: create a flex box */}
      <div className='flex-container'>
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
      </div>
      {/* Step 3: change color */}
      <button onClick={changeColor}>Click Me</button>
    </>
  )
}

export default App
