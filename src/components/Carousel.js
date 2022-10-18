import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { articles } from '../data/articles'
import './carousel.css' ;

const CarouselChild = (props) => {
    const {children, show} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)


    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }    
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                    &#x2039;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &#x203A;
                    </button>
                }
            </div>
        </div>
    )
};

const CarouselItem = ({im_url, title, link}) => {
    return (
        <a href= {link}> 
        <div class="container">
           <img class = "caro_img" src={im_url} alt="placeholder" /> 
            <div class="centered">{title}</div>
        </div>
        </a>
    )
}
const Carousel = ({section, section_title}) => {
    var article_array = []
    for (var i = 0; i < section.length; i++) {
        article_array.push((<CarouselItem im_url = {section[i].image_url} title = {section[i].article_title} link = {section[i].article_link}/>   ));
    }
    let w = window.innerWidth;
    if (w>768) { // show 3 photos if browser sized, show 2 if mobile
        return (
            <div class = "carousel-container">
            <p class = "section_title">{section_title}</p>
                <CarouselChild show = {3}>
                    {article_array}
            
                
    
                </CarouselChild>
            </div>
        );
    } else {
        return (
            <div class = "carousel-container">
                <p class = "section_title">{section_title}</p>
                <CarouselChild show = {2}>
                    {article_array}
    
                
    
                </CarouselChild>
            </div>
        );
    }    
};

export default Carousel;