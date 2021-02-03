import {React,Component} from 'react'
import {Card,Button} from "react-bootstrap";
import axios from "axios";


class ImageAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             images:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response=>{
            this.setState({
                images:response.data
            })
        })
        .catch(error=>{
            console.log(error);
        });
    }
        render() {
            const {images}=this.state
             return (
                <div>
                     <h1 id ="title">List of Images</h1>
                     <hr/> 
                     <div>
                        {images.length?images.map(image=>
                     <Card  key={image.id} style={{ display:'inline-grid',width:"25%"}}>
                     <Card.Header><h2>Image: {image.id}</h2></Card.Header>
                    <Card.Img variant="top" src={image.url} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        {image.title}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                           ):null}
                           </div>

                  </div>
            )
        }
    }
    




















// function ImageAPI() {
//     return (
//         <div>
//             <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     {/* <Button variant="primary">Go somewhere</Button> */}
//   </Card.Body>
// </Card>
//         </div>
//     )
// }
export default ImageAPI