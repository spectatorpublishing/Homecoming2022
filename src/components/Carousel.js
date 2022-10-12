import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { articles } from '../data/articles'
import './carousel.css' ;

const CarouselChild = (props) => {
    const {children, show} = props;
// ...
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    // ...
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
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
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
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
};

const Carousel = (props) => {
    // const {children} = props;
    // var article_titles = [];
    // var article_imgs = [];
    // for (var i = 0; i < section.length; i++) {
    //     article_titles.push(section[i].article_title);
    //     article_imgs.push(section[i].image_url);

    // }
    return (


        <CarouselChild show = {3}>

                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />          
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />                      
        </CarouselChild>

    );

    
};

export default Carousel;