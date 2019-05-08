import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
	const imageStyle = { borderRadius: '5px' };
	const { alt = '', childImageSharp, image } = imageInfo;

	if (!!image && !!image.childImageSharp) {
		return (
			<Img loading="lazy" style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
		);
	}

	if (childImageSharp) {
		return <Img loading="lazy" style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
	}

	if (!!image && typeof image === 'string') {
		return <img loading="lazy" style={imageStyle} src={image} alt={alt} />;
	}

	return null;
};

PreviewCompatibleImage.propTypes = {
	imageInfo: PropTypes.shape({
		alt: PropTypes.string,
		childImageSharp: PropTypes.object,
		svg: PropTypes.string,
		// image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
		style: PropTypes.object,
	}).isRequired,
};

export default PreviewCompatibleImage;