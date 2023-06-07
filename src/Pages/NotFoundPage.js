import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import { Result, Button } from 'antd'
export default function NotFoundPage() {
    return (
    <div>
        <TopNavBar />
        <Result 
        title="Oh! 404 NotFound"
        subTitle="Có vẻ trang mà bạn đang tìm đã bi xóa hoặc không tồn tại"
        extra={<Button type="primary" href='/'>Go Home</Button>}
        />
    </div>
  )
}
