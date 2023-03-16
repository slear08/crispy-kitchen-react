import React from 'react'
import { Link } from 'react-router-dom'

function LastestUpdate({ image , tags , newsLink }) {
  return (
    <div className="col-lg-6 col-md-6 col-12">
        <div className="news-thumb mb-4">
            <Link to="/news-details">
                <img src={image} className="img-fluid news-image" alt=""/>
            </Link>
            
            <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">{tags}</span>

                <h5 className="news-title mt-2">
                    <Link className="news-title-link" to="/news-details">{newsLink}</Link>
                </h5>
            </div>
        </div> 
    </div>
  )
}

export default LastestUpdate