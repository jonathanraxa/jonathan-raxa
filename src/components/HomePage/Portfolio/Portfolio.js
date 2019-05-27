import React from "react";
import axios from 'axios';


export default function Portfolio({ title, subtitle, image, id }) {
    

    return (
        <div className="col-md-6 col-0-gutter" style={{ padding:0 }}>
            <div className="ot-portfolio-item">
                <figure className="effect-bubba">
                    <img src={image} alt={title} className="img-responsive" />
                    <figcaption>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <a href="#" data-toggle="modal" data-target={"#Modal-" + id}>View more</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}