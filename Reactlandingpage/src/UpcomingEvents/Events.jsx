
import React from 'react';
import Card from 'react-bootstrap/Card';
import Location from '../assets/vector3.svg';

const Events = () => {
  const data = [
    {
      id: 1,
      date: '10',
      month: 'January, 2022',
      time: '10:30AM - 12:00PM',
      title: 'A Better Alternative To Grading Student Writing',
    },
    {
      id: 2,
      date: '14',
      month: 'April, 2022',
      time: '12:00AM - 01:30PM',
      title: '12 Things Successful Mompreneurs',
    },
    {
      id: 3,
      date: '26',
      month: 'March, 2022',
      time: '13:30PM - 02:00PM',
      title: '12 Things Successful Mompreneurs',
    },
    {
      id: 4,
      date: '10',
      month: 'April, 2022',
      time: '13:30PM - 02:00PM',
      title: 'The Importance Of Intrinsic Motivation.',
    },
  ];

  return (
    <div>
       <br/>
      <br/>
      <br/>
      <h1 className="text-center">Upcoming Events</h1>
      <div className="d-flex justify-content-center">
        <img src='/public/underline.png' alt="Underline" />
      </div>
      <div className="d-flex justify-content-around mt-5">
        {data.map(event => (
          <Card key={event.id} style={{ width: '18rem' }}>
            <Card.Body>
              <h1>{event.date}</h1>
              <p>{event.month}</p>
              <div></div>
              <p>{event.time}</p>
              <Card.Title>{event.title}</Card.Title>
              <img src={Location} alt="Location" /><p className="d-inline-block">New York, USA</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Events;
