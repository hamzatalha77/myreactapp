import './product.css'

export default function Product({ img, link }) {
  return (
    <div className='product'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} className='p-img' alt='' />
      </a>
    </div>
  )
}
