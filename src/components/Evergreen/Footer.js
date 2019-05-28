import React from "react";
import { PERSONAL_LINKS } from "../Assets/Assets";

export default function Footer({ dark, id }) {
    return (
        <div className={"Footer section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <footer style={{ backgroundColor: 'inherit' }}>
                    <div className="container text-center">
                        <a className="paddLeft2em" href={PERSONAL_LINKS.github} target="_blank"><i className="fab fa-github fa-2x" /></a>&nbsp;&nbsp;
                        <a className="paddLeft2em" href={PERSONAL_LINKS.linkedin} target="_blank"><i className="fab fa-linkedin fa-2x" /></a>&nbsp;&nbsp;
                        <a className="paddLeft2em" href={PERSONAL_LINKS.twitter} target="_blank"><i className="fab fa-twitter fa-2x" /></a> &nbsp;&nbsp;
                        <a className="paddLeft2em" href={PERSONAL_LINKS.facebook} target="_blank"><i className="fab fa-facebook-f fa-2x" /></a>&nbsp;&nbsp;
                        <a className="paddLeft2em" href={PERSONAL_LINKS.googleplus} target="_blank"><i className="fab fa-google-plus fa-2x" /></a>
                    </div>
                </footer>

            </div>
        </div>
    );
}