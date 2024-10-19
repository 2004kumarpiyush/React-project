import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
  
  let courses=props.courses;
  let category=props.category;

  const [LikedCourses,setLikedCourses]=useState([]);
  //sara data key values form me hai mai object.value se keval value le liya
   function getCourses(){
    if(category==="All")
    {  
      let allCourses=[];
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      //mai keval required category ka course pass karunag
         return courses[category];
    }
   
   }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
       {
         getCourses().map((course)=>(
          <Card  key={course.id}  course={course}
          LikedCourses={LikedCourses} setLikedCourses={setLikedCourses}/>
         ))
       }
    </div>
  )
}

export default Cards
