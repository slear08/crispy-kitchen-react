import React from 'react'
import * as image from '../assets/images'
import video from '../assets/video/production_ID_3769033.mp4'
import LastestUpdate from '../components/News/LastestUpdate'
import NewsComponent from '../components/News/NewsComponents'

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

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.breakfast1} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Breakfast</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Morning Fresh</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>12.50</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.lunch2} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Lunch</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Tooplate Soup</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.dinner3} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Dinner</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Premium Steak</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>45</span>

                                    <del className="ms-4"><small>$</small>150</del>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.dinner2} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Dinner</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Seafood Set</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>86</span>

                                    <del className="ms-4"><small>$</small>124</del>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.breakfast2} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Breakfast</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Burger Set</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>20.50</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src={image.lunch1} className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Lunch</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Healthy Soup</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>34.20</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="BgImage"></section>

            <section className="news section-padding">
                <div className="container">
                    <div className="row">

                        <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

                        <LastestUpdate 
                            image={image.news6} 
                            tags="Featured" 
                            newsLink="How to make a healthy diet?"
                        />
                        <LastestUpdate 
                            image={image.news8} 
                            tags="Featured" 
                            newsLink="Happy Living and happy eating tips"
                        />

    
                        <NewsComponent 
                            image={image.news5} 
                            tags="Promotions" 
                            date="12 April 2022" 
                            newsLink="Is Coconut good for your health?"
                        />

                        <NewsComponent 
                            image={image.news2} 
                            tags="Career" 
                            date="18 April 2022" 
                            newsLink="How to run a sushi business?"
                        />

                        <NewsComponent 
                            image={image.news4} 
                            tags="Meeting" 
                            date="30 April 2022" 
                            newsLink="Learning a fine dining experience"
                        />

                    </div>
                </div>
            </section>

    </main>
        
  )
}

export default Home