import React from "react";
import characters from "../characters";
import assets from '../assets/images/Naruto.png'
import card from '../styles/card.css';

export default function Card({characters}) {


    return (
        <>
            <div className="cardSection">
                <div className="card-tilt-container">
                    <div className="cardFace-tilt-box-wrap">
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                         <span className="t_over"></span>
                        <div className="characterHolder-tilt" style={{backgroundImage: '../assets/images/Naruto.png'}}><p>image</p></div>
                        {/* <div className="characterHolder-tilt"><img src="./assets/images/naruto.png" alt="Naruto" /></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}