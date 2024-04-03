import React from 'react';

const NewsItem = ({ title, date, summary, imageUrl, onClick }) => {
  return (
    <div className="news-item" onClick={onClick} style={{ border: '1px solid #ddd', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
      <div style={{ padding: '10px' }}>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span style={{ color: 'red' }}>READ MORE</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
