import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-marginless">
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              
              <div class="media-content">
                <p class="title is-4">{item.heading}</p>
                <p class="subtitle is-6">{item.traningTime}</p>
              </div>
            </div>

            <div class="content">
              {item.text}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      traningTime: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
