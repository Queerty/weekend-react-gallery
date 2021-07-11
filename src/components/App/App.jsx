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

  // const updateLikes = (photo) => {
  //   console.log(photo);
  //   axios.put(`/gallery/like/${photo.id}`, {likes:photo.likes})
  //   .then(response => {
  //     getItems();
  //   })
  //   .catch(error => {
  //     console.log('unable to add like', error);
  //   });
  // }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryPhotos={galleryPhotos} />
        
        
      </div>
    );
}

export default App;


// {galleryPhotos.map(photo =>
//   (<GalleryItem key={photo.id} photo={photo} />
//   ))}