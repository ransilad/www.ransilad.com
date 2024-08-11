import { Tooltip } from 'react-tooltip'

const SocialNetworks = () => {
  return (
    <div className='mt-6 flex'>
      <a
        className='p-2 rounded-lg transition duration-200 hover:bg-zinc-800 hover:text-accent-foreground/80'
        href='https://www.linkedin.com/in/ransilad'
        target='_blank'
        rel='noreferrer'
        aria-label='LinkedIn'
        data-tooltip-id='rrss-tooltip'
        data-tooltip-content='LinkedIn'
      >
        <img src='/icons/linkedIn.svg' alt='LinkedIn' width='28' height='28' />
      </a>
      <a
        className='p-2 rounded-lg transition duration-200 hover:bg-zinc-800 hover:text-accent-foreground/80'
        href='https://github.com/ransilad'
        target='_blank'
        rel='noreferrer'
        aria-label='Github'
        data-tooltip-id='rrss-tooltip'
        data-tooltip-content='Github'
      >
        <img src='/icons/github.svg' alt='Github' width='28' height='28' />
      </a>
      <a
        className='p-2 rounded-lg transition duration-200 hover:bg-zinc-800 hover:text-accent-foreground/80'
        href='https://twitter.com/ransilad'
        target='_blank'
        rel='noreferrer'
        aria-label='X (Twitter)'
        data-tooltip-id='rrss-tooltip'
        data-tooltip-content='X (Twitter)'
      >
        <img src='/icons/twitter.svg' alt='X (Twitter)' width='28' height='28' />
      </a>
      <a
        className='p-2 rounded-lg transition duration-200 hover:bg-zinc-800 hover:text-accent-foreground/80'
        href='https://drive.google.com/file/d/1Q3vHdCzExbZzoXyZ0RRChbyNi9R1pm40/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        aria-label='Curriculum'
        data-tooltip-id='rrss-tooltip'
        data-tooltip-content='Currículum'
      >
        <img src='/icons/curriculum.svg' alt='Currículum' width='28' height='28' />
      </a>
      <Tooltip id='rrss-tooltip' place='bottom' type='dark' />
    </div>
  )
}

export default SocialNetworks
