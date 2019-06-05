import React from 'react'
import TinySlider from 'tiny-slider-react'
import loadingImage from '../img/loading.svg'
import slide1 from '../img/bg-home1.jpg'
import slide2 from '../img/bg-home2.jpg'

const slides = [slide1, slide2];
const sliderSettings = {
    autoplayButtonOutput: false,
    lazyload: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    nav: true,
    controls: false,
};
const imgStyles = {
    width: "100%",
    height: "400px",
    objectFit: "cover"
};
export default class HomeSlider extends React.Component {
    render() {
        if (typeof window !== 'undefined') {
            return (
                <TinySlider settings={sliderSettings}>
                    {slides.map((el, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <img
                        className={`tns-lazy-img`}
                        src={loadingImage}
                        data-src={el}
                        alt=""
                        style={imgStyles}
                        />
                    </div>
                    ))}
                </TinySlider>
            )
        }
        return null
    }
}