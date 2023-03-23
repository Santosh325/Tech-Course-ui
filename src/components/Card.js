import React from 'react';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
export const Card = (props) => {
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    function clickHandler() {
     
        if(likedCourses.includes(course.id)) {
        //    liked is there already
           setLikedCourses((prev) => prev.filter((cid) => cid !== course.id))
           toast.warning('Like removed');
        } else {
        // no liked courses there
           if(likedCourses.length === 0) {
             setLikedCourses([course.id])
           } else {
             setLikedCourses((prev) => [...prev,  course.id]);
           }
           toast.success('Liked Successfully')

        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80  rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt={course.image.alt} className=""/>
            <div className='h-[40px] w-[40px] bg-white rounded-full grid place-items-center absolute right-2 -bottom-[20px]'>
                <button onClick={clickHandler} className="absolute ">
                   {
                    likedCourses.includes(course.id) ? (<FcLike/>): (<FcLikePlaceholder/>)
                   }
                    </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ? 
                    (`${course.description.substr(0,100)}...`) : 
                    (course.description)
                }
            </p>
        </div>
    </div>
  )
}
export default Card;
