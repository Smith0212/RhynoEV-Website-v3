import React from 'react'
import Prodland from '../components/prodland/Prodland'
import Spec from '../components/specs/Specs'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Model_L1 from '../components/Model_L1/Model_L1'
import Img from '../assets/pics/black/side.77.png';
import Img1 from '../assets/pics/black/side.63.png';
import Img2 from '../assets/pics/black/side.76.png';
import Img3 from '../assets/pics/yellow/side.68.png';
import Img4 from '../assets/pics/yellow/side.67.png';
import Img5 from '../assets/pics/yellow/side.66.png';
import Img6 from '../assets/pics/red/side.72.png';
import Img7 from '../assets/pics/red/side.70.png';
import Img8 from '../assets/pics/red/side.69.png';
import Img9 from '../assets/pics/blue/side.73.png';
import Img10 from '../assets/pics/blue/side.74.png';
import Img11 from '../assets/pics/blue/side.75.png';
import Img12 from '../assets/bf.png'

import Modelpage_L1 from '../components/Modelpage_L1/Modelpage_L1';

const SE03MAX = () => {
  // const mainImgsByColor = {
  //   defaultColor: Img,
  //   yellowColor:Img3,
  //   redColor:Img6,
  //   blueColor:Img9,
  //   // Add other colors if available
  // };

  // const sideImgsByColor = {
  //   defaultColor: [Img1, Img2, Img],
  //   yellowColor: [Img5, Img4, Img3],
  //   redColor: [Img7, Img8, Img6],
  //   blueColor: [Img10, Img11, Img9],
  //   // Add other colors if available
  // };
  // const productTitle = 'GTX MAX';
  // const description = 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!';
  // const battery = {
  //   capacity: '2.7 KWH',
  //   features: ['LFP WITH 1500 CYCLES', 'ACTIVE BALANCING', 'WATERPROOF (IP67)'],
  //   warranty: '3 YEARS',
  //   chargingTime: '4 HOURS (12 A)'
  // };
  // const motor = {
  //   power: '1500 W',
  //   warranty: '1 YEAR',
  //   range: [
  //     { label: 'MAX RANGE ( @30KM/H )', value: '150 KM' },
  //     { label: 'MAX RANGE ( @45KM/H )', value: '110 KM' },
  //     { label: 'MAX RANGE ( @FULL SPEED )', value: '90 KM' }
  //   ]
  // };
  // const maxSpeed = '55 KM/H';

  return (
    <div>
      {/* <Prodland/> */}
      {/* <Model_L1
        mainImgsByColor={mainImgsByColor}
        sideImgsByColor={sideImgsByColor}
        productTitle={productTitle}
        description={description}
        battery={battery}
        motor={motor}
        maxSpeed={maxSpeed}
      /> */}

      <Modelpage_L1 startState={1} />
      <Spec w="2000W" tops="65" range="120" battery="2.7" imges={Img12} />
    </div>
  )
}

export default SE03MAX
