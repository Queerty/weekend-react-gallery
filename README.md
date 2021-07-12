#Photos from Meghan's Archives

This application displays a gallery of personal photos and allows the user to interact with it.
The styling was set up to suggest where users can click and interact with the display.

The app consists of three components: App.jsx which holds the axios functions, those are passed to another component- the GalleryList- along with the gallery.data from the image file (obtained through the GET).
The GalleryList maps through the array of info and passes the image info and PUT function to 
the GalleryItem. GalleryItem has conditional rendering to toggle between the image description and the 
image itself. A click event sets the state with a boolean to determine the rendering. 

To set up this project:
Run an npm install
Run npm run server in your terminal
Run npm run client in your terminal

How to use this application:
1. On page load, a gallery of images appears
2. Click on an image to see the description of the photo
3. Click the like button below an image to "like" that photo
4. A count on the button updates with each like (passed through a PUT function)
5. Scroll and enjoy some photos that represent some wonderful memories I have

This Photo Gallery project was built using REACT, Node.js, and includes some Bootstrap stylings. 

