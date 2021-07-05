import React from 'react';
import Navbar from './Navbar';
import './Hakkımızda.css';
import Footer from './Footer';

function İletisim() {
    return (
        <div>
            <Navbar />
            <div className="iletisimm">
                <h1> İLETİŞİM </h1>
                <p>  Konya Yolu İşçi Blokları Karşısı Beştepe/ANKARA  </p>

                <p>  Tel: 0(312) xxx xx xx </p>

                <p>   Fax:0 (312) xxx xx xx  </p>

                <p>  Gsm: 0 (535) xxx  xx xx  </p>

                <p>   E-Mail:  info@xxxxxx.com  </p>

            </div>

            <Footer />
        </div>
    )
}

export default İletisim
