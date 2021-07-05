import React from 'react';
import Navbar from './Navbar';
import './Hakkımızda.css';
import Footer from './Footer';

function Sigorta() {
    return (
        <div>
            <Navbar />
            <div className="iletisim">

                <h1 className="nolar"> SİGORTA</h1>
                <br></br>
                <p> AR sigorta hizmetleri konusunda uzman kadrosuyla kaliteli, hızlı ve uygun fiyatlı hizmet anlayışı içerisinde müşterilerinin ihtiyaçlarına en uygun alternatifleri sunmaktadır.</p>
                <p> Firmamız müşterilerimizin otomobil alımı konusunda her türlü ihtiyacı karşılanmakla beraber, her türlü sigorta ihtiyaçlarınızı güleryüzlü, anlayışlı bir ortamda eksiksiz karşılayabilmeniz için anlaşmalı sigorta hizmetleri ile müşterilerine hizmet vermektedir.</p>
                <p>  AR Center sektörün öncü ve lider sigorta şirketleri olan axa sigorta , genel sigorta , ergo sigorta ve ray sigorta ile işbirliği yapmaktadır.   </p>

                <div className="nolar">
                    <p>Tel: 0(312) xxx xx xx </p>

                    <p>Fax:0 (312) xxx xx xx  </p>

                    <p>Gsm: 0 (535) xxx  xx xx  </p>

                    <p>E-Mail:  info@xxxxxx.com  </p>
                    <br />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sigorta;