import * as React from 'react';
import {
  MarketingCopy,
  OffsetHero,
  SelectionSlice,
  Title,
  About,
} from '../slices';

/**
 * SliceZone is a component we use to render content on the page the way it is intended to be
 * from the Prismic repo. The content creators will be adding data to the specific Custom Types that were made
 * which will create Documents. The data for the documents will get passed to SliceZone and SliceZone will render
 * them from a map.
 */

export const SliceZone = ({ slices }) => {
  /**
   * Step 3
   * Delete the empty sliceComponents object below and uncomment the sliceComponents object that has Components in
   * them.
   *
   * You should see the component names getting rendered in the landing page now. We'll uncomment a few of those to see what they add to the page
   */
  const sliceComponents = {};

  // const sliceComponents = {
  //   title: Title,
  //   offset_hero: OffsetHero,
  //   marketing_copy: MarketingCopy,
  //   selection_products: SelectionSlice,
  //   about: About,
  // };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];

    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }

    return null;
  });
};
