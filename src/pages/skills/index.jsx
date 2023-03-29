import React from 'react'
import Divider from '../components/Divider'
import MainLayout from '../views/MainLayout'

const Skills = () => {
    return (
        <MainLayout>
            <section className='container'>
                <h2 style={{ textAlign: 'center' }}>Competencias & habilidades</h2>
                <article className='skills'>
                    <img src="public/images/react.svg" alt="React" className='skillImg' />
                    <img src="public/images/html.svg" alt="HTML" className='skillImg' />
                    <img src="public/images/css.svg" alt="CSS" className='skillImg' />
                    <img src="public/images/git.svg" alt="git" className='skillImg' />
                    <img src="public/images/js.svg" alt="javascript" className='skillImg' />
                </article>

                <Divider />

                <h2 style={{ textAlign: 'center' }}>Aprendiendo...</h2>
                <article className='skills'>
                    <img src="public/images/node.svg" alt="nodeJS" className='skillImg' />
                    <img src="public/images/express.svg" alt="express" className='skillImg' />
                </article>
            </section>
        </MainLayout>
    )
}

export default Skills