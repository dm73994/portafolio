import React from 'react'

const ContactForm = () => {
    return (
        <div style={{ alignSelf: 'center' }}>
            <h2>Mensajes!</h2>
            <form>
                <div className='inputForm '>
                    <label htmlFor="name"> Nombre </label>
                    <input className='gradientBorder' type="text" placeholder='¿Cómo te llamas?' id='name' />
                </div>
                <div className='inputForm' gradientBorder>
                    <label htmlFor="phone"> Teléfono </label>
                    <input className='gradientBorder' type="text" placeholder='0000000' id='phone' />
                </div>
                <div className='inputForm'>
                    <label htmlFor="about"> Asunto </label>
                    <input className='gradientBorder' type="text" placeholder='Acerca de que quieres escribir?' id='about' />
                </div>
                <div className='inputForm'>
                    <label htmlFor="message"> Mensaje </label>
                    <textarea className='gradientBorder' type="text" placeholder='Escribe tu mensaje aquí!' id='message' />
                </div>
            </form>
        </div>
    )
}

export default ContactForm