import React from 'react';
import "./Header.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import o4 from "../İmages/o4.jpg";
import b8 from "../İmages/b8.jpg";
import t3 from "../İmages/t3.jpg";


function Header() {
    return (
        <div className="Header">
            <Carousel>
                <Carousel.Item>
                    <img src={o4} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b8} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={t3} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header
