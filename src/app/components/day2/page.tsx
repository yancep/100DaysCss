"use client"
import React, { useState } from 'react';
import "./menuIcon.scss";

export default function MenuIcon() {
  const [isActive, setIsActive] = useState(false);

  function changeClass() {
    setIsActive(current => !current);
  }

  return (
    <div className="frame">
      <div className="center">
   
        <div className={`menu ${isActive ? 'active' : ''}`} onClick={changeClass}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    </div>
  );
}
