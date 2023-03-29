import React, { useEffect, useLayoutEffect, useState } from 'react'
import Divider from '../components/Divider'
import MainLayout from '../views/MainLayout'

const Skills = () => {
    const [show, setShow] = useState('')

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow('show');
        }, 10);
    }, [])

    return (
        <MainLayout>
            <section className='container'>
                <h2 style={{ textAlign: 'center' }}>Competencias & habilidades</h2>
                <article className='skills'>
                    <img src="images/react.svg" alt="React" className={`skillImg ${show}`} />
                    <img src="images/html.svg" alt="HTML" className={`skillImg ${show}`} />
                    <img src="images/css.svg" alt="CSS" className={`skillImg ${show}`} />
                    <img src="images/git.svg" alt="git" className={`skillImg ${show}`} />
                    <img src="images/js.svg" alt="javascript" className={`skillImg ${show}`} />
                </article>

                <Divider />

                <h2 style={{ textAlign: 'center' }}>Aprendiendo...</h2>
                <article className='skills'>
                    <img src="images/node.svg" alt="nodeJS" className={`skillImg ${show}`} />
                    <img src="images/express.svg" alt="express" className={`skillImg ${show}`} />
                </article>
            </section>
        </MainLayout>
    )
}

export default Skills