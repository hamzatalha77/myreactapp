import './contact.css'
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

export default function Contact() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_az3khne',
        'template_4twz5oc',
        formRef.current,
        'WoGaXgf2kHoTdHMNF'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='contact'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's Discuss Your Project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <i class='fa-solid fa-phone c-icon'></i>
              +212-646-711-560
            </div>
            <div className='c-info-item'>
              <i className='fa-solid fa-envelope c-icon'></i>
              Hamza_ta7@hotmail.com
            </div>
            <div className='c-info-item'>
              <i className='fa-solid fa-map-location-dot c-icon'></i>
              Hay El Fath 3, Rue 14 N 210, Casablanca Ain Chock.
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b> what's your story ?</b> Get in touch .Always freelancing if they
            right project comes along. me.
          </p>
          <form ref={formRef} onClick={handleSubmit}>
            <input
              style={{ background: darkMode && '#333' }}
              type='text'
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              style={{ background: darkMode && '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
              required
            />
            <input
              style={{ background: darkMode && '#333' }}
              type='email'
              placeholder='Email'
              name='user_email'
              required
            />
            <textarea
              style={{ background: darkMode && '#333' }}
              name='message'
              placeholder='Message'
              rows='5'
              required
            ></textarea>
            <button>Submit</button>
            {done && 'Thanks Mate'}
          </form>
        </div>
      </div>
    </div>
  )
}
