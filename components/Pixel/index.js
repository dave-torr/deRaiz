
import React from 'react'
import Head  from 'next/head'

import FACEBOOK_PIXEL_1 from './Facebook/pixelOne'

const Pixel = ({name}) => {

  return(
    <Head>
      {name === 'FACEBOOK_PIXEL_1' && <FACEBOOK_PIXEL_1 />}
    </Head>
  )
}; export default Pixel