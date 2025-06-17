// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 22 2025
// This file contains the JS functions for index.html

"use strict"

// Script to calculate the volume of a sphere using query string parameter "radius"
window.onload = function () {
  const params = new URLSearchParams(document.location.search)
  const radius = parseFloat(params.get("radius"))

  // Check if radius is valid
  if (!isNaN(radius) && radius > 0) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
    document.getElementById("volume").innerHTML = `Volume is: ${volume.toFixed(2)} cm³`
  } else {
    document.getElementById("volume").innerHTML = "Please provide a valid radius using '?radius=' in the URL."
  }
}
