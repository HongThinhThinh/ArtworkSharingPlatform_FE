import React from 'react'
import "./RequestOrder.scss"
import RequestOrderDetail from '../../component/RequestOrderDetail/RequestOrderDetail'
import RequestOrderList from '../../component/requestOrderList/RequestOrderList'

function RequestOrder() {
  return (
    <div className='requestOrder'>
        <RequestOrderList/>
        <RequestOrderDetail/>
    </div>
  )
}

export default RequestOrder