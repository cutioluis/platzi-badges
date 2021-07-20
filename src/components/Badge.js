import React from "react";
import LogoConf from "../assets/static/logo-conf.png";
import TwitterIcon from "../assets/static/twiter.png";

import User from "../assets/static/user.png";
import "../styles/Badge.css";

const Badge = (props) => {
  return (
    <div className="platzi-badge">
      <div className="badge__conf">
        <img
          className="badge__cof-img"
          src={LogoConf}
          alt="Platzi Conf Colombia"
        />
      </div>
      <div className="badge__rigth">
        <img className="badge__cof-img" src={User} alt="" />
        <div>
          <h3 className="badge__rigth-name">
            {props.name}
          </h3>
          <span className="badge__rigth-profesion">Frontend Engineer</span>
          <img
            className="badge__rigth-twitter"
            src={TwitterIcon}
            alt="Twitter "
          />
        </div> 
      </div>
      <div className="badge__mid">
        <p className="badge__mid-presentation">
          Hoy hablaremos soebre react el framework mas popular de todo el mundo
          para Desarrollo Web
        </p>
          <p className="badge__mid-conf">#platziconf</p>
      </div>
    </div>
  );
};

export default Badge;
