import React from 'react';
import { useTranslation } from 'react-i18next';

const applications = [
    {
        id: 'applications.enterprise_suite',
        image: '/images/HUSJ.png',
        titleKey: 'applications.enterprise_suite.title',
        roleKey: 'applications.enterprise_suite.role',
        periodKey: 'applications.enterprise_suite.period',
        descriptionKey: 'applications.enterprise_suite.description',
        technologiesKey: 'applications.enterprise_suite.technologies',
    },
    {
        id: 'applications.attendance_monitoring_system',
        image: '/images/rehab.png',
        titleKey: 'applications.attendance_monitoring_system.title',
        roleKey: 'applications.attendance_monitoring_system.role',
        descriptionKey: 'applications.attendance_monitoring_system.description',
        technologiesKey: 'applications.attendance_monitoring_system.technologies',
    },
    {
        id: 'applications.carbon_footprint_calculator',
        image: '/images/cruzroja.png',
        titleKey: 'applications.carbon_footprint_calculator.title',
        roleKey: 'applications.carbon_footprint_calculator.role',
        descriptionKey: 'applications.carbon_footprint_calculator.description',
        technologiesKey: 'applications.carbon_footprint_calculator.technologies',
    },
    {
        id: 'applications.taxiok',
        image: '/images/taxiok.png',
        titleKey: 'applications.taxiok.title',
        roleKey: 'applications.taxiok.role',
        descriptionKey: 'applications.taxiok.description',
        technologiesKey: 'applications.taxiok.technologies',
        linkLabelKey: 'www.taxiok.app',
        linkHref: 'https://www.taxiok.app',
    },
    {
        id: 'applications.parqueapp',
        image: '/images/parqueapp.png',
        titleKey: 'applications.parqueapp.title',
        roleKey: 'applications.parqueapp.role',
        descriptionKey: 'applications.parqueapp.description',
        technologiesKey: 'applications.parqueapp.technologies',
        linkLabelKey: 'www.parqueapp.com',
        linkHref: 'https://www.parqueapp.com',
    }
];

const ApplicationsExperience = () => {
    const { t } = useTranslation();

    return (
        <section className="grid-1 apps-section">
            <h2
                style={{
                    textAlign: 'center',
                }}
            >
                {t('applications.sectionTitle')}
            </h2>
            <p className="apps-section-subtitle">
                {t('applications.sectionSubtitle')}
            </p>

            <div className="apps-grid">
                {applications.map((app) => {
                    const technologies = t(app.technologiesKey, {
                        returnObjects: true,
                        defaultValue: [],
                    });

                    return (
                        <article key={app.id} className="app-card">
                            <div className="app-card-media">
                                <div className="app-card-media-overlay" />
                                <img
                                    src={app.image}
                                    alt={t(app.titleKey)}
                                    className="app-card-image"
                                />
                            </div>

                            <div className="app-card-body">
                                <div className="app-card-header">
                                    <h3 className="app-card-title">
                                        {t(app.titleKey)}
                                    </h3>
                                    <p className="app-card-role">
                                        {t(app.roleKey)}
                                    </p>
                                    {app.periodKey && (
                                        <p className="app-card-period">
                                            {t(app.periodKey)}
                                        </p>
                                    )}
                                </div>

                                <p className="app-card-description">
                                    {t(app.descriptionKey)}
                                </p>

                                {Array.isArray(technologies) &&
                                    technologies.length > 0 && (
                                        <ul className="app-card-tags">
                                            {technologies.map((tech) => (
                                                <li key={tech} className="app-tag">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                {app.linkHref && (
                                    <a
                                        href={app.linkHref}
                                        className="app-card-link"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {t(app.linkLabelKey)}
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default ApplicationsExperience;

