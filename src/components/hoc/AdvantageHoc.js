import React from 'react';
import { NavLink } from 'react-router-dom';

const AdvantageHoc = ({ imgUrl, text }) => (
    <div className="col-md-3 text-center">
        <img src={imgUrl} alt={text} title={text} className="adv-img img-add img-fluid" />
        <span className="adv-text last">{text}</span>
    </div>
);
export default AdvantageHoc;