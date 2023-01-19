import React from 'react'

function LastestUpdate({ image , tags , newsLink }) {
  return (
    <div className="col-lg-6 col-md-6 col-12">
        <div className="news-thumb mb-4">
            <a href="news-detail.html">
                <img src={image} className="img-fluid news-image" alt=""/>
            </a>
            
            <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">{tags}</span>

                <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">{newsLink}</a>
                </h5>
            </div>
        </div> 
    </div>
  )
}

export default LastestUpdate