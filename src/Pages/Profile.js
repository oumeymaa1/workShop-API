import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Profile = () => {
    const{id} = useParams ();
    const [user, setUser] = useState ({});
    useEffect(() => {
        axios
        .get (`https://jsonplaceholder.typicode.com/users/?id= ${id}`)
        .then ((res) => setUser(res.data[0]))
        .catch ((err) => console.log(err))
    });
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src="https://cdn.icon-icons.com/icons2/2121/PNG/512/avatar_woman_curly_hair_people_icon_131266.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>

        <Button variant="primary">
            <Link to={`/users`}>Go Back</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile