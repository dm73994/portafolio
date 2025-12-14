import { useLayoutEffect, useState } from 'react';
import Divider from '../components/Divider';
import MainLayout from '../views/MainLayout';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState('');

    const skills = [
        {
            name: 'React',
            time: '4',
            knoledge: 5,
            image: '/images/react.svg',
        },
        {
            name: 'Spring Boot',
            time: '2',
            knoledge: 4,
            image: '/images/spring-boot.webp',
        },
        {
            name: 'Java',
            time: '3',
            knoledge: 4,
            image: '/images/java.webp',
        },
        {
            name: 'PostgreSQL, SQLServer, MySQL',
            time: '1',
            knoledge: 2,
            image: '/images/db.webp',
        },
        {
            name: 'Typescript',
            time: '2',
            knoledge: 4,
            image: '/images/ts.webp',
        },
        {
            name: 'React Native',
            time: '1',
            knoledge: 3,
            image: '/images/react.svg',
        },
        {
            name: 'Firebase',
            time: '1',
            knoledge: 3,
            image: '/images/firebase.webp',
        },
        {
            name: 'GCP',
            time: '1',
            knoledge: 2,
            image: '/images/gcp.gif',
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
                    {t('skills.title')}
                </h2>
                <article className="skills">
                    {skills.map((skill) => (
                        <div key={skill.name} className={`skillCard ${show}`}>
                            <div className="circle-map-node">
                                <img
                                    src={skill.image}
                                    className="circle-map-image"
                                />
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{t('skills.expirience')} {skill.time}</p>
                            <p>{'⭐'.repeat(skill.knoledge)}</p>
                        </div>
                    ))}
                </article>

                <Divider />

                <h2 style={{ textAlign: 'center' }}>{t('skills.title2')}</h2>
                <article className="skills">
                    {learning.map((skill) => (
                        <div key={skill.name} className={`skillCard ${show}`}>
                            <div className="circle-map-node">
                                <img
                                    src={`/images/${skill.image}`}
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
