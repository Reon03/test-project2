import React from 'react';
import './styles.scss'
import Header from '../../components/Header';
import ReactOwlCarousel from 'react-owl-carousel';
import * as ReactDOM from 'react-dom/client';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import images from '../Home/images/images1.png'
import logo from '../Home/images/Vector.svg'



const Home: React.FC = () => {
  return (
    <div>
      <Header />

    </div>
  );
}


function Car() {
  return (<div className="carousel-wrapper">
    <ReactOwlCarousel
      items={1}
      className='owl-theme'
      autoPlay
      nav
      dots
      loop><div className="slide">
      <div className="content">
        <div className="text-container">
          <div className="text-content"> 
            <span className='span'>WELCOME TO GREENSHOP</span>
            <h1>{"LET'S MAKE A BETTER PLANET"}</h1>
            <p>{"We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!"}</p>
            <a href="#" className="btn">SHOP NOW</a>
          </div>
          <div className="images">
            <img src={images} alt={`Imags`} />
          </div>
        </div>
      </div>
    </div> <div className="slide">
      <div className="content">
        <div className="text-container"> 
          <div className="text-content"> 
            <span className='span'>WELCOME TO GREENSHOP</span>
            <h1>{"LET'S MAKE A BETTER PLANET"}</h1>
            <p>{"We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!"}</p>
            <a href="#" className="btn">SHOP NOW</a>
          </div>
          <div className="images">
            <img src={images} alt={`Imags`} />
          </div>
        </div>
      </div>
    </div> <div className="slide">
      <div className="content">
        <div className="text-container"> 
          <div className="text-content"> 
            <span className='span'>WELCOME TO GREENSHOP</span>
            <h1>{"LET'S MAKE A BETTER PLANET"}</h1>
            <p>{"We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!"}</p>
            <a href="#" className="btn">SHOP NOW</a>
          </div>
          <div className="images">
            <img src={images} alt={`Imags`} />
          </div>
        </div>
      </div>
    </div></ReactOwlCarousel> </div>)
}


const app = ReactDOM.createRoot(document.getElementById("carousel")!)
app.render(<Car></Car>)
export default Home;