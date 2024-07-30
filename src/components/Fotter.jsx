import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Fotter = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link, index)=>(
          <a key={index} href={link.href} target='_blank' rel='noopner noreferrer'>
            {link.icon}
          </a>
        ))}
      </div>
      <p className='mt-8 text-center tracking-tighter text-neutral-500'>
        &copy; Permouda. All right reserved.
      </p>
    </div>
  )
}

export default Fotter