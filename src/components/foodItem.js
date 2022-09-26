import React from "react";
import {Card} from 'react-bootstrap';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
            id: props.id,
            title: props.title,
            image: props.image,
            ingredients: props.ingredients,
            rating: props.rating,
        };
    }

    render() {
        return (
            <Card style={{marginRight: 'auto',marginLeft: 'auto', width: '20rem', height: '20rem' }}>
            <Card.Header>{this.state.title}</Card.Header>
            <Card.Img variant="top" height='200px' src={this.state.image} />
            <Card.Body>
              <div className="cardBody">
                {this.state.ingredients}
                <br />
                {this.state.rating}
              </div> 
                <br />
              {/* <div>
                    <h4> User Reviews </h4>    
              </div> 
                <br /> */}
              {/* <div>
                  <ReviewList />
              </div> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">
              <Stars /> 
              <ReviewList />
            </Card.Footer> */}
          </Card>

        )
       
      
    }
}