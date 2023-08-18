import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NewRequest from "../../utils/NewRequest.js";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { pathname } = useLocation();

  const handleLogout = async () => {
    try {
      await NewRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="text">JobQuest</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>JobQuest Business</span>
          <span>Explore</span>
          <span>English</span>
          <Link to={"/signin"} className="link">
            {!currentUser && <span>Sign in</span>}
          </Link>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <button onClick={() => navigate("/register")}>Join</button>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser?.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <>
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/mygigs" className="link">
                          Gigs
                        </Link>
                        <Link to="/addgig" className="link">
                          Add new Gig
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="link">
                      Orders
                    </Link>
                    <Link to="/messages" className="link">
                      Messages
                    </Link>
                    {!currentUser?.isSeller && (
                      <Link className="link">Become a Seller</Link>
                    )}
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          {" "}
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
      <hr />
    </div>
  );
};

export default Navbar;
