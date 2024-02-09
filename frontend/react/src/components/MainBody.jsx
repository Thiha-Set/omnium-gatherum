import React from 'react'

function MainBody({bgImageUrl}) {
    return (
        <main style={{backgroundImage: `url("${bgImageUrl}")`,backgroundSize:"cover"}}>
            <div id='main-body-heading' className='text-light ps-2 text-justify'>
                    <h4>Lorem <br />Ipsum</h4>
                    <p className='ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas architecto labore ad maxime? Deleniti nam omnis ipsa tempora, quisquam et?</p>
                </div>
        </main>
    )
}

export default MainBody