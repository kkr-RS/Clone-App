import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/April20/Gateway/DesktopHero_HFC_1500x600_Recharge1._CB414105779_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Fire TV Stick 4K with Alexa Voice Remote | Stream in 4K resolution"
          price={14.86}
          rating={4}
          image="https://m.media-amazon.com/images/I/31Ymvn4fsqL.jpg"
        />
        <Product
          id="3435787943"
          title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (White)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Q8CvwNAML.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="748370950"
          title="Introducing Echo Show 8 – Smart display with Alexa - 8 HD screen with stereo sound – Black"
          price={20}
          rating={4}
          image="https://m.media-amazon.com/images/I/41-qa+YzqwL.jpg"
        />
        <Product
          id="89804308"
          title="Kindle Paperwhite (10th gen) - with Built-in Light, Waterproof, 8 GB, WiFi"
          price={16.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/41aTw6F6DDL.jpg"
        />
        <Product
          id="64827927"
          title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
          price={12.36}
          rating={5}
          image="https://m.media-amazon.com/images/I/41yqA4Wyu1L.jpg"
        />
      </div>
      <div className="product__row">
        <Product
          id="574818781"
          title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)"
          price={17.78}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91LzCxOO3fL._SX450_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
