import React from 'react'
import classNames from 'classnames';
import style from './Review.module.css'

const Review = () => {
  return (
    <>
     <br/>
      <br/>
      <br/>
    <h1 className="text-center mt-5">What Our Student Say About Us</h1>
    <div className="d-flex justify-content-center">
             <img src='public/underline.png' />

         </div>
         <br/>
         <br/>
       <div className={classNames('container' , style.box)}>
         <div className="row">
             <div className="col-md-4">
                 <img src='public/testimonial.b4a97b69f2bf8c02fc4f.png' alt=""/>
             </div>
             <div className="col-md-8 mt-5">
                 <h4>Justin Case</h4>
                 <p>Student</p>
                 <div></div>
                 <p>
                 Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. 
                 Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.
                 </p>
             </div>
         </div>
       </div>
         </>
  )
}

export default Review
