import React from 'react';

function Title({ slice }) {
  const { title_1, title_2 } = slice.primary;
  return <h1>{`${title_1} ${title_2}`}</h1>;
}

export default Title;
