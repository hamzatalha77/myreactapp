import './about.css'
import Photo from '../../img/ph.jpg'

export default function About() {
  return (
    <div className='about'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Photo} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          inventore ut cumque fugit voluptatum recusandae iste temporibus iure,
          tenetur atque?
        </p>
        <p className='a-desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          dolore suscipit impedit perspiciatis, reprehenderit assumenda,
          voluptate odit pariatur commodi aut sed praesentium vitae doloribus
          ullam. Iure, laudantium? Tempore repellendus ab ea assumenda quos
          possimus necessitatibus, at dolorum tenetur, debitis error sapiente
          mollitia? Sint reiciendis ex perspiciatis eaque blanditiis laborum
          nobis tenetur veritatis sapiente incidunt corrupti culpa, voluptatibus
          ullam porro. Asperiores?
        </p>
      </div>
    </div>
  )
}
