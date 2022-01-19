import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'

import mockedProducts from '../mock/productos.json'

async function getProducts() {
  const productsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedProducts)
    })
  })

  const products = await productsPromise
  return products
}

export function ItemListContainer() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])

  return <ItemList products={products} />
}
