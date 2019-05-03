import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
<div className="columns is-multiline">
	{gridItems.map(item => (
		<div key={item.text} className="column is-6">
			<section className="section">
				<div className="has-text-centered">
					<div
					style={{
						width: '240px',
						minHeight: '280px',
						display: 'inline-block',
					}}
					>
						{console.log('feature', item)}
						{item.svg ? (<img src={`img/${item.svg.relativePath}`} loading="lazy" />) : 
							(<PreviewCompatibleImage imageInfo={item} style={{minHeight: '205'}} />)
						}
					</div>
				</div>
				<p>{item.text}</p>
			</section>
		</div>
	))}
</div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
	PropTypes.shape({
	  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	  text: PropTypes.string,
	})
  ),
}

export default FeatureGrid
