import React from "react";
import { CardStudent } from "../students/CardStudent/studentCad";
import { Container } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import "../home/home.scss";

export const Home = () => {
    return (
        <>
            <div className="Card-Student">
                <div className="cardTitle">
                    <br />
                    <h1>STUDENTS</h1>
                </div>
                <div className="students">
                    <CardStudent data />

                </div>
            </div >

        </>
    )

}