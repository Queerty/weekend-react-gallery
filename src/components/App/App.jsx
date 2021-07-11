import axios from 'axios';
// import React from 'react';
import './App.css';
import React, { useState, useEffect } from "react";
import GalleryList from '../GalleryList/GalleryList';


function App() {
  let [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getItems();
  }, []);

  const getItems = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('in getItems');
      console.log(response.data);
      setGalleryPhotos(response.data);
    }).catch( (error) => {
      alert('Error getting photos')
      console.log(error)
    });
  }

  const updateLikes = (id) => {

    axios.put(`/gallery/like/${id}`)
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
          <h1 className="App-title">Photos from Meghan's Archives</h1>
        </header>
        <GalleryList galleryPhotos={galleryPhotos} updateLikes={updateLikes} />
        
        
      </div>
    );
}

export default App;
