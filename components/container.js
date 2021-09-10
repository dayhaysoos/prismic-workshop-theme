import { Box } from '@theme-ui/components';
import React from 'react';

function Container({ children }) {
  return (
    <Box sx={{ maxWidth: 960, padding: `0 1.0875rem 1.45rem`, margin: 'auto' }}>
      {children}
    </Box>
  );
}

export default Container;
