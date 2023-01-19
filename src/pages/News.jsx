import React from 'react'
import * as image from '../assets/images'
import LastestUpdate from '../components/News/LastestUpdate'
import NewsComponent from '../components/News/NewsComponents'

function News() {
  return (
    <main>
        <header className="site-header site-news-header">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 mx-auto">
                        <h1 className="text-white">News &amp; Events</h1>

                        <strong className="text-white">our latest updates, news, events and special promotions</strong>
                    </div>

                </div>
            </div>

            <div className="overlay"></div>
        </header>

        <section className="news section-padding bg-white">
            <div className="container">
                <div className="row">

                    <h2 className="mb-lg-5 mb-4">Latest Updates</h2>
                    
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
                    
                </div>
            </div>
        </section>

        <section className="news section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-lg-5 mb-4">News &amp; Events</h2>
                    </div>
                    
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

export default News