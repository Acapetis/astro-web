import React from 'react'

function News() {
  return (
    <div>
        <div className="image-section">
        {/* Embedding Instagram post using iframe */}
        <iframe
          src="https://www.instagram.com/p/C1mSEoFJcsf/embed/"
          width="500"
          height="600"
          title="Instagram Post"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default News