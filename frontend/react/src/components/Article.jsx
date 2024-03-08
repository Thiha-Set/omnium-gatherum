import React from 'react'
import ArticleItem from './ArticleItem'

function Article() {
    return (
        <div className='body_article bg-light p-4 mb-4'>
            <h4 className='text-dark'>Lorem ipsum dolor sit amet.</h4>
            <hr />
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
        </div>
    )
}

export default Article