import React, { useState } from 'react';
import Underscore from '../components/Underscore';
import {
    ChevronRight,
    ExpandCircleDown,
    ArrowCircleUp,
} from '@mui/icons-material';
import { VscExpandAll } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const StudyWork = () => {
    const { t } = useTranslation();

    const workTrace = [
        {
            title: t('experience.systems_engineer_unicauca.title'),
            institution: t('experience.systems_engineer_unicauca.institution'),
            startDate: t('experience.systems_engineer_unicauca.startDate'),
            endDate: t('experience.systems_engineer_unicauca.endDate'),
            mode: t('experience.systems_engineer_unicauca.mode'),
            skills: t('experience.systems_engineer_unicauca.skills', {
                returnObjects: true,
            }),
            summary: t('experience.systems_engineer_unicauca.summary'),
            developments: t(
                'experience.systems_engineer_unicauca.developments',
                { returnObjects: true },
            ),
            doc: null,
            image: '/images/Logo_universidad.webp',
        },
        {
            title: t('experience.frontend_jr_cmlexports.title'),
            institution: t('experience.frontend_jr_cmlexports.institution'),
            startDate: t('experience.frontend_jr_cmlexports.startDate'),
            endDate: t('experience.frontend_jr_cmlexports.endDate'),
            mode: t('experience.frontend_jr_cmlexports.mode'),
            skills: t('experience.frontend_jr_cmlexports.skills', {
                returnObjects: true,
            }),
            summary: t('experience.frontend_jr_cmlexports.summary'),
            developments: t('experience.frontend_jr_cmlexports.developments', {
                returnObjects: true,
            }),
            doc: null,
            image: '/images/Logo_cml.webp',
        },
        {
            title: t('experience.data_analyst_nexura.title'),
            institution: t('experience.data_analyst_nexura.institution'),
            startDate: t('experience.data_analyst_nexura.startDate'),
            endDate: t('experience.data_analyst_nexura.endDate'),
            mode: t('experience.data_analyst_nexura.mode'),
            skills: t('experience.data_analyst_nexura.skills', {
                returnObjects: true,
            }),
            summary: t('experience.data_analyst_nexura.summary'),
            developments: t('experience.data_analyst_nexura.developments', {
                returnObjects: true,
            }),
            doc: null,
            image: '/images/Logo_nexura.webp',
        },
        {
            title: t('experience.fullstack_husj.title'),
            institution: t('experience.fullstack_husj.institution'),
            startDate: t('experience.fullstack_husj.startDate'),
            endDate: t('experience.fullstack_husj.endDate'),
            mode: t('experience.fullstack_husj.mode'),
            skills: t('experience.fullstack_husj.skills', {
                returnObjects: true,
            }),
            summary: t('experience.fullstack_husj.summary'),
            developments: t('experience.fullstack_husj.developments', {
                returnObjects: true,
            }),
            doc: null,
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
                {t('experience.title')}
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
    const { t } = useTranslation();
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
                {showMore ? t('general.showLess') : t('general.showMore')}
            </button>
            {showMore ? (
                <>
                    <h4>{t('experience.header_2')}</h4>
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
                    <h4>{t('experience.header_3')}</h4>
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
