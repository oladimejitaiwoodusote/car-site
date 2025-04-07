import React from "react"
import '../styles/Popular.css'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'


function Popular():React.JSX.Element {
  return (
    <div className="Popular">
        <h1>POPULAR</h1>
        <div className="Popular_grid">
            <div className="Popular_car">
                <img alt='img1' src={img1}/>
                <h1>2021 MERCEDES BENZ S350 D</h1>
                <p>Year - 2021 | KMS - 29000 | Fuel Type - Petrol </p>
            </div>
            <div className="Popular_car">
                <img alt='img2' src={img2}/>
                <h1>2020 BMW 520D LUXURY LINE</h1>
                <p>Year - 2020 | KMS - 25800 | Fuel Type - Petrol</p>
            </div>
            <div className="Popular_car">
                <img alt='img3' src={img3}/>
                <h1>2019 JAGUAR XJL</h1>
                <p>Year - 2021 | KMS - 20600 | Fuel Type - Petrol</p>
            </div>
            <div className="Popular_car">
                <img alt='img4' src={img4}/>
                <h1>2019 LEXUS RX450HL</h1>
                <p>Year - 2019 | KMS - 39600 | Fuel Type - Diesel</p>
            </div>
        </div>
        <p className="see-all">See All</p>
    </div>
  )
}

export default Popular