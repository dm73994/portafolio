import React from 'react';
import { useTranslation } from 'react-i18next';

const Presentation = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="grid-2">
                <div className="foto" />

                <div className="introduction grid-item-center">
                    <h1>{t('home.title')}</h1>
                    <p>
                        {t('home.intro')}
                        <br />
                        <br />
                        {t('home.hobbies')}
                        {t('home.quote')}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Presentation;
