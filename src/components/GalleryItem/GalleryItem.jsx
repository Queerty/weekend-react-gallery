//image with description with toggle description and like
//
// {galleryItems.map((photo) => (
//     <img src={photo.path} key={photo.id} width='100px' height='auto'/>
//     <button type= "button" key={photo.id} className="likesButton"> Likes: `{photo.likes}` </button>
//     ))}

//function handleLikes

// const [likeCount, setLikeCount] = useState(0);
import { useState } from "react";
function GalleryItem({image, updateLikes}){

    const [display, setDisplay] = useState(true);

    const toggleDisplay = () => {
        console.log('clicked image');
        //set state
        setDisplay(!display)
    }

    return (
        <>
        <section onClick={() => toggleDisplay(image.id)}  className="galleryItem">
            { display &&
        <img src={image.path} alt={image.description} height='100px' width='auto'/>}
            { !display &&
            <p>{image.description}</p>}
        <button type='button' onClick={() => updateLikes(image.id)}>Likes {image.likes}</button>
        </section>
        </>
    )


}

export default GalleryItem;