import * as React from 'react';
import {
  MarketingCopy,
  OffsetHero,
  SelectionSlice,
  Title,
  About,
} from '../slices';

export const SliceZone = ({ slices }) => {
  const sliceComponents = {
    title: Title,
    offset_hero: OffsetHero,
    marketing_copy: MarketingCopy,
    selection_products: SelectionSlice,
    about: About,
  };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];

    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }

    return null;
  });
};
