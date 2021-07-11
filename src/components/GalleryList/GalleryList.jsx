//collection of images displayed
import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";



function GalleryList(props){
    console.log('Whats in my galleryList:', props );
    // console.log(props.galleryPhotos[0].description);
    console.log('updateLikes function', props.updateLikes);
    
    return(
    <>
        <div className="galleryItem">       
        {props.galleryPhotos.map(image =>
        <GalleryItem key={image.id} image={image} updateLikes={props.updateLikes} />)
        }
    </div>
             
    </>
    )
    
}

export default GalleryList;