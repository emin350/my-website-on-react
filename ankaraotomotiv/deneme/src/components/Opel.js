import React from 'react'
import Navbar from '../components/Navbar';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import o1 from "../İmages/o1.jpg";
import o2 from "../İmages/o2.jpg";
import o3 from "../İmages/o3.jpg";
import o4 from "../İmages/o4.jpg";
import "./Header.css"
import Footer from './Footer';

function Opel() {
    return (
        <div className="Header">
            <Navbar />
            <Carousel>
                <Carousel.Item>
                    <img src={o1} className="img-fluid  d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={o2} className="img-fluid  d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={o3} className="img-fluid  d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={o4} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

            </Carousel>
            <p>

                <div className="first"> <b> 2017 Opel ASTRA URBAN PLUS-GECE PAKET-KÖR NOKTA </b> </div>

                <div> <b>ARACIMIZ BOYASIZ DEĞİŞENSİZ HASAR KAYITSIZ HATASIZ.</b>  </div>

                <div style={{ color: "red" }}> <b> ÖZELLİKLERİ </b> </div>

                <div>   GECE PAKETİ,KÖR NOKTA ASİSTANI,PANAROMİK CAM TAVAN </div>

                <div>   ÖZEL DERİ KONFOR KOLTUKLAR​</div>

                <div>   Bİ-XENON FARLAR UZUN KISA LED FARLAR</div>

                <div>   ECO-SPORT-COMFORT-İNDİVUAL SÜRÜŞ SEÇENEKLERİ.</div>

                <div>   GÜNDÜZ LEDLERİ VE GECE KARŞILAMASI</div>

                <div>   GERİ GÖRÜŞ KAMERASI</div>

                <div>   START STOP</div>

                <div>   ELEKTRİKLİ ISITMALI AYNALAR</div>

                <div>   OTOMATİK KATLANIR AYNA</div>

                <div>   ARKA BARDAKLIKLI KOL DAYAMA</div>

                <div>   YORGUNLUK TESPİT</div>

                <div>    ASSYST PLUS</div>
            </p>

            <Footer />
        </div>
    )
}

export default Opel;
