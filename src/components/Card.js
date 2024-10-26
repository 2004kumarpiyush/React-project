import React from 'react'
import {FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

function Card(props) {
  let course=props.course;
  let LikedCourses=props.LikedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    //agar pahle se liked hua pda hai to
    if(LikedCourses.includes(course.id)){
      //pehle se like ko hatana padega pahle se like ko filter karke hta rha hun
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
      toast.warning("Like removes Successfully");
    }
    else
    {
      //pehle se like ni hai ye course
      //insert kar padega liked courses
      if(LikedCourses.length==0)
          setLikedCourses([course.id]);
        else{
          setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success("Course Liked Successfully");
    }
     
  }
  return(
       <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
          <img src={course.image.url}/>
          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px]
          grid place-items-center'>
          <button onClick={clickHandler}>
             {
              LikedCourses.includes(course.id)?
              (<FcLike fontSize="1.75rem"/>):
              (<FcLikePlaceholder fontSize="1.75rem"/>)
             }
          </button>
        </div>
        </div>
      
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='mt-2 text-white'>
            {

              course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
            }
            </p>
        </div>

       </div>
  )
}

export default Card
