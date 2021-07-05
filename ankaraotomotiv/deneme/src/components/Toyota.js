import React from 'react'
import Navbar from '../components/Navbar';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import t2 from "../İmages/t2.jpg";
import t3 from "../İmages/t3.jpg";
import "./Header.css"
import Footer from './Footer';

function Toyota() {
    return (
        <div className="Header">
            <Navbar />
            <Carousel>

                <Carousel.Item>
                    <img src={t2} className="img-fluid  d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={t3} className="img-fluid  d-block mx-auto" alt="" />
                </Carousel.Item>

            </Carousel>

            <p>
                <div className="first"> <b> 2014 TOYOTA URBAN PLUS-GECE PAKET-KÖR NOKTA </b> </div>

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

export default Toyota;
