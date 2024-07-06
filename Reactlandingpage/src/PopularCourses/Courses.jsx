

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
  const data = [
    {
      id: 1,
      title: 'Dave conservatoire is the Entirely free online',
      lesson: '5',
      price: '$72.00',
      students: '56 Students',
      img: '/public/1.2b718c64abf3cba58c0a.png'
    },
    {
      id: 2,
      title: 'Strategy law and Organization foundation',
      lesson: '4',
      price: '$68.00',
      students: '77 Students',
      img: 'public/2.0f4fbbe4e32c8eec212e.png'
    },
    {
      id: 3,
      title: 'Python for Data Science & Machine Learning',
      lesson: '4',
      price: '$68.00',
      students: '77 Students',
      img: 'public/3.2f7b3c10359c070cae98.png'
    },
    {
      id: 4,
      title: 'The complete web develop Ment bootcamp.',
      lesson: '4',
      price: '$68.00',
      students: '77 Students',
      img: 'public/4.1e8ed20eff0c42a15afb.png'
    }
  ]

  return (
    <div>
      <h1 className="text-center">Popular Courses</h1>
      <div className="d-flex justify-content-center">
        <img src='/Public/underline.png' alt="Underline" />
      </div>
      <div className="d-flex justify-content-around mt-5">
        {data.map(course => {
          return (
            <Card key={course.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={course.img} style={{ height: '211px' }} />
              <Card.Body>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>UX Design</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>{course.lesson} Lessons</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <Card.Title>{course.title}</Card.Title>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <p>{course.students}</p>
                  </div>
                  <div className="col-md-4">
                    <h5>{course.price}</h5>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Courses;
