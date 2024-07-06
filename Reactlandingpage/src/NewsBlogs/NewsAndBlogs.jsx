import React from 'react'
import Card from 'react-bootstrap/Card';
import Group from '../assets/vector7.svg'


const NewsAndBlogs = () => {
  const data = [
    {
      id: 1,
      title: 'Kids future Schools & Corona Prevent to Growth',
       img: 'public/1.987e87b22a8f90492eb4.jpg'
    },
    {
      id: 2,
      title: 'Echooling future Schools & social Innovation',
       img: 'public/2.8f0076f5a86838542c39.jpg'
    },
    {
      id: 3,
      title: '7 Learning system design tips For better eLearning',
       img: 'public/3.356c9579b8137ed75a03.jpg'
    },
    {
      id: 4,
      title: 'Why schools should continue remote study',
       img: 'public/1.045ce5893b04f4bde993.png'
    },
  ]
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h1 className="text-center">News And Blogs</h1>
      <div className="d-flex justify-content-center">
          <img src='public/underline.png' />
      </div>
      <div className="d-flex justify-content-around mt-5">
      {data.map(data=>{
        return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img} style={{height:'211px'}}/>
          <Card.Body>
              <p>Education</p>
              <h5>{data.title}</h5>
              <img src={Group} /> <p>Charlie John</p>
          </Card.Body>
        </Card>
         
         )
        })}
        </div>
      
    </div>
  )
}

export default NewsAndBlogs

