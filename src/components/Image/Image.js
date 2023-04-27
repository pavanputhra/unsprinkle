import React from 'react';

function genAvifSrcSet(src) {
  return `
    ${src} 1x,
    ${src.replace('.jpg', '@2x.avif')} 2x,
    ${src.replace('.jpg', '@3x.avif')} 3x
  `;
}

function genJpgSrcSet(src) {
  return `
    ${src} 1x,
    ${src.replace('.jpg', '@2x.jpg')} 2x,
    ${src.replace('.jpg', '@3x.jpg')} 3x
  `;
}
const Image = ({ src, ...rest }) => {
  return (
      <picture>
          <source
              type="image/avif"
              srcSet={genAvifSrcSet(src)}
          />
          <img {...rest}
              src={src}
              srcSet={genJpgSrcSet(src)}
          />
      </picture>
  );
};
export default Image;
