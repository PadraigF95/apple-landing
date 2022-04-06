import React from 'react';

import './Headline.css';

const Headline = ( { title, subtitle, img}) => {
  return (
    <div className='app__headline flex__center'> 
        <div className='app__headline-head'>
            <div className='app__headline-name'>
                    <p className='app__headline-title'>{title}</p>
            </div>
            <div className='app__headline-subheadline'>
                     <p className='app__headline-subtitle'>{subtitle}</p>
            </div>
            <div className='app__headline-info'>
              <a href='#' className='app__headline-span'>Learn more </a>
              <a href='#' className='app__headline-span'>Buy </a> 
            </div>

            <div>
             
            </div>

        </div>

    </div>
  )
}

export default Headline