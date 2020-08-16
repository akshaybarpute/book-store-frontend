
const ProductSpan = (props)=>{

  return (<span className='product-span'>
    <div className='product-id'>Id:{props.id}</div>
    <div className='product-name'>Name:{props.title}</div>
    <div className='product-price'>Price:{props.price}</div>
    </span>)
}


export default ProductSpan;