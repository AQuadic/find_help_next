"use client"
import ItemCourse from '@/components/ItemCourse'
import React, { useState } from 'react'


function MyCourses() {
    const [active ,setActive] = useState('')
    const ActiveBtn =(e)=>[
setActive(e)
    ]
  return (
    <>
    <section className="myCourses  m60">
<h1 className=" container">My Courses</h1>
<div className="typeCourses">
    <div className=" container">
        <div className="parts">
<button className={active==="progress"&&"active"} onClick={()=>ActiveBtn("progress")}>In Progress</button>
<button className={active==="completed"&&"active"}  onClick={()=>ActiveBtn("completed")}>completed</button>
        </div>
    </div>
</div>
    <div className="services container m60">
        <div className="allServices">
            <ItemCourse title="Learn python: The Complete Python Programming Course" dec="Avinash jain, The Codex" image="1"   Myprogress={true} numProgress="42%"/>
            <ItemCourse title="Learn python: The Complete Python Programming Course" dec="Edwin Diaz, Coding Faculty Solutions" image="2"   Myprogress={true} numProgress="50%"/>
            <ItemCourse title="Learn python: The Complete Python Programming Course" dec="Avinash jain, The Codex" image="1"   Myprogress={true} numProgress="100%"/>

         
        </div>
      </div>
</section>
    </>
  )
}

export default MyCourses