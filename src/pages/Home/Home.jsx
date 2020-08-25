import React, { useContext, useRef, useEffect } from 'react';
import './Home.scss';
import { ScrollContext } from '../../contexts/ScrollContext';
import { gsap } from 'gsap';

const Home = () => {
  const { scrollPos } = useContext(ScrollContext);
  const revealRefs = useRef([]);
  const pathRef = useRef();
  const svgRef = useRef();
  revealRefs.current = [];

  const drawSvg = (event) => {
    event.stopPropagation();
    gsap.fromTo(
      pathRef.current,
      {
        autoAlpha: 0,
        strokeDashoffset: 1400,
      },
      {
        autoAlpha: 1,
        ease: 'power2.inOut',
        strokeDashoffset: 0,
        duration: 2.5,
      }
    );
  };

  useEffect(() => {
    gsap.from(pathRef.current, {
      autoAlpha: 0,
      duration: 3,
      ease: 'power3.inOut',
      strokeDashoffset: 1400,
      delay: 0.8,
    });
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          top: '20px',
          opacity: 0,
          visibility: 'hidden',
        },
        {
          duration: 1.2,
          opacity: 1,
          visibility: 'visible',
          top: '0px',
          ease: 'power4',
          delay: `${3 + index * 0.3}`,
        }
      );
    });
  }, []);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <div className="Home">
      <div className="main">
        <svg
          onClick={drawSvg}
          className="filter"
          width="200"
          height="228"
          viewBox="0 0 200 228"
          fill="none"
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            maskType="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="228"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M94.0604 1.59144C97.7357 -0.530475 102.264 -0.530484 105.939 1.59143L194.061 52.4682C197.735 54.5901 200 58.5115 200 62.7555V164.509C200 168.753 197.735 172.675 194.061 174.797L106.024 225.623C102.249 227.804 97.5837 227.74 93.8692 225.459L55.7246 202.722H79.482L100.102 214.079L187.041 163.885V63.3789L99.9997 13.1256L12.9586 63.3789V163.808L42.2805 180.045H86.2546C89.3847 179.844 91.4376 179.115 92.4133 177.856C93.5522 176.491 94.112 174.399 94.0928 171.581C94.0742 168.867 93.4876 167.044 92.333 166.112C91.2827 165.179 88.8786 164.727 85.1207 164.752C70.7154 164.851 62.2555 164.23 59.741 162.89C57.3302 161.445 56.0958 156.495 56.038 148.039C55.9988 142.299 58.2107 137.533 62.6737 133.745C60.2577 131.569 58.5175 128.971 57.453 125.951C56.3878 122.826 55.8362 118.498 55.7984 112.966L55.7246 102.162C55.8176 100.491 55.9073 98.3502 55.9939 95.7399C56.1849 93.1287 56.4855 91.2999 56.896 90.2531C57.3057 89.1021 57.8701 87.689 58.5894 86.0137C59.4131 84.3379 60.3969 83.1828 61.5409 82.5487C62.6849 81.9145 64.0894 81.2264 65.7546 80.4843C68.4601 79.2131 73.1531 78.5547 79.8339 78.5091L108.176 78.3154C108.209 83.3259 107.762 86.6695 106.834 88.3461C105.906 90.0227 104.033 90.975 101.216 91.203C103.123 95.2613 104.105 101.414 104.161 109.66L104.209 116.707C104.244 121.821 104.059 125.267 103.654 127.044C103.248 128.822 102.738 130.6 102.124 132.379C101.614 134.157 100.944 135.414 100.114 136.151C99.3885 136.886 98.4029 137.78 97.1574 138.833C96.0163 139.885 94.6643 140.625 93.1013 141.052C88.6191 142.023 84.0816 142.524 79.4886 142.556C75 142.586 72.1836 142.919 71.0397 143.552C69.8957 144.186 69.3295 145.339 69.3408 147.009C69.3523 148.68 69.6204 149.722 70.1451 150.135C71.2999 151.067 76.418 151.501 85.4995 151.44C94.5811 151.377 100.486 152.433 103.215 154.607C105.944 156.781 107.337 162.043 107.394 170.394C107.453 178.848 105.927 184.706 102.817 187.963C99.9934 191.023 94.7446 192.783 86.5061 192.984L86.5012 193.003H84.8814H75.4489C75.4481 193.003 75.4472 193.003 75.4465 193.003C75.1255 193.006 74.8131 193.006 74.5093 193.003H42.0015C39.9883 193.003 38.0081 192.492 36.2469 191.516L6.12421 174.835C2.34512 172.744 0 168.764 0 164.444V62.7554C0 58.5115 2.26406 54.5901 5.93935 52.4682L94.0604 1.59144ZM138.875 163.915V130.638L138.394 60.1016C138.361 55.2998 137.716 52.5377 136.459 51.8156C135.304 50.9884 131.283 50.5983 124.393 50.6454L125.104 154.614C125.136 159.311 125.729 162.073 126.882 162.901C128.023 163.617 132.021 163.954 138.875 163.915ZM89.8232 119.623C89.7533 122.26 89.1992 124.419 88.1609 126.102L88.104 126.482L87.9052 126.491C87.7841 126.666 87.6572 126.835 87.5247 126.998C86.0748 128.678 83.3664 129.532 79.3997 129.559C75.5375 129.585 72.9704 128.194 71.6985 125.384C70.5302 122.469 69.9212 117.358 69.8713 110.051C69.8206 102.64 70.3094 97.7821 71.3375 95.4785C72.3651 93.0704 74.8621 91.8529 78.8288 91.8258C82.8998 91.7979 85.8805 92.6127 87.7709 94.2701C88.4015 94.8921 88.8798 96.1415 89.2058 98.0183C89.5311 99.7907 89.6987 101.408 89.7087 102.869C89.8223 104.225 89.8905 106.574 89.9134 109.914C89.9355 113.151 89.9055 116.386 89.8232 119.623Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              ref={pathRef}
              className="path"
              d="M110.799 86.0952L67.0633 87.1751L64.9036 88.7949L63.8237 90.9546V129.29L76.7823 133.61H94.6003V88.7949H96.2201V135.77L70.303 138.469L63.8237 141.169V156.827L96.2201 158.447L98.3799 160.607L99.4598 163.847V182.745L94.6003 184.904L89.7408 185.984H40.6062L6.58997 166.006V60.718L99.4598 6.72391L193.409 60.718V167.086L100.54 221.62L63.8237 200.563L115.658 196.783V41.8201H131.316V174.106"
              stroke="#00FFEC"
              strokeWidth="15"
            />
          </g>
        </svg>
        <div className="main-text">
          <div className="h1" ref={addToRefs}>
            Hi!
          </div>
          <div className="h3" ref={addToRefs}>
            I'm <span className="q1">george litos</span>
          </div>
          <div className="h4" ref={addToRefs}>
            software engineer &&
          </div>
          <div className="h4" ref={addToRefs}>
            full stack web developer
          </div>
        </div>
      </div>
      <div className="footer" style={{ opacity: scrollPos ? ' 0' : '1' }}>
        <div className="links-wrapper" ref={addToRefs}>
          <a
            target="blank"
            href="https://www.linkedin.com/in/george-litos-215b2918a/"
          >
            <svg
              width="28"
              className="icon"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 0C26.5417 0 27 0.208333 27.375 0.625C27.7917 1 28 1.45833 28 2V26C28 26.5417 27.7917 27 27.375 27.375C27 27.7917 26.5417 28 26 28H2C1.45833 28 0.979167 27.7917 0.5625 27.375C0.1875 27 0 26.5417 0 26V2C0 1.45833 0.1875 1 0.5625 0.625C0.979167 0.208333 1.45833 0 2 0H26ZM8.4375 24H8.5V10.625H4.3125V24H8.4375ZM4.6875 8.125C5.14583 8.58333 5.70833 8.8125 6.375 8.8125C7.04167 8.8125 7.60417 8.58333 8.0625 8.125C8.5625 7.625 8.8125 7.0625 8.8125 6.4375C8.8125 5.77083 8.5625 5.20833 8.0625 4.75C7.60417 4.25 7.04167 4 6.375 4C5.70833 4 5.14583 4.25 4.6875 4.75C4.22917 5.20833 4 5.77083 4 6.4375C4 7.0625 4.22917 7.625 4.6875 8.125ZM24 24V16.6875C24 15.6875 23.9375 14.8333 23.8125 14.125C23.6875 13.4167 23.4583 12.7708 23.125 12.1875C22.7917 11.5625 22.2708 11.1042 21.5625 10.8125C20.8958 10.4792 20.0625 10.3125 19.0625 10.3125C18.1042 10.3125 17.2708 10.5208 16.5625 10.9375C15.8958 11.3542 15.4167 11.8542 15.125 12.4375H15.0625V10.625H11.0625V24H15.25V17.375C15.25 16.3333 15.4167 15.5 15.75 14.875C16.0833 14.25 16.7292 13.9375 17.6875 13.9375C18.1875 13.9375 18.6042 14.0417 18.9375 14.25C19.2708 14.4583 19.4792 14.7708 19.5625 15.1875C19.6875 15.6042 19.7708 15.9792 19.8125 16.3125C19.8542 16.6042 19.875 17 19.875 17.5V24H24Z"
                fill="#C5C6C7"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/giorgoslytos" target="blank">
            <svg
              width="29"
              className="icon"
              height="29"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.375 24.8125C10.375 24.9792 10.2708 25.0625 10.0625 25.0625C9.8125 25.1042 9.6875 25.0208 9.6875 24.8125C9.6875 24.6875 9.79167 24.625 10 24.625C10.25 24.5833 10.375 24.6458 10.375 24.8125ZM8.6875 24.875C8.4375 24.8333 8.33333 24.7292 8.375 24.5625C8.45833 24.3958 8.60417 24.3542 8.8125 24.4375C9.02083 24.4792 9.10417 24.5833 9.0625 24.75C9.02083 24.9167 8.89583 24.9583 8.6875 24.875ZM11.1875 24.4375C11.3958 24.4375 11.5 24.5 11.5 24.625C11.5417 24.75 11.4583 24.8542 11.25 24.9375C11.0417 24.9792 10.9167 24.9167 10.875 24.75C10.875 24.5833 10.9792 24.4792 11.1875 24.4375ZM15.3125 0.5C18.1458 0.5 20.7708 1.16667 23.1875 2.5C25.6042 3.83333 27.5 5.66667 28.875 8C30.2917 10.3333 31 12.9167 31 15.75C31 19.2083 30.0208 22.3125 28.0625 25.0625C26.1458 27.7708 23.625 29.6458 20.5 30.6875C20.1667 30.7708 19.8958 30.7292 19.6875 30.5625C19.5208 30.3958 19.4375 30.1875 19.4375 29.9375C19.4375 29.8958 19.4375 29.2292 19.4375 27.9375C19.4375 26.6042 19.4375 25.5208 19.4375 24.6875C19.4375 23.3542 19.0833 22.3958 18.375 21.8125C19.2917 21.6875 20 21.5833 20.5 21.5C21 21.4167 21.625 21.2292 22.375 20.9375C23.125 20.6458 23.6875 20.2708 24.0625 19.8125C24.4792 19.3542 24.8333 18.7083 25.125 17.875C25.4167 17.0417 25.5625 16.0417 25.5625 14.875C25.5625 14.0833 25.4375 13.4375 25.1875 12.9375C24.9375 12.4375 24.5208 11.875 23.9375 11.25C24.4375 9.95833 24.3958 8.54167 23.8125 7C23.3958 6.875 22.8333 6.95833 22.125 7.25C21.4167 7.5 20.7917 7.79167 20.25 8.125L19.5 8.6875C18.2083 8.3125 16.875 8.125 15.5 8.125C14.1667 8.125 12.875 8.3125 11.625 8.6875C11.4167 8.52083 11.125 8.33333 10.75 8.125C10.375 7.875 9.79167 7.60417 9 7.3125C8.25 6.97917 7.6875 6.875 7.3125 7C6.6875 8.54167 6.625 9.95833 7.125 11.25C6.16667 12.2917 5.6875 13.5 5.6875 14.875C5.6875 16.0417 5.83333 17.0417 6.125 17.875C6.41667 18.7083 6.75 19.3542 7.125 19.8125C7.5 20.2708 8.04167 20.6458 8.75 20.9375C9.45833 21.2292 10.0625 21.4375 10.5625 21.5625C11.1042 21.6458 11.8125 21.7292 12.6875 21.8125C12.1458 22.3125 11.8125 23.0208 11.6875 23.9375C11.2708 24.1042 10.8333 24.2292 10.375 24.3125C9.95833 24.3958 9.41667 24.3125 8.75 24.0625C8.08333 23.8125 7.54167 23.3333 7.125 22.625C6.875 22.1667 6.54167 21.8125 6.125 21.5625C5.75 21.2708 5.41667 21.1042 5.125 21.0625L4.75 21C3.83333 21 3.79167 21.3125 4.625 21.9375C4.91667 22.1042 5.20833 22.375 5.5 22.75C5.79167 23.125 6 23.4583 6.125 23.75L6.375 24.25C6.54167 24.75 6.83333 25.1667 7.25 25.5C7.66667 25.8333 8.125 26.0417 8.625 26.125C9.125 26.2083 9.60417 26.25 10.0625 26.25C10.5208 26.25 10.8958 26.2292 11.1875 26.1875L11.625 26.125C11.625 26.625 11.625 27.375 11.625 28.375C11.6667 29.375 11.6875 29.8958 11.6875 29.9375C11.6875 30.1875 11.5833 30.3958 11.375 30.5625C11.2083 30.7292 10.9583 30.7708 10.625 30.6875C7.45833 29.6458 4.89583 27.7708 2.9375 25.0625C0.979167 22.3125 0 19.2083 0 15.75C0 11.4167 1.45833 7.79167 4.375 4.875C7.33333 1.95833 10.9792 0.5 15.3125 0.5ZM6.0625 22.0625C6.14583 21.9792 6.25 22 6.375 22.125C6.5 22.25 6.52083 22.3542 6.4375 22.4375C6.35417 22.5208 6.25 22.5 6.125 22.375C6 22.25 5.97917 22.1458 6.0625 22.0625ZM5.375 21.5625C5.45833 21.4792 5.5625 21.4583 5.6875 21.5C5.8125 21.5833 5.85417 21.6667 5.8125 21.75C5.77083 21.875 5.6875 21.8958 5.5625 21.8125C5.39583 21.7292 5.33333 21.6458 5.375 21.5625ZM7.4375 23.75C7.52083 23.625 7.64583 23.6458 7.8125 23.8125C7.97917 23.9792 8.02083 24.125 7.9375 24.25C7.8125 24.375 7.66667 24.3542 7.5 24.1875C7.33333 24.0208 7.3125 23.875 7.4375 23.75ZM6.6875 22.875C6.8125 22.75 6.9375 22.7917 7.0625 23C7.1875 23.1667 7.1875 23.2917 7.0625 23.375C6.9375 23.4583 6.8125 23.4167 6.6875 23.25C6.60417 23.0417 6.60417 22.9167 6.6875 22.875Z"
                fill="#C5C6C7"
              ></path>
            </svg>
          </a>
        </div>
        <a className="show-more" href="#about" ref={addToRefs}>
          show more<div className="cta-line"></div>
        </a>
      </div>
    </div>
  );
};

export default Home;
