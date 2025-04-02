import React from "react"
import '../styles/Popular.css'

function Popular():React.JSX.Element {
  return (
    <div className="Popular">
        <h1>POPULAR</h1>
        <div className="Popular_grid">
            <div className="Popular_car">
                <img alt='img1' src="/images/img1.jpeg"/>
                <h1>2021 MERCEDES BENZ S350 D</h1>
                <p>Year - 2021 | KMS - 29000 | Fuel Type - Petrol </p>
            </div>
            <div className="Popular_car">
                <img alt='img2' src="/images/img2.jpeg"/>
                <h1>2020 BMW 520D LUXURY LINE</h1>
                <p>Year - 2020 | KMS - 25800 | Fuel Type - Petrol</p>
            </div>
            <div className="Popular_car">
                <img alt='img3' src="/images/img3.jpeg"/>
                <h1>2019 JAGUAR XJL</h1>
                <p>Year - 2021 | KMS - 20600 | Fuel Type - Petrol</p>
            </div>
            <div className="Popular_car">
                <img alt='img4' src="/images/img4.jpeg"/>
                <h1>2019 LEXUS RX450HL</h1>
                <p>Year - 2019 | KMS - 39600 | Fuel Type - Diesel</p>
            </div>
        </div>

    </div>
  )
}

export default Popular