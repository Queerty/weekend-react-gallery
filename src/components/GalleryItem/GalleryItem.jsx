//image with description with toggle description and like
//
// {galleryItems.map((photo) => (
//     <img src={photo.path} key={photo.id} width='100px' height='auto'/>
//     <button type= "button" key={photo.id} className="likesButton"> Likes: `{photo.likes}` </button>
//     ))}

//function handleLikes

// const [likeCount, setLikeCount] = useState(0);
import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({image, updateLikes}){

    const [display, setDisplay] = useState(true);

    const toggleDisplay = () => {
        console.log('clicked image');
        //set state
        setDisplay(!display)
    }

    return (
        <>
       
        <section onClick={() => toggleDisplay(image.id)} className="photo">
            { display &&
        <img src={image.path} alt={image.description} class="img-thumbnail" width="400" height="auto"/>}
            { !display &&
            <div className= "square">{image.description}</div>}
        </section>
        <button className="btn btn-success btn-sm" type='button' onClick={() => updateLikes(image.id)}>Likes {image.likes}</button>
       
        </>
    )


}

export default GalleryItem;