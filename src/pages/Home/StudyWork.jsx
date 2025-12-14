import React, { useState } from 'react';
import Underscore from '../components/Underscore';
import {
    ChevronRight,
    ExpandCircleDown,
    ArrowCircleUp,
} from '@mui/icons-material';
import { VscExpandAll } from 'react-icons/vsc';

const StudyWork = () => {
    const workTrace = [
        {
            title: 'Ingeniero de sistemas',
            institution: 'Universidad del Cauca',
            startDate: '2019',
            endDate: 'Presente',
            mode: 'Presencial',
            skills: [
                'Análisis y diseño de sistemas',
                'Programación',
                'Bases de datos',
                'Redes de computadoras',
            ],
            summary:
                'Finalicé estudios en ingeniería de sistemas con sólidos conocimientos en análisis y diseño de sistemas, programación, bases de datos y redes. Graduación prevista para 2026.',
            doc: null,
            developments: [
                'Sistema web para gestión y análisis de huella de carbono desarrollado para la Cruz Roja como proyecto de práctica de ingeniería de software.',
            ],
            image: '/images/Logo_universidad.webp',
        },
        {
            title: 'Desarrollador Front-end Jr',
            institution: 'CMLexports INC',
            startDate: 'Oct-2021',
            endDate: 'Nov-2023',
            mode: 'Remoto',
            summary:
                'Trabajé en el desarrollo y mantenimiento de la aplicación móvil para casilleros internacionales, además de implementar nuevas funcionalidades en el CRM interno de la empresa.',
            skills: [
                'ReactJS',
                'React Native',
                'JavaScript',
                'HTML',
                'CSS',
                'Git',
            ],
            doc: null,
            developments: [
                'Mantenimiento y desarrollo de nuevas funcionalidades para la app móvil de casilleros internacionales usando React Native.',
                'Participación en el desarrollo del CRM interno con ReactJS en el frontend y NodeJS en el backend.',
            ],
            image: '/images/Logo_cml.webp',
        },
        {
            title: 'Analista de Datos Junior',
            institution: 'Nexura Internacional',
            startDate: 'Jul-2024',
            endDate: 'Mar-2025',
            mode: 'Remoto',
            skills: ['ETL', 'Pentaho PDI', 'Modelado de datos', 'SQL'],
            summary:
                'Me encargué de la migración, transformación y modelado de datos en esquemas estrella, trabajando principalmente con Pentaho PDI y herramientas ETL de Microsoft.',
            doc: null,
            developments: [
                'Diseño y construcción de procesos ETL para migración y transformación de datos con Pentaho PDI.',
                'Modelado de datos en esquemas estrella optimizados para consultas y generación de reportes.',
            ],
            image: '/images/Logo_nexura.webp',
        },
        {
            title: 'Full-stack Developer',
            institution: 'Hospital Universitario San José ESE',
            startDate: 'Sept-2024',
            endDate: 'Actualidad',
            mode: 'Presencial',
            skills: [
                'Java',
                'Spring Boot',
                'React.TS',
                'Firebase',
                'PostgreSQL',
                'GitHub',
                'Docker',
            ],
            summary:
                'Desarrollo herramientas de software para áreas administrativas y asistenciales del hospital. He creado aplicaciones móviles en tiempo real y optimizado procesos que antes no existían, mejorando la productividad del personal.',
            doc: null,
            developments: [
                'App de escritorio para control de asistencia en rehabilitación que genera datos de productividad y mejora la gestión del tiempo del personal, además de analizar patrones de comportamiento de pacientes.',
                'Aplicación móvil para rastreo de ambulancias en tiempo real y gestión de servicios ambulatorios con React Native y Firebase.',
                'Suite de herramientas web para gestión administrativa usando Java Spring Boot en backend y React TypeScript en frontend, con arquitectura limpia, microservicios y federación de módulos.',
            ],
            image: '/images/Logo_husj.webp',
        },
    ];

    const frelanceTrace = [];

    return (
        <div className="grid-1">
            <h2
                style={{
                    textAlign: 'center',
                }}
            >
                Formación Académica y Experiencia Laboral
            </h2>
            <div className="roadmap">
                {workTrace.map((work, i) => (
                    <div className="circle-map" key={i}>
                        <div className="circle-map-node">
                            <img
                                src={work.image}
                                className="circle-map-image"
                            />
                        </div>

                        <div className="circle-map-card">
                            <div className="circle-map-summary">
                                <h4>{work.title}</h4>
                                <h5>{work.institution}</h5>
                                <Underscore />
                                <p className="dates">
                                    {work.startDate} — {work.endDate}
                                </p>
                            </div>

                            <div className="circle-map-content">
                                {work.summary && (
                                    <p className="summary">{work.summary}</p>
                                )}

                                <Content work={work} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Content = ({ work }) => {
    console.log(work);
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <button
                className="link-button"
                onClick={toggleShowMore}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <VscExpandAll />
                {showMore ? 'Ver menos' : 'Ver más'}
            </button>
            {showMore ? (
                <>
                    <h4>Habilidades y tecnologías</h4>
                    <ul>
                        {work.skills.map((skill) => (
                            <p
                                key={skill}
                                style={{
                                    fontWeight: 'lighter',
                                }}
                            >
                                <ChevronRight
                                    fontSize="small"
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                />
                                {skill}
                            </p>
                        ))}
                    </ul>
                    <h4>Desarrollos y logros</h4>
                    <ul>
                        {work.developments.map((dev) => (
                            <p
                                key={dev}
                                style={{
                                    fontWeight: 'lighter',
                                    marginBottom: '1rem',
                                }}
                            >
                                <ChevronRight
                                    fontSize="small"
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                />
                                {dev}
                            </p>
                        ))}
                    </ul>
                </>
            ) : null}
        </>
    );
};

export default StudyWork;
