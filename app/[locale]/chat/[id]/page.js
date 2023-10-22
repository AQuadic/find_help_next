import React from 'react'

function page() {
  return (
    <div className="container chat">
        <div className='part1'></div>
        <div className='part2'>
            <div className='headChat'>
                <img src="/images/person.webp" alt='persone'/>
                <p>Swathi </p>
            </div>
            <div className='boxChat'>
                <p>Hey There !</p>
                <p>How are you doing?</p>
                <p className='user'>Hello...</p>
            </div>
            <div className='inputChat'>
            <div className='boxInput'>
                <input type="text" className='textInput' />
                <input type="file" />
            </div>
            <button className='btnSend'>
                <img src="/images/send.svg" alt='send' />
            </button>
            </div>
        </div>
    </div>
  )
}

export default page