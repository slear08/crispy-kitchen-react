import React from 'react'
import * as image from '../assets/images'

function About() {
  return (
    <main>
        <header className="site-header site-about-header">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 mx-auto">
                        <h1 className="text-white">Kitchen's Story</h1>

                        <strong className="text-white">this is how our kitchen evolved in new digital era</strong>
                    </div>

                </div>
            </div>

            <div className="overlay"></div>
        </header>

        <section className="about section-padding bg-white">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-2">
                        <h4 className="mb-3">Satisfy your cravings at Crispy Kitchen - where every bite is a crispy, delicious adventure!</h4>

                        <a href="news.html" className="custom-btn btn btn-dark mt-3">Check out News</a>

                        <a href="contact.html" className="custom-btn btn btn-danger mt-3 ms-3">Say Hi</a>
                    </div>

                    <div className="col-lg-6 col-12">
                    
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate eaque iure quod in iste sunt molestiae consequatur quis culpa facilis omnis perspiciatis ab magnam nam reprehenderit autem provident, commodi fugiat. Please <strong>click "Reservation" button</strong> on the top right to see the pop-up reservation form.</p>
                    
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vero sit repellendus amet autem dolorum aliquam cupiditate rem asperiores et doloribus, suscipit numquam iste saepe totam blanditiis cum molestiae adipisci. Nulla quisquam doloremque similique doloribus a iure perspiciatis quasi itaque.</p>

                    </div>

                </div>
            </div>
        </section>

        <section className="about section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-5">Team Members</h2>
                    </div>

                    <div className="col-lg-4 col-12">
                        <div className="team-thumb">
                            <img src={image.team1} className="img-fluid team-image" alt=""/>
                            
                            <div className="team-info">
                                <h4 className="mt-3 mb-0">Sophia</h4>

                                <p>CEO &amp; Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 my-lg-0 my-4">
                        <div className="team-thumb">
                            <img src={image.team3}  className="img-fluid team-image" alt=""/>

                            <h4 className="mt-3 mb-0">Benjamin W.</h4>

                            <p>Restaurant Manager</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12">
                        <div className="team-thumb">
                            <img src={image.team2}  className="img-fluid team-image" alt=""/>
                            
                            <h4 className="mt-3 mb-0">Muchen Jack</h4>

                            <p>Senior Chef</p>
                        </div>  
                    </div>

                </div>
            </div>
        </section>
        
        <section className="newsletter section-padding bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src={image.heroEmail} className="img-fluid newsletter-image" alt=""/>
                    </div>

                    <div className="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
                        <div className="subscribe-form-wrap">
                            <h4 className="mb-0">Our Newsletter</h4>

                            <p>The food news every day</p>

                            <form className="custom-form subscribe-form mt-4" role="form">
                                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Your email address" required=""/>

                                <button type="submit" className="form-control mb-3" id="subscribe">Subscribe</button>

                                <small>By signing up, you agree to our Privacy Notice and the data policy</small>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
      </main>
  )
}

export default About