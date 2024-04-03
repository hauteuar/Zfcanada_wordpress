import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { db } from '../firebase-config'; // Adjust the import path as necessary
import { collection, getDocs } from 'firebase/firestore';
import NewsItem from './NewsItems'; // Make sure this file exists

Modal.setAppElement('#root'); // Set this to the appropriate element

const NewsGrid = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const querySnapshot = await getDocs(collection(db, "articles")); // Use correct collection name
            const articles = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNewsArticles(articles);
        };

        fetchNews();
    }, []);

    const openModal = (article) => {
        setSelectedArticle(article);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
            <h2>Our Latest News </h2>
            {newsArticles.map(article => (
                <NewsItem
                    key={article.id}
                    title={article.title}
                    date={new Date(article.createdAt.seconds * 1000).toDateString()} // Convert timestamp to readable date
                    summary={article.synopsis}
                    imageUrl={article.imageUrl}
                    onClick={() => openModal(article)}
                />
            ))}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Article Modal"
            >
                {selectedArticle && (
                    <div>
                        <h2>{selectedArticle.title}</h2>
                        <p>{selectedArticle.synopsis}</p>
                        <a href={selectedArticle.detailUrl} target="_blank" rel="noopener noreferrer">Read Full Article</a>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default NewsGrid;
