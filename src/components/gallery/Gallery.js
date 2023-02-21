import React from "react";
import "./gallery.css";
import t1 from "../../assests/gallery/Gallery-10 (1).jpg";
import t2 from "../../assests/gallery/Gallery-12 (1).jpg";
import t3 from "../../assests/gallery/Gallery-13 (1).jpg";
import t4 from "../../assests/gallery/Gallery-14 (1).jpg";

function Gallery() {
  return (
    <div className="section features" id="gallery" aria-label="gallery">
      <h2 className="text-center">Examples of our work</h2>
      {/* <p className="section-text">
            Our portfolio showcases is a selection of our recent projects,
            highlighting the quality and craftsmanship of our work. From
            residential bathroom remodels to commercial office renovations, our
            team has a proven track record of delivering outstanding results.
            Let us help you bring your vision to life.
          </p> */}
      <div className="work-example-container">
        <swiper-container
          id="swiper-container"
          slides-per-view="4"
          space-between="25"
          loop="true"
          pagination="true"
          pagination-dynamic-bullets="true"
          pagination-clickable="true"
          grab-cursor="true"
          autoplay-delay="2500"
          autoplay-disable-on-interation="false"
          speed="1200"
        >
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-8 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t1} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-4 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t2} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-3 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t3} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="picture">
              {/* <a
                    className="example-image-link"
                    href="./assets/images/Gallery-2 (1).jpg"
                    data-lightbox="gallery"
                  > */}
              <img src={t4} loading="lazy" alt="" className="gallery-image" />
              <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              {/* </a> */}
            </div>
          </swiper-slide>
        </swiper-container>
        {/* <div className="gallery-button-container">
          <button id="previous" className="slider-arrow">
            <ion-icon name="arrow-back"></ion-icon>DRAG
          </button>
          <button id="next" className="slider-arrow">
            DRAG<ion-icon name="arrow-forward"></ion-icon>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
