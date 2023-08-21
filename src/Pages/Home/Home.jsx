import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TruestedBy from "../../components/truestedBy/TruestedBy";
import Slide from "../../components/slide/Slide.jsx";
import { cards, projects } from "../../data.js";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Featured />
      <TruestedBy />
      <div className="heading">
        <h1>Popular Services</h1>
      </div>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard card={card} key={card.id} />
        ))}
      </Slide>
      <div className="gigcats">
        <div className="catitem" onClick={() => navigate(`/gigs?cat=design`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png"
            alt=""
          />
          <span className="desc">Add talent to AI</span>
          <span className="title">AI Design</span>
        </div>

        <div className="catitem" onClick={() => navigate("/gigs?cat=logo")}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png"
            alt=""
          />
          <span className="desc">Buils your brand</span>
          <span className="title">Logo Design</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=ui`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
            alt=""
          />
          <span className="desc">Customize your site</span>
          <span className="title">WordPress</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=message`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png"
            alt=""
          />
          <span className="desc">Share your message</span>
          <span className="title">Voice Over</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=video`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png"
            alt="book img"
          />
          <span className="desc">Engage your audience</span>
          <span className="title">Video Explainer</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=social`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png"
            alt="book img"
          />
          <span className="desc">Reach more Customers</span>
          <span className="title">Social Media</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=seo`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png"
            alt="book img"
          />
          <span className="desc">Unlock growth online</span>
          <span className="title">SEO</span>
        </div>

        <div
          className="catitem"
          onClick={() => navigate(`/gigs?cat=illustrate`)}
        >
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161236/illustration-2x.png"
            alt="book img"
          />
          <span className="desc">Color your dreams</span>
          <span className="title">IIlustration</span>
        </div>

        <div className="catitem" onClick={() => navigate(`/gigs?cat=design`)}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png"
            alt="book img"
          />
          <span className="desc">Go global</span>
          <span className="title">Translation</span>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./img/video1.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>JobQuest business.</h1>
            <h1>A solution built for business</h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Talent matching
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Business payment solutions
            </div>
            <button>Explore JobQuest Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              controls
            ></img>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1>Inspiring work made on JobQuest</h1>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
      <div className="projectCard">
        <div className="project">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg"
            alt=""
          />
          <div className="userDesc">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg"
              alt=""
            />
            <div className="detail">
              <span className="cat">Logo Design</span>
              <span className="username">by Mukesh</span>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
            alt=""
          />
          <div className="userDesc">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg"
              alt=""
            />
            <div className="detail">
              <span className="cat">Book Design</span>
              <span className="username">by Sujit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
