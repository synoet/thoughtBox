import React from 'react';

const Emoji = ({name}: {name: string}) => {
    if (name === 'okay'){
    return (
        <svg style = {{display: 'inline-block', verticalAlign: 'middle'}}
          width={30}
          height={46}
          viewBox="0 0 42 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
            fill="#9E84FC"
          />
          <path
            d="M21 1C10 1 1 10 1 21s9 20 20 20 20-9 20-20S32 1 21 1zm0 37C10.9 38 2.8 29.8 2.8 19.8 2.8 9.7 10.9 1.5 21 1.5s18.2 8.2 18.2 18.2C39.2 29.8 31.1 38 21 38z"
            fill="#9274FD"
          />
          <path
            d="M21 6.5c3.314 0 6-.672 6-1.5s-2.686-1.5-6-1.5-6 .672-6 1.5 2.686 1.5 6 1.5z"
            fill="#675E08"
          />
          <path
            opacity={0.15}
            d="M21 46c8.837 0 16-.672 16-1.5S29.837 43 21 43s-16 .672-16 1.5S12.163 46 21 46z"
            fill="#45413C"
          />
          <path
            d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
            stroke="#45413C"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 29c-1.4 1-3.2 1.5-5 1.5-1.8 0-3.6-.6-5-1.5"
            stroke="#45413C"
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
          <path
            d="M33 27.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5zM9 27.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5z"
            fill="#FFAA54"
          />
          <path
            d="M7 22.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8M31.5 22.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8"
            stroke="#45413C"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }else if(name === 'good'){
        return (
            <svg style = {{display: 'inline-block', verticalAlign: 'middle'}}
              width={30}
              height={47}
              viewBox="0 0 42 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
                fill="#9E84FC"
              />
              <path
                d="M21 1C10 1 1 10 1 21s9 20 20 20 20-9 20-20S32 1 21 1zm0 37C10.9 38 2.8 29.8 2.8 19.8 2.8 9.7 10.9 1.5 21 1.5s18.3 8.2 18.3 18.3c0 10-8.2 18.2-18.3 18.2z"
                fill="#9274FD"
              />
              <path
                d="M21 6.5c3.314 0 6-.672 6-1.5s-2.686-1.5-6-1.5-6 .672-6 1.5 2.686 1.5 6 1.5z"
                fill="#675E08"
              />
              <path
                opacity={0.15}
                d="M21 46.4c8.837 0 16-.672 16-1.5s-7.163-1.5-16-1.5-16 .672-16 1.5 7.163 1.5 16 1.5z"
                fill="#45413C"
              />
              <path
                d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 21a1 1 0 100-2 1 1 0 000 2zM31.5 21a1 1 0 100-2 1 1 0 000 2z"
                fill="#45413C"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 27.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5zM9 27.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5z"
                fill="#FFAA54"
              />
              <path
                d="M16 30.5h10"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
    }else{
        return (
            <svg style = {{display: 'inline-block', verticalAlign: 'middle'}}
              width={30}
              height={47}
              viewBox="0 0 42 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
                fill="#9E84FC"
              />
              <path
                d="M21 1C10 1 1 10 1 21s9 20 20 20 20-9 20-20S32 1 21 1zm0 37C10.9 38 2.8 29.8 2.8 19.8 2.8 9.7 10.9 1.5 21 1.5s18.3 8.2 18.3 18.3C39.3 29.9 31.1 38 21 38z"
                fill="#9274FD"
              />
              <path
                d="M21 6.5c3.314 0 6-.672 6-1.5s-2.686-1.5-6-1.5-6 .672-6 1.5 2.686 1.5 6 1.5z"
                fill="#675E08"
              />
              <path
                opacity={0.15}
                d="M21 46.4c8.837 0 16-.672 16-1.5s-7.163-1.5-16-1.5-16 .672-16 1.5 7.163 1.5 16 1.5z"
                fill="#45413C"
              />
              <path
                d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 24.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5zM9 24.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5z"
                fill="#FFAA54"
              />
              <path
                d="M27.4 29.5C25.9 28 23.2 27 20 27c-.9 0-1.7.1-2.5.2"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.7 19.5a1 1 0 100-2 1 1 0 000 2zM25 19.6a1 1 0 100-2 1 1 0 000 2z"
                fill="#45413C"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 15s-3-4.5-6.3-3M30.5 15c-2.1 1-4.7 1.3-7 .8"
                stroke="#45413C"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
    }
}

export default Emoji;