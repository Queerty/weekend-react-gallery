import axios from 'axios';
// import React from 'react';
import './App.css';
import React, { useState, useEffect } from "react";
import GalleryList from '../GalleryList/GalleryList';


function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getItems();
  }, []);

  const getItems = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( (response) => {
      console.log('in getItems');
      console.log(response.data);
      setGalleryItems(response.data);
    }).catch( (error) => {
      alert('Error getting photos')
      console.log(error)
    });
  }

  const updateLikes = (id, likes) => {
    axios.put(`/gallery/like/${id}`, {likes:likes})
    .then(response => {
      getItems();
    })
    .catch(error => {
      console.log('unable to add like', error);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryItems={galleryItems} />
        
      </div>
    );
}

export default App;
