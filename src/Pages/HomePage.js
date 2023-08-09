import React from 'react'
import TopNavBar from '../Components/TopNavBar'

import banner from '../img/banner.jpg'
export default function HomePage() {
  return (
    <div>
      <TopNavBar />
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
          <div id='chu' style={{width:'400px'}}>
            <h1 style={{fontSize:'30px'}}>Mystics Studio</h1>
            <p>Mystics Studio (Trước đây là Mystics Team, từ ngày 8/8 đã đổi tên) là một nhóm Công Nghệ Thông Tin. Được thành lập vào ngày 26/3/2021 tại trường THCS Trần Phú, Phường 4, Thành Phố Vĩnh Long. Ban đầu nhóm có 2 thành viên và sau một thời gian phát triển nhóm đã có 4 thành viên</p>
          </div>
          <img src={banner} width={400} alt='img'></img>
      </div>

    </div>
  )
}
