import React from 'react'

function ServiceItem({ title, thumbnailSrc }) {
    return (
        <div className='m-2 service-item p-3'>
            <h4 className='text-center'>{title}</h4>
            <div className='d-flex justify-content-center flex-column'>
                <img src={thumbnailSrc} className='mw-100 mb-4' />
                <div>
                    <p className='text-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam earum est deleniti consectetur nam, dignissimos veniam omnis repellendus, porro blanditiis necessitatibus aliquam voluptatem voluptatum facere dicta ea harum deserunt officia?
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ServiceItem