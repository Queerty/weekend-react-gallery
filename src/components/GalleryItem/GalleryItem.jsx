//image with description with toggle description and like
//
// {galleryItems.map((photo) => (
//     <img src={photo.path} key={photo.id} width='100px' height='auto'/>
//     <button type= "button" key={photo.id} className="likesButton"> Likes: `{photo.likes}` </button>
//     ))}

//function handleLikes

// const [likeCount, setLikeCount] = useState(0);
function GalleryItem({image}){


    return (
        <>
        <section className="galleryItem">
        <img src={image.path} alt={image.description} height='100px' width='auto'/>
        <button type='button' onClick>Likes {image.likes}</button>
        </section>
        </>
    )

}

export default GalleryItem;