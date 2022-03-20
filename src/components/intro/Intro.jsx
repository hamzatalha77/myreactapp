import { useContext } from 'react'
import { ThemeContext } from '../../context'
import './intro.css'

export default function Intro() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Hamza Talha</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Software Engineering </div>
              <div className='i-title-item'>Content Creator</div>
              <div className='i-title-item'>Backend Developer </div>
              <div className='i-title-item'>Front Developer </div>
            </div>
          </div>
          <p className='i-desc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            at porro, in, aliquid expedita consequatur quis deleniti corporis
            delectus repellat dolore consectetur doloremque officia nisi vel
            laboriosam magni odit libero!
          </p>
        </div>
        <div
          className='scroll-down'
          style={{
            border: darkMode && 'white 2px solid',
          }}
        ></div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
      </div>
    </div>
  )
}
