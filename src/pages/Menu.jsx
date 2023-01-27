import React from 'react'
import * as image from '../assets/images'
import MenuItem  from '../components/Menu/MenuItem'

function Menu() {
  return (
    <main>
        <header className="site-header site-menu-header">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 mx-auto">
                        <h1 className="text-white">Our Menus</h1>

                        <strong className="text-white">Perfect for all Breakfast, Lunch and Dinner</strong>
                    </div>

                </div>
            </div>

            <div className="overlay"></div>
        </header>

        <section className="menu section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-lg-5 mb-4">Breakfast Menu</h2>
                    </div>

                    <MenuItem 
                        img={image.breakfast1} 
                        name="Fresh Start"
                        price="24.50"
                        reviews="128"
                        ratings="4.4/5" 
                        discount={null} 
                    />
                    <MenuItem 
                        img={image.breakfast3} 
                        name="Baked Creamy"
                        price="16.50"
                        reviews="64"
                        ratings="3/5"  
                        discount={null}
                    />

                    <MenuItem 
                        img={image.breakfast2} 
                        name="Burger Set"
                        price="24.50"
                        reviews="64"
                        ratings="3/5"  
                        discount={36.50}
                    />

                </div>
            </div>
        </section>

        <section className="menu section-padding bg-white">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-lg-5 mb-4">Lunch Menu</h2>
                    </div>
                    
                    <MenuItem 
                        img={image.lunch4} 
                        name="Super Steak Set"
                        price="32.75"
                        reviews="64"
                        ratings="4.2/5"  
                        discount={55}
                    />
                    <MenuItem 
                        img={image.lunch3} 
                        name="Bread & Steak Set"
                        price="42.50"
                        reviews="85"
                        ratings="3/5"  
                        discount={null}
                    />

                </div>
            </div>
        </section>

        <section className="menu section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-lg-5 mb-4">Dinner Menu</h2>
                    </div>

                    <MenuItem 
                        img={image.dinner2} 
                        name="Seafood Set"
                        price="65.50"
                        reviews="102"
                        ratings="4.4/5"  
                        discount={null}
                    />
                    <MenuItem 
                        img={image.dinner3} 
                        name="Premium Steak"
                        price="74.25"
                        reviews="56"
                        ratings="3/5"  
                        discount={null}
                    />
                    <MenuItem 
                        img={image.dinner1} 
                        name="Salmon Set"
                        price="60"
                        reviews="76"
                        ratings="3/5"  
                        discount={null}
                    />
                    
                </div>
            </div>
        </section>

        </main>
  )
}

export default Menu