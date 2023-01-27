import React from 'react'
import * as image from '../assets/images'
import video from '../assets/video/production_ID_3769033.mp4'
import SpecialMenuItem from '../components/Menu/SpecialMenuItem'

function Home() {
  return (
    <main>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 m-auto">
                            <div className="heroText">

                                <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>

                                <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <h4 className="text-white mb-0 me-3">4.4/5</h4>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>
                                    </div>

                                    <p className="text-white w-100">From <strong>1,206+</strong> Customer Reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12">
                            <div id="carouselExampleCaptions" className="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="carousel-image-wrap">
                                            <img src={image.slide2} className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <span className="text-white">
                                                <i className="bi-geo-alt me-2"></i>
                                                Manhattan, New York
                                            </span>

                                            <h4 className="hero-text">Fine Dining Restaurant</h4>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="carousel-image-wrap">
                                            <img src={image.slide3} className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <div className="d-flex align-items-center">
                                                <h4 className="hero-text">Steak</h4>

                                                <span className="price-tag ms-4"><small>$</small>26.50</span>
                                            </div>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <h5 className="reviews-text mb-0 me-3">3.8/5</h5>

                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="carousel-image-wrap">
                                            <img src={image.slide1} className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <div className="d-flex align-items-center">
                                                <h4 className="hero-text">Sausage Pasta</h4>

                                                <span className="price-tag ms-4"><small>$</small>18.25</span>
                                            </div>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <h5 className="reviews-text mb-0 me-3">4.2/5</h5>

                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="video-wrap">
                    <video autoPlay={true} loop={true} muted={true} className="custom-video" poster="">
                        <source src={video} type="video/mp4"/>
                        	Your browser does not support the video tag.
                    </video>
                </div>

                <div className="overlay"></div>
            </section>

            <section className="menu section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
                        </div>

                        <SpecialMenuItem 
                            img = {image.breakfast1} 
                            name = "Morning Fresh"
                            price = "12.50"
                            reviews = "102"
                            ratings = "4.3/5" 
                            tag = "Breakfast"
                            discount = {null} 
                        />
                        <SpecialMenuItem 
                            img = {image.lunch2} 
                            name = "Tooplate Soup"
                            price = "24.50"
                            reviews = "50"
                            ratings = "3/5" 
                            tag = "Lunch"
                            discount = {null} 
                        />
                        <SpecialMenuItem 
                            img = {image.dinner3} 
                            name = "Premium Steak"
                            price = "45"
                            reviews = "86"
                            ratings = "3/5" 
                            tag = "Dinner"
                            discount = {150} 
                        />
                        <SpecialMenuItem 
                            img = {image.dinner2} 
                            name = "Seafood Set"
                            price = "86"
                            reviews = "44"
                            ratings = "3/5" 
                            tag = "Dinner"
                            discount = {124} 
                        />
                        <SpecialMenuItem 
                            img = {image.breakfast2} 
                            name = "Seafood Set"
                            price = "20.50"
                            reviews = "102"
                            ratings = "4.3/5" 
                            tag = "Breakfast"
                            discount = {null} 
                        />
                        <SpecialMenuItem 
                            img = {image.lunch1} 
                            name = "Healthy Soup"
                            price = "34.20<"
                            reviews = "64"
                            ratings = "3/5" 
                            tag = "Lunch"
                            discount = {null} 
                        />
                        

                    </div>
                </div>
            </section>

            <section className="BgImage"></section>

            <section className="news section-padding">
                <div className="container">
                    <div className="row">

                        <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src={image.news6} className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info news-text-info-large">
                                    <span className="category-tag bg-danger">Featured</span>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">Healthy Lifestyle and happy living tips</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src={image.news8} className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info news-text-info-large">
                                    <span className="category-tag bg-danger">Featured</span>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">How to make a healthy meal</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

    
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                                <a href="news-detail.html">
                                    <img src={image.news5} className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag me-3 bg-info">Promotions</span>

                                    <strong>8 April 2022</strong>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">Is Coconut good for you?</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                                <a href="news-detail.html">
                                    <img src={image.news1} className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag">News</span>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">Salmon Steak Noodle</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src={image.news4} className="img-fluid news-image" alt="" />
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag me-3 bg-info">Meeting</span>

                                    <strong>30 April 2022</strong>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">Making a healthy salad</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

    </main>
        
  )
}

export default Home