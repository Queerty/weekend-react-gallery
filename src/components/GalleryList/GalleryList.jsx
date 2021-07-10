//collection of images displayed
import "./GalleryList.css";
function GalleryList({galleryItems}){
    return(
    <>
        <h2>All these photos:</h2>
          <section>{galleryItems.map((photo) => (
              <img src={photo.path} key={photo.id} width='100px' height='auto'/>
            //   <button type= "button" key={photo.id} className="likesButton"> Likes: `{photo.likes}` </button>
              ))}
              </section>
    </>
    )
}

export default GalleryList;