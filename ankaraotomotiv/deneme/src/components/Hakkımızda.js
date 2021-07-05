import React from 'react';
import Navbar from './Navbar';
import "./Hakkımızda.css"
import Footer from './Footer';

function Hakkımızda() {
    return (
        <div>
            <Navbar />
            <div className="Hakkımızda">
                <div className="hkkmız">
                    <h1 className="nolar">HAKKIMIZDA</h1>
                    <p>  Firmamız 1988 yılında kurulmuş olup Ankara 100.yılda siz değerli müşterilerine hizmet vermeye devam etmektedir.

                        Firmamızda her kesime hitap edebilecek araç çeşitliliği ve kalite anlayışıyla ve bununla beraber araç kredisi ve sigorta hizmetleri konularında da siz değerli müşterilerimize hizmet vermeyi sürdürmektedir. </p>

                    <p>  Türk otomotiv sektöründeki gelişmelere paralel olarak ülkemizin her geçen gün artan ihtiyaçlarına cevap vermek üzere,edindiği tecrübelerle gelişmesini sürdürmeye devam etmektedir.

                        AR OTOMOTİV dünyanın önde gelen markalarının en son modellerinden, en çok tercih edilen ikinci el arabalara kadar geniş bir ürün yelpazesine sahip firmamız üstün hizmet anlayışı ve uzman personeliyle müşterilerine her geçen gün yeni seçenekler sunmaya devam etmekte ve satış sonrası verdiği hizmetle müşteri memnuniyetini pekiştirmeyi hedeflemektedir. </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Hakkımızda
