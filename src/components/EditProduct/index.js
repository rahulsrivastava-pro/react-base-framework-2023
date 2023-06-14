import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProductAction } from '../../actions/products-actions'
import { useNavigate } from 'react-router-dom'
import './index.css'

const EditProduct = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    name: '',
    price: ''
  })

  const productEdit = useSelector(state => state.products.editProduct)

  // fill state
  useEffect(() => {
    setProduct(productEdit)
  }, [productEdit])


  const submitEditProduct = event => {
    event.preventDefault()
    dispatch(editProductAction(product))
    navigate('/')
  }

  // read data from form
  const onChangeForm = event => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }

  const goBack = () => {
    navigate('/')
  }

  return (
    <div>
       <h2 className='table__title'>Edit product</h2>
      <form
        className='form'
        onSubmit={submitEditProduct}
      >
        <section className='form__section'>
          <label>Product name</label>
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Product price</label>
          <input
            type='number'
            name='price'
            min='0'
            value={product.price}
            onChange={onChangeForm}
          />
        </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
           >Cancel</button>
          <button className='button button--confirm'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct