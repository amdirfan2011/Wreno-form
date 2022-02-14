import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Layout.css';

const Layout = (props) => {
    return (
        <>
            <div className="col-lg-12 header">
                <div className="col-lg-12 hdr_div">
                    <div className="logo_div">
                        <div className="logo_dv_box">
                            <img className="img_1" src="../images/Werno_Logo.png" />
                            <img className="img_2" src="../images/Wreno_Name_logo.png" />
                        </div>
                    </div>
                    <div className="wreno_hdng_div">
                    </div>
                </div>
            </div>
                <div className="col-lg-3 crsl_left_div">
                    <div className="crcsl col-lg-12">
                        <div className="gallery">
                            <Carousel emulateTouch={true} showThumbs={false} showStatus={false}>
                                <div className="gallery-cell">
                                    <div className="audioPlayer">
                                        <img className="col-lg-12" src="../images/crcl_design.png" />

                                    </div>
                                </div>
                                <div className="gallery-cell">
                                    <div className="audioPlayer">
                                        <img className="col-lg-12" src="../images/2.png" />

                                    </div>
                                </div>
                                <div className="gallery-cell">
                                    <div className="audioPlayer">
                                        <img className="col-lg-12" src="../images/3.png" />

                                    </div>
                                </div>
                                <div className="gallery-cell">
                                    <div className="audioPlayer">
                                        <img className="col-lg-12" src="../images/4.png" />

                                    </div>
                                </div>
                                <div className="gallery-cell">
                                    <div className="audioPlayer">
                                        <img className="col-lg-12" src="../images/crcl_design.png" />

                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
               
        </>

    );
};

export default Layout;