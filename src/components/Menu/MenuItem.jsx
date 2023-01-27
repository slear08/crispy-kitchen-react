import React from 'react'

function MenuItem({ img , name , price , reviews , rating , discount }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
        <div className="menu-thumb">
            <img src={img} className="img-fluid menu-image" alt=""/>

            <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">{name}</h4>

            <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>{price}</span>
            {discount!==null && (
                <p>Previous Price<del className="ms-4"><small>$</small>{discount}</del></p>
                ) }
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">{rating}</h6>

                    <div className="reviews-stars">
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">{reviews} Reviews</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItem