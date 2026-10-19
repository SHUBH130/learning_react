import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams()

  return (
    <div>
        <h2>{params.CourseDetails}Course Details</h2>
    </div>
  )
}

export default CourseDetails