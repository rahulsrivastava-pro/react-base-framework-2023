import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { retrieveProductsAction } from '../../actions/products-actions'
import Product from '../Product'
import { Link } from 'react-router-dom'
import './index.css'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(retrieveProductsAction())
    })()
  }, [])

  let products = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)

  return (
    <div>
      <div align="right">
        <button className='btn-exp-dark-blue'>
        <Link to={'/products/new'}>Add product</Link>
        </button>
      </div>
      <h2 className='table__title'>Products</h2>
      
      { error ? <p>An error ocurred</p> : null }
      { loading ? <p>Loading...</p> : null }
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th id='table__title-price'>Price</th>
            <th id='table__title-action'>Actions</th>
          </tr>
        </thead>
        <tbody>{(
            products.map(product =><Product
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}/>))}</tbody>
      </table>
    </div>
  )
}

export default Products
