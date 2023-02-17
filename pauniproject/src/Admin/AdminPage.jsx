import React, { useState } from 'react';

function AdminPage() {
  const [adTitle, setAdTitle] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [adImage, setAdImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can make a request to your backend API to post the ad
  };

  return (
    <div>
      <h2>Post a new ad</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={adTitle}
          onChange={(event) => setAdTitle(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={adDescription}
          onChange={(event) => setAdDescription(event.target.value)}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={adImage}
          onChange={(event) => setAdImage(event.target.value)}
        />

        <button type="submit">Post Ad</button>
      </form>
    </div>
  );
}

export default AdminPage;
