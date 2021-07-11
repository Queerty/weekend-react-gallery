//collection of images displayed
import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";



function GalleryList(props){
    console.log('Whats in my galleryList:', props );
    // console.log(props.galleryPhotos[0].description);
    
    return(
    <>
        <div className="galleryItem">
        <p>Testing from Gallery List</p>
       
        {props.galleryPhotos.map(image =>
        <GalleryItem key={image.id} image={image}/>)
        }
    </div>
             
    </>
    )
    
}

export default GalleryList;