import React from 'react'
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';

function DetailsButton() {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
        <Icon icon="eva:eye-outline" />
      </IconButton>
  )
}

export default DetailsButton