import React from 'react'
import Underscore from '../components/Underscore'

const StudyWork = () => {
    return (
        <div className='grid-2'>
            <div className='grid-item-center dec-border-left'>
                <div className="container">
                    <h2>Estudios</h2>
                    <ul>
                        <li>
                            <p>Universidad del Cauca - 2019 2</p>
                            <Underscore />
                        </li>
                        <li>
                            <p>HTML - CSS - Javascript UDEMY 2021</p>
                            <Underscore />
                        </li>
                        <li>
                            <p>OTROS xd</p>
                            <Underscore />
                        </li>
                    </ul>

                </div>
            </div>

            <div className='grid-item-center dec-border-left'>
                <div className="container">
                    <h2>Información laboral</h2>
                    <ul>
                        <li>
                            <p>Desarrollador movil - ReactNative 2021 - CMLexports</p>
                            <Underscore />
                        </li>
                        <li>
                            <p>Freelancer - ReactJS - GoldenHispanicFoundation 2022</p>
                            <Underscore />
                        </li>
                        <li>
                            <p>Desarrollador Frontend- ReactJS 2022 - 2023 - CMLexports</p>
                            <Underscore />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default StudyWork