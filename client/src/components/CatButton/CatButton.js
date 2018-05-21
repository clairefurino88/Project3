import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./CatButton.css"; // Category Button CSS


// Luis: Starter Code
const CatButton = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="catButton">
<a className="navbar-brand" id="catBar">
<div>
    <ul className="navbar-nav" id="categoryButtons">
<li>All</li>
<li>Coding</li>
<li>Education</li>
<li>Education</li>
<li>Fashio</li>
<li>Food</li>
<li>Health</li>
<li>Love</li>
<li>Money</li>
<li>People</li>
<li>Politics</li>
<li>Teens</li>
<li>Transportation</li>
<li>Weather</li>
</ul>
</div>


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="catButton">
            <a className="navbar-brand" id="categoryButtons">
                <div>
                    <ul className="navbar-nav">
                        <li>All</li>
                        <li>Coding</li>
                        <li>Education</li>
                        <li>Education</li>
                        <li>Fashio</li>
                        <li>Food</li>
                        <li>Health</li>
                        <li>Love</li>
                        <li>Money</li>
                        <li>People</li>
                        <li>Politics</li>
                        <li>Teens</li>
                        <li>Transportation</li>
                        <li>Weather</li>
                    </ul>
                </div>

            </a>
        </nav>


    );

};

export default CatButton;