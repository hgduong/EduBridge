import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/NotFound.css'

const NotFound = () => {
  return (
    <div className="nf-root">
      <div className="nf-scene">
        <div className="seal">
          <div className="seal-body">
            <div className="seal-eye left" />
            <div className="seal-eye right" />
            <div className="seal-mouth" />
            <div className="seal-fin left-fin" />
            <div className="seal-fin right-fin" />
            <div className="seal-grad" />
          </div>
          <div className="seal-cap" />
        </div>
        <div className="nf-text">
          <h1>404</h1>
          <p>Không tìm thấy trang. Hải cẩu lạc đường một chút.</p>
          <Link to="/" className="nf-button">Quay về trang chủ</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
