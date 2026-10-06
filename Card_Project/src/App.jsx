import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdQkDmPAVnD9Lrwp7lQrPKSkGkIO8fhq1j_6aTTPptA&s=10",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YQ9jGHlcCzsr903MD0k_3NjDU9XjKUpiwwUdoAi8Kg&s",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Fullstack Developer",
    tag1: "Full Time",
    tag2: "High Level",
    pay: "$80/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    companyName: "Adobe",
    datePosted: "1 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Low Level",
    pay: "$50/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
    companyName: "Microsoft",
    datePosted: "1 month ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "High Level",
    pay: "$90/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EWdK2cfXrPGTbbDcTVV-q4YqerXSb2HDTaTjWoOj9w&s=10",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Fullstack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Gurgaon, India"
  }
]


const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} posted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.brandLogo}/>
      })

      }

    </div>
  )
}

export default App
