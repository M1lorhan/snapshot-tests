import React from "react";
import Card from "react-bootstrap/Card"
import millie from './Millie.JPG'


function GitHubCard() {
    return(
        <div className="card">
            <Card style={{width: "10rem"}}>
            <Card.Img variant="top" src={millie} width={350} />
            <Card.Body>
                <Card.Title>M1Lorhan</Card.Title>
                <Card.Text>
                Student of the world
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard