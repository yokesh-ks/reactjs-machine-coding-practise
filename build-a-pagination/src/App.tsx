import { useEffect, useState } from 'react'
import { ProductCard } from './components/card/product'
import { Button } from './components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PAGE_SIZE } from './constants'



function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  console.log(currentPage)

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const json = await data.json()
    setProducts(json.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)

  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  const handlePageChange = (num: number) => {
    setCurrentPage(num)
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  if (products?.length === 0) {
    return (
      <>
        <p>No Data Found</p>
      </>
    )
  }
  return (
    <div className='pt-[70px] mx-auto max-w-4xl px-4'>

      <div className='w-full flex justify-center'>
        <Button size="icon" variant="outline" onClick={() => goToPrevPage()} disabled={currentPage === 0}><ChevronLeft /></Button>
        {[...Array(noOfPages).keys()].map((n) => (
          <Button size="icon" variant={currentPage === n ? "default": "outline"} onClick={() => handlePageChange(n)}>{n}</Button>
        ))}
        <Button size="icon" variant="outline" onClick={() => goToNextPage()} disabled={currentPage === noOfPages - 1}><ChevronRight /></Button>
      </div>
 
      <div className='grid grid-cols-4 gap-4'>
        {products.slice(start, end).map((item) => (
          <ProductCard item={item} />
        ))}
      </div>



    </div>
  )
}

export default App
