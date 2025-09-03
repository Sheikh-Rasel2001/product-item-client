
import './App.css'
import Products from './Component/Products'

const usePromise = fetch('http://localhost:3000/products').then(res => res.json())

function App() {

  return (
    <>
      <div className='product'>
        <h1 className='item'>Product Item </h1>
        <Products usePromise={usePromise}></Products>
      </div>
    </>
  )
}

export default App
