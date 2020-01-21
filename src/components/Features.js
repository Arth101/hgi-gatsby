import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <div className="card">
          <div className="card-image">
            <figure className="image is-marginless">
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              
              <div className="media-content">
                <p className="title is-4">{item.heading}</p>
                <p className="subtitle is-6">{item.traning}</p>
              </div>
            </div>

            <div className="content">
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
      traning: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
