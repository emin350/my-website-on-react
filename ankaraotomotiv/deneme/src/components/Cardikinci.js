import React from 'react'
import "./Cards.css"
import m5 from "../İmages/m5.jpg"
import t1 from "../İmages/t1.jpg"
import o3 from "../İmages/o3.jpg"
import b9 from "../İmages/b9.jpg"
import { Link } from "react-router-dom";



function Cardikinci() {

    return (
        <div className="row">

            <div className="col-md-3">
                <Link to={`/mercedes`} className="Link">
                    <div className="card">
                        <img src={m5} alt="" className="card-image" />
                        <div className="card-body">
                            <h4 className="card-title">
                                2020 CLA 200
                            </h4>
                            <p className="card-text">
                                <p> <i className="fas fa-car"></i> MERCEDES </p>
                                <p> <i className="far fa-calendar-alt"></i>  MODEL:2014 </p>
                                <p> <i className="fas fa-road"></i> KM:220 BİN </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>



            <div className="col-md-3">
                <Link to={`/Bmw`} className="Link">
                    <div className="card">
                        <img src={b9} alt=""  className="card-image" />
                        <div className="card-body">
                            <h4 className="card-title">
                                2019  520İ PREMİUM
                            </h4>
                            <p className="card-text">
                                <p> <i className="fas fa-car"></i> BMW </p>
                                <p> <i className="far fa-calendar-alt"></i> MODEL:2019 </p>
                                <p> <i className="fas fa-road"></i> KM:120 BİN </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="col-md-3">
                <Link to={`/Toyota`} className="Link">
                    <div className="card">
                        <img src={t1} alt=""  className="card-image" />
                        <div className="card-body">
                            <h4 className="card-title">
                                Yaris v8
                            </h4>
                            <p className="card-text">
                                <p className="card-text">
                                    <p> <i className="fas fa-car"></i> Toyota </p>
                                    <p> <i className="far fa-calendar-alt"></i> MODEL:2020 </p>
                                    <p> <i className="fas fa-road"></i> KM:180 BİN </p>
                                </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>


            <div className="col-md-3">
                <Link to={`/Opel`} className="Link">
                    <div className="card">
                        <img src={o3} alt="" className="card-image"  />
                        <div className="card-body">
                            <h4 className="card-title">
                                ASTRA DİZEL
                            </h4>
                            <p className="card-text">
                                <p> <i class="fas fa-car"></i> OPEL</p>
                                <p> <i className="far fa-calendar-alt"></i> MODEL:2017 </p>
                                <p> <i className="fas fa-road"></i> KM:180 BİN </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
     </div>

    )
}

export default Cardikinci
