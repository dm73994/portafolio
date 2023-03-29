import React from 'react'
import MainLayout from '../views/MainLayout'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <MainLayout>
      <div className='grid-2'>
        <img src="public/images/mailer.svg" alt="mail" className='mailersvg' />
        <ContactForm />
      </div>
    </MainLayout>
  )
}

export default Contact