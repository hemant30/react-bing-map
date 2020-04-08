import React from 'react'
import styles from './styles.module.css'
import { BingMapBox, LatLng } from "bing-map-box";

export const ExampleComponent = ({ text }) => {
  let center1 = { latitude: 47.60357, longitude: -122.32945 };
  return (
  <div>

<div className={styles.test}>Platts Map component: {text}</div>
<BingMapBox
    className={styles.mapClass}
    apiKey="<YOUR_API_KEY>"
    center={center1}
></BingMapBox>
  </div>
  )
}
