import React from 'react'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = (props) => {
    return (
        <section id="services" className="services-02 py-6 bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle aciklama="best feature" baslik="Services"/>
                       {/*  <div className="title-box">
                            <h6>best feature</h6>
                            <h3>Services</h3>
                            <span>services</span>
                        </div> */}
                    </div>
                </div>
                <div className="row mt-3">
                   
                    <div className="col-md-6 col-lg-4">
                        <Service resim="assets/img/art-design.svg" baslik="Graphic Design" aciklama="specialise in Graphic design Whether you need to create a new website or updat."/>
                        {/* <div className="services-box">
                            <img src="assets/img/art-design.svg" alt="/">
                            <div className="services-content">
                                <h5 className="services-head">Graphic Design</h5>
                                <p className="services-description mb-0">specialise in Graphic design Whether you need to create a new website or updat.</p>
                            </div>
                        </div> */}
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                    <Service resim="assets/img/art-design.svg" baslik="Web Design" aciklama="design, build & maintain websites that keep pace with our digital world."/>
                        
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                    <Service resim="assets/img/portfolio.svg" baslik="App Development" aciklama="build mobile first solutions for ios, Android taking your idea to polished product."/>
                        
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                    <Service resim="assets/img/musical-notes.svg" baslik="Musice Writing" aciklama="Music copying, writing, creat, transcription, arranging composition services."/>
                        
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                    <Service resim="assets/img/website.svg" baslik="Digital Marketingg" aciklama="Generate your sales opportunity with our best digital marketing services."/>
                        
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                    <Service resim="assets/img/brand-awareness.svg" baslik="Brand Identity" aciklama="I can manufacture magic that allows your brand to stand out from the crowd."/>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
