import React from 'react';
import { useNavigate} from "react-router-dom";

const Documents = () => {

    const navigate = useNavigate();

    return (
        <section className="documents">
            <div className="container">
                <h2 className="title">
                    Документы
                </h2>
                <div className="documents__content">
                    <div className="documents__info">
                        <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="58.9" height="60" rx="29.45" fill="white"/>
                            <path d="M22.7188 33.8554H35.2634M18.4993 15.0077C18.0982 15.0176 17.7169 15.1838 17.4368 15.471C17.1566 15.7582 16.9999 16.1436 17 16.5448V43.5255C16.9999 43.9265 17.1565 44.3117 17.4365 44.5989C17.7164 44.8861 18.0976 45.0524 18.4985 45.0625H39.4837C39.8913 45.0625 40.2823 44.9006 40.5705 44.6123C40.8588 44.3241 41.0207 43.9331 41.0207 43.5255V22.6867H34.8718C34.4706 22.6769 34.0891 22.5105 33.809 22.2231C33.5288 21.9358 33.3722 21.5503 33.3725 21.1489V15L18.4993 15.0077ZM33.3031 15.0077L40.9822 22.6867L33.3031 15.0077ZM22.7188 29.2049H35.2634H22.7188ZM22.7188 38.5058H35.2634H22.7188Z" stroke="#6984F0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="documents__text">
                            Договор оферты на оказание услуг связи (Интернет)
                        </p>
                    </div>
                    <div className="documents__info">
                        <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="58.9" height="60" rx="29.45" fill="white"/>
                            <path d="M22.7188 33.8554H35.2634M18.4993 15.0077C18.0982 15.0176 17.7169 15.1838 17.4368 15.471C17.1566 15.7582 16.9999 16.1436 17 16.5448V43.5255C16.9999 43.9265 17.1565 44.3117 17.4365 44.5989C17.7164 44.8861 18.0976 45.0524 18.4985 45.0625H39.4837C39.8913 45.0625 40.2823 44.9006 40.5705 44.6123C40.8588 44.3241 41.0207 43.9331 41.0207 43.5255V22.6867H34.8718C34.4706 22.6769 34.0891 22.5105 33.809 22.2231C33.5288 21.9358 33.3722 21.5503 33.3725 21.1489V15L18.4993 15.0077ZM33.3031 15.0077L40.9822 22.6867L33.3031 15.0077ZM22.7188 29.2049H35.2634H22.7188ZM22.7188 38.5058H35.2634H22.7188Z" stroke="#6984F0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="documents__text">
                            Договор оферты на оказание услуг связи (Цифровое Телевидение)                    </p>
                    </div>
                    <div className="documents__info">
                        <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="58.9" height="60" rx="29.45" fill="white"/>
                            <path d="M22.7188 33.8554H35.2634M18.4993 15.0077C18.0982 15.0176 17.7169 15.1838 17.4368 15.471C17.1566 15.7582 16.9999 16.1436 17 16.5448V43.5255C16.9999 43.9265 17.1565 44.3117 17.4365 44.5989C17.7164 44.8861 18.0976 45.0524 18.4985 45.0625H39.4837C39.8913 45.0625 40.2823 44.9006 40.5705 44.6123C40.8588 44.3241 41.0207 43.9331 41.0207 43.5255V22.6867H34.8718C34.4706 22.6769 34.0891 22.5105 33.809 22.2231C33.5288 21.9358 33.3722 21.5503 33.3725 21.1489V15L18.4993 15.0077ZM33.3031 15.0077L40.9822 22.6867L33.3031 15.0077ZM22.7188 29.2049H35.2634H22.7188ZM22.7188 38.5058H35.2634H22.7188Z" stroke="#6984F0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="documents__text">
                            Лицензия 1
                        </p>
                    </div>
                </div>
                <button className="btn" type={'button'} onClick={() => navigate('/document')}>
                    Все документы
                </button>
            </div>

        </section>
    );
};

export default Documents;