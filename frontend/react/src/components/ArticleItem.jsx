import React from 'react'
// import { FcGraduationCap } from "react-icons/fc";
import { AiFillAppstore } from "react-icons/ai";
import { IconContext } from 'react-icons';

function ArticleItem() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className='align-self-center me-4 article-rotation-icon'>
                    <IconContext.Provider value={{ style: { fontSize: "1.75rem",color: "rgb(247, 200, 12)"}}}>
                        <AiFillAppstore  className='article-rotation-icon'/>
                    </IconContext.Provider>
                </div>
                <div>
                    <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia corporis dignissimos at. Maiores temporibus porro voluptatibus blanditiis illo odio fugiat enim doloribus ullam excepturi.</p>
                </div>
            </div>
        </>
    )
}

export default ArticleItem