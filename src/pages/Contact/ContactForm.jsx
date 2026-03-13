import { Email, GitHub, Language, LinkedIn } from "@mui/icons-material";
import { FiFileText } from "react-icons/fi";

import React from 'react'
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const {t} = useTranslation();
  const contactLinks = [
        {
            name: 'Email',
            value: 'dm31284@gmail.com',
            href: 'mailto:dm31284@gmail.com',
            icon: <Email />,
            color: '#EA4335'
        },
        {
            name: 'LinkedIn',
            value: 'Carlos David Mesa',
            href: 'https://www.linkedin.com/in/carlos-david-mesa-martinez/',
            icon: <LinkedIn />,
            color: '#0A66C2'
        },
        {
            name: 'GitHub',
            value: '@dm73994',
            href: 'https://github.com/dm73994',
            icon: <GitHub />,
            color: '#181717'
        }
    ];

    const cvLinks = [
        {
            name: 'CV Español',
            url: '/docs/CVEN.pdf',
            icon: <FiFileText />,
            lang: 'ES'
        },
        {
            name: 'CV English',
            url: '/docs/CVEN.pdf',
            icon: <Language />,
            lang: 'EN'
        }
    ];

    const handlePrintCV = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{t('contact.title')}</h2>
            <p style={styles.subtitle}>
                {t('contact.description')}
            </p>

            {/* Links de contacto */}
            <div style={styles.linksGrid}>
                {contactLinks.map((link) => {
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.linkCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                                e.currentTarget.style.borderColor = link.color;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                            }}
                        >
                            <div style={{
                                ...styles.iconWrapper,
                                backgroundColor: `${link.color}15`
                            }}>
                                {React.cloneElement(link.icon, { style: { color: link.color, fontSize: '24px' } })}
                            </div>
                            <div style={styles.linkContent}>
                                <h3 style={styles.linkName}>{link.name}</h3>
                                <p style={styles.linkValue}>{link.value}</p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Divider */}
            <div style={styles.divider} />

            {/* CVs */}
            <h3 style={styles.cvTitle}>Currículum Vitae</h3>
            <div style={styles.cvGrid}>
                {cvLinks.map((cv) => {
                    return (
                        <button
                            key={cv.name}
                            onClick={() => handlePrintCV(cv.url)}
                            style={styles.cvButton}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                            }}
                        >
                            {cv.icon}
                            <div style={styles.cvInfo}>
                                <span style={styles.cvName}>{cv.name}</span>
                                <span style={styles.cvAction}>{t('contact.cvPrint')} →</span>
                            </div>
                            <span style={styles.cvLang}>{cv.lang}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 1.5rem'
    },
    title: {
        fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '0.75rem'
    },
    subtitle: {
        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '2.5rem',
        lineHeight: '1.6'
    },
    linksGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem'
    },
    linkCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem',
        background: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '12px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        cursor: 'pointer'
    },
    iconWrapper: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    },
    linkContent: {
        flex: 1,
        minWidth: 0
    },
    linkName: {
        fontSize: '0.95rem',
        fontWeight: '600',
        color: '#1a1a1a',
        margin: '0 0 0.25rem 0'
    },
    linkValue: {
        fontSize: '0.85rem',
        color: '#666666',
        margin: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    divider: {
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1) 50%, transparent)',
        margin: '3rem 0 2.5rem 0'
    },
    cvTitle: {
        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '1.5rem'
    },
    cvGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem'
    },
    cvButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem',
        background: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        position: 'relative'
    },
    cvInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        textAlign: 'left'
    },
    cvName: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#1a1a1a'
    },
    cvAction: {
        fontSize: '0.85rem',
        color: '#0066cc',
        fontWeight: '500'
    },
    cvLang: {
        fontSize: '0.75rem',
        fontWeight: '700',
        color: '#999999',
        padding: '0.25rem 0.5rem',
        background: '#f5f5f5',
        borderRadius: '6px'
    }
};

export default ContactForm
