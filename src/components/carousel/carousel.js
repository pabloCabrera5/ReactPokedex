import React, { useEffect } from 'react';
import './carousel.css'

export default function Carousel({ images, totalImages }) {

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    let slideIndex = 1;
    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        //var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        //captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);


    return (
        <div className="container">

            {
                images.map(img => (
                    <div key={img.id} className={img.outerClassname}>
                        <div className={img.innerClassname}>{img.id} / {totalImages || images.length}</div>
                        <img src={img.src} style={img.style} alt={img.src} />
                    </div>
                ))
            }

            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

            {/*<div className="caption-container">
                    <p id="caption"></p>
                </div>*/}

            <div className="row">

                {
                    images.map(img => (
                        <div key={img.id} className={img.columnClassname}>
                            <img className={img.imgClassname} src={img.src} style={img.style} onClick={() => currentSlide(img.id)} alt={img.src} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
