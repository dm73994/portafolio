import { useLayoutEffect, useState } from 'react';
import Divider from '../components/Divider';
import MainLayout from '../views/MainLayout';

const Skills = () => {
    const [show, setShow] = useState('');

    const skills = [
        {
            name: 'React',
            time: '4',
            knoledge: 5,
            image: 'react.svg',
        },
        {
            name: 'Spring Boot',
            time: '2',
            knoledge: 4,
            image: 'spring-boot.webp',
        },
        {
            name: 'Java',
            time: '3',
            knoledge: 4,
            image: 'java.webp',
        },
        {
            name: 'PostgreSQL, SQLServer, MySQL',
            time: '1',
            knoledge: 2,
            image: 'db.webp',
        },
        {
            name: 'Typescript',
            time: '2',
            knoledge: 4,
            image: 'ts.webp',
        },
        {
            name: 'React Native',
            time: '1',
            knoledge: 3,
            image: 'react.svg',
        },
        {
            name: 'Firebase',
            time: '1',
            knoledge: 3,
            image: 'firebase.webp',
        },
        {
            name: 'GCP',
            time: '1',
            knoledge: 2,
            image: 'gcp.gif',
        },
    ];

    const learning = [
        {
            name: 'Angular20',
            image: 'angular.webp',
        },
        {
            name: 'AWS',
            image: 'aws.webp',
        },
        {
            name: 'Docker',
            image: 'docker.webp',
        },
    ];

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow('show');
        }, 10);
    }, []);

    return (
        <MainLayout>
            <section className="container">
                <h2 style={{ textAlign: 'center' }}>
                    Competencias & habilidades
                </h2>
                <article className="skills">
                    {skills.map((skill) => (
                        <div key={skill.name} className={`skillCard ${show}`}>
                            <div className="circle-map-node">
                                <img
                                    src={`images/${skill.image}`}
                                    alt={skill.name}
                                    className="circle-map-image"

                                />
                            </div>
                            <h3>{skill.name}</h3>
                            <p>Experiencia en años: {skill.time}</p>
                            <p>{'⭐'.repeat(skill.knoledge)}</p>
                        </div>
                    ))}
                </article>

                <Divider />

                <h2 style={{ textAlign: 'center' }}>Aprendiendo...</h2>
                <article className="skills">
                    {learning.map((skill) => (
                        <div key={skill.name} className={`skillCard ${show}`}>
                            <div className="circle-map-node">
                                <img
                                    src={`images/${skill.image}`}
                                    alt={skill.name}
                                    className="circle-map-image"

                                />
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </article>
            </section>
        </MainLayout>
    );
};

export default Skills;
