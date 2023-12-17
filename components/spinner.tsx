import React from "react";

const Spinner = () => {
  return (
    <svg
      width='57'
      height='57'
      viewBox='0 0 57 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='animate-spin'
    >
      <path
        d='M28.5 57C12.7599 57 0 44.2401 0 28.5C0 12.7599 12.7599 0 28.5 0C44.2401 0 57 12.7599 57 28.5C57 44.2401 44.2401 57 28.5 57ZM28.5 10.5979C18.613 10.5979 10.5979 18.613 10.5979 28.5C10.5979 38.387 18.613 46.4021 28.5 46.4021C38.387 46.4021 46.4021 38.387 46.4021 28.5C46.4021 18.613 38.387 10.5979 28.5 10.5979Z'
        fill='url(#paint0_angular_185_370)'
      />
      <defs>
        <radialGradient
          id='paint0_angular_185_370'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(28.5 28.5) rotate(-180) scale(28.5)'
        >
          <stop offset='0.00611833' />
          <stop offset='0.254243' stop-opacity='0.47' />
          <stop offset='0.521378' stop-color='white' stop-opacity='0.6' />
          <stop offset='0.834046' stop-color='white' />
          <stop offset='1' stop-opacity='0.22' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Spinner;
