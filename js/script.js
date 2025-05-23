// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 22 2025
// This file contains the JS functions for index.html

"use strict"

// Setiing the functoin
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // Setting the variables
  const radius = params.get("radius")
  console.log(radius)

  // Calculatosion
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions =
    "<ul>\n<li> Volume is " +
    volume.toFixed(2) + " " + "cm³ " +
    "</li>\n</ul>"

  // Showing the answer
  document.getElementById("volume").innerHTML = dimensions
  "Volume is: " + volume.toFixed(2)
}
