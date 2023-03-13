import React from "react";
import "./gallery.css";
import sampleA from "../../assests/samples/sample-2.jpeg";
import sampleB from "../../assests/samples/sample-4.jpeg";
import sampleC from "../../assests/samples/sample-5.jpeg";
import sampleD from "../../assests/samples/sample-6.jpeg";
import sampleE from "../../assests/samples/sample-7.jpeg";
import sampleF from "../../assests/samples/sample-8.jpeg";
import sampleG from "../../assests/samples/sample-9.jpeg";
import sampleH from "../../assests/samples/sample-10.jpeg";
import sampleJ from "../../assests/samples/sample-11.jpeg";
import sampleK from "../../assests/samples/sample-12.jpeg";



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
              <img src={sampleA} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleB} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleC} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleD} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleE} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleF} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleG} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleH} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleJ} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
              <img src={sampleK} loading="lazy" alt="" className="gallery-image" />
              {/* <div className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </div> */}
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
