import { useEffect, useState } from 'react'
import { ProductCard } from './components/card/product'

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
    <div className='pt-[70px] mx-auto max-w-4xl px-4'>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  )
}

export default App
