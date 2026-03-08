import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products")
    const json = await data.json()
    setProducts(json.products)
    console.log(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (products?.length === 0) {
    return (
      <>
        <p>No Data Found</p>
      </>
    )
  }
  return (
    <>
      <p>Vite + React</p>
      <div className='grid grid-cols-3'>
      {products.map((item) => (
        <h3>{item?.title}</h3>
      ))}
      </div>

    </>
  )
}

export default App
