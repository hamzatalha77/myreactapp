import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

export default function ProductList() {
  return (
    <div className='productList'>
      <div className='pl-texts'>
        <div className='pl-title'>Create & inspire. it's hamza</div>
        <p className='pl-desc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi
          quasi atque itaque minima laborum commodi obcaecati, tempore labore
        </p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}></Product>
        ))}
      </div>
    </div>
  )
}
