import React from 'react'

function NewsComponents({ image , tags , date , newsLink }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
        <div className="news-thumb mb-4">
            <a href="news-detail.html">
                <img src={image} className="img-fluid news-image" alt=""/>
            </a>
            
            <div className="news-text-info">
                <span className="category-tag me-3 bg-info">{tags}</span>

                <strong>{date}</strong>

                <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">{newsLink}</a>
                </h5>
            </div>
        </div> 
    </div>
  )
}

export default NewsComponents