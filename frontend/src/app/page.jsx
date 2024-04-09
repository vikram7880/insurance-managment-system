import React from 'react'
import Navbar from './(main)/navbar'
import Footer from './(main)/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Flowbite is out! See what's new
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Watch video
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  className="h-8"
                  viewBox="0 0 132 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z"
                    fill="white"
                  />
                  <path
                    d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z"
                    fill="currentColor"
                  />
                  <path
                    d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z"
                    fill="currentColor"
                  />
                  <path
                    d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z"
                    fill="currentColor"
                  />
                  <path
                    d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z"
                    fill="currentColor"
                  />
                  <path
                    d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z"
                    fill="currentColor"
                  />
                  <path
                    d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  className="h-11"
                  viewBox="0 0 208 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.7714 20.729C42.7714 31.9343 33.6867 41.019 22.4814 41.019C11.2747 41.019 2.19141 31.9343 2.19141 20.729C2.19141 9.52228 11.2754 0.438965 22.4814 0.438965C33.6867 0.438965 42.7714 9.52297 42.7714 20.729Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.1775 21.3312H20.1389V15.9959H25.1775C25.5278 15.9959 25.8747 16.0649 26.1983 16.1989C26.522 16.333 26.8161 16.5295 27.0638 16.7772C27.3115 17.0249 27.508 17.319 27.6421 17.6427C27.7761 17.9663 27.8451 18.3132 27.8451 18.6635C27.8451 19.0139 27.7761 19.3608 27.6421 19.6844C27.508 20.0081 27.3115 20.3021 27.0638 20.5499C26.8161 20.7976 26.522 20.9941 26.1983 21.1281C25.8747 21.2622 25.5278 21.3312 25.1775 21.3312ZM25.1775 12.439H16.582V30.2234H20.1389V24.8881H25.1775C28.6151 24.8881 31.402 22.1012 31.402 18.6635C31.402 15.2258 28.6151 12.439 25.1775 12.439Z"
                    fill="white"
                  />
                  <path
                    d="M74.9361 17.4611C74.9361 16.1521 73.9305 15.3588 72.6239 15.3588H69.1216V19.5389H72.6248C73.9313 19.5389 74.9369 18.7457 74.9369 17.4611H74.9361ZM65.8047 28.2977V12.439H73.0901C76.4778 12.439 78.3213 14.7283 78.3213 17.4611C78.3213 20.1702 76.4542 22.4588 73.0901 22.4588H69.1216V28.2977H65.8055H65.8047ZM80.3406 28.2977V16.7362H83.3044V18.2543C84.122 17.2731 85.501 16.4563 86.9027 16.4563V19.3518C86.6912 19.3054 86.4349 19.2826 86.0851 19.2826C85.1039 19.2826 83.7949 19.8424 83.3044 20.5681V28.2977H80.3397H80.3406ZM96.8802 22.3652C96.8802 20.6136 95.8503 19.0955 93.9823 19.0955C92.1364 19.0955 91.1105 20.6136 91.1105 22.366C91.1105 24.1404 92.1364 25.6585 93.9823 25.6585C95.8503 25.6585 96.8794 24.1404 96.8794 22.3652H96.8802ZM88.0263 22.3652C88.0263 19.1663 90.2684 16.4563 93.9823 16.4563C97.7198 16.4563 99.962 19.1655 99.962 22.3652C99.962 25.5649 97.7198 28.2977 93.9823 28.2977C90.2684 28.2977 88.0263 25.5649 88.0263 22.3652ZM109.943 24.3739V20.3801C109.452 19.6316 108.378 19.0955 107.396 19.0955C105.693 19.0955 104.524 20.4265 104.524 22.366C104.524 24.3267 105.693 25.6585 107.396 25.6585C108.378 25.6585 109.452 25.1215 109.943 24.3731V24.3739ZM109.943 28.2977V26.5697C109.054 27.6899 107.841 28.2977 106.462 28.2977C103.637 28.2977 101.465 26.1499 101.465 22.3652C101.465 18.6993 103.59 16.4563 106.462 16.4563C107.793 16.4563 109.054 17.0177 109.943 18.1843V12.439H112.932V28.2977H109.943ZM123.497 28.2977V26.5925C122.727 27.4337 121.372 28.2977 119.526 28.2977C117.052 28.2977 115.884 26.9431 115.884 24.7473V16.7362H118.849V23.5798C118.849 25.1451 119.666 25.6585 120.927 25.6585C122.071 25.6585 122.983 25.028 123.497 24.3731V16.7362H126.463V28.2977H123.497ZM128.69 22.3652C128.69 18.9092 131.212 16.4563 134.67 16.4563C136.982 16.4563 138.383 17.4611 139.131 18.4886L137.191 20.3093C136.655 19.5153 135.838 19.0955 134.81 19.0955C133.011 19.0955 131.751 20.4037 131.751 22.366C131.751 24.3267 133.011 25.6585 134.81 25.6585C135.838 25.6585 136.655 25.1915 137.191 24.4203L139.131 26.2426C138.383 27.2702 136.982 28.2977 134.67 28.2977C131.212 28.2977 128.69 25.8456 128.69 22.3652ZM141.681 25.1915V19.329H139.813V16.7362H141.681V13.6528H144.648V16.7362H146.935V19.329H144.648V24.3975C144.648 25.1215 145.02 25.6585 145.675 25.6585C146.118 25.6585 146.541 25.495 146.702 25.3087L147.334 27.5728C146.891 27.9714 146.096 28.2977 144.857 28.2977C142.779 28.2977 141.681 27.2238 141.681 25.1915ZM165.935 28.2977V21.454H158.577V28.2977H155.263V12.439H158.577V18.5577H165.935V12.4398H169.275V28.2977H165.935ZM179.889 28.2977V26.5925C179.119 27.4337 177.764 28.2977 175.919 28.2977C173.443 28.2977 172.276 26.9431 172.276 24.7473V16.7362H175.241V23.5798C175.241 25.1451 176.058 25.6585 177.32 25.6585C178.464 25.6585 179.376 25.028 179.889 24.3731V16.7362H182.856V28.2977H179.889ZM193.417 28.2977V21.1986C193.417 19.6333 192.602 19.0963 191.339 19.0963C190.172 19.0963 189.285 19.7504 188.77 20.4045V28.2985H185.806V16.7362H188.77V18.1843C189.495 17.3439 190.896 16.4563 192.718 16.4563C195.217 16.4563 196.408 17.8573 196.408 20.0523V28.2977H193.418H193.417ZM199.942 25.1915V19.329H198.076V16.7362H199.943V13.6528H202.91V16.7362H205.198V19.329H202.91V24.3975C202.91 25.1215 203.282 25.6585 203.936 25.6585C204.38 25.6585 204.802 25.495 204.965 25.3087L205.595 27.5728C205.152 27.9714 204.356 28.2977 203.119 28.2977C201.04 28.2977 199.943 27.2238 199.943 25.1915"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  className="h-11"
                  viewBox="0 0 120 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z"
                    fill="currentColor"
                  />
                  <path
                    d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z"
                    fill="white"
                  />
                  <path
                    d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z"
                    fill="currentColor"
                  />
                  <path
                    d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              {/* Grid */}
              <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
                <div className="col-span-3">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
                <div className="col-span-5">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Collaborative tools to design user experience
                  </h2>
                  <p className="text-gray-500">
                    Use our tools to explore your ideas and make your vision come
                    true. Then share your work easily.
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Less routine</span> – more
                      creativity
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Hundreds of thousands saved
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Scale budgets <span className="font-bold">efficiently</span>
                    </span>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>



      <>
        {/* FAQ */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Your questions, answered
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
          {/* End Title */}
          <div className="max-w-2xl mx-auto">
            {/* Accordion */}
            <div className="hs-accordion-group">
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  Can I cancel at anytime?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    Yes, you can cancel anytime no questions are asked while you
                    cancel but we would highly appreciate if you will give us some
                    feedback.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  My team has credits. How do we use them?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    Once your team signs up for a subscription plan. This is where we
                    sit down, grab a cup of coffee and dial in the details.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  How does Preline's pricing work?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    Our subscriptions are tiered. Understanding the task at hand and
                    ironing out the wrinkles is key.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                id="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                >
                  How secure is Preline?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    Protecting the data you trust to Preline is our first priority.
                    This part is really crucial in keeping the project in line to
                    completion.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                id="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                >
                  How do I get access to a theme I purchased?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    If you lose the link for a theme you purchased, don't panic! We've
                    got you covered. You can login to your account, tap your avatar in
                    the upper right corner, and tap Purchases. If you didn't create a
                    login or can't remember the information, you can use our handy
                    Redownload page, just remember to use the same email you
                    originally made your purchases with.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                id="hs-basic-with-title-and-arrow-stretched-heading-six"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                >
                  Upgrade License Type
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    There may be times when you need to upgrade your license from the
                    original type you purchased and we have a solution that ensures
                    you can apply your original purchase cost to the new license
                    purchase.
                  </p>
                </div>
              </div>
            </div>
            {/* End Accordion */}
          </div>
        </div>
        {/* End FAQ */}
      </>

      <>
        {/* Hire Us */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                Hire us
              </h1>
              <p className="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
                We help brands and platforms turn big ideas into beautiful digital
                products and experiences.
              </p>
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  What can I expect?
                </h2>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Industry-leading design
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Developer community support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Simple and affordable
                    </span>
                  </li>
                </ul>
              </div>
              {/* Brands */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Enjoyed by:
                </h2>
                <div className="mt-4 flex gap-x-8">
                  <svg
                    className="w-20 h-auto"
                    width={106}
                    height={36}
                    viewBox="0 0 106 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494249 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z"
                        fill="currentColor"
                        className="fill-gray-500"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="105.474"
                          height={35}
                          fill="currentColor"
                          className="fill-gray-500"
                          transform="translate(0 0.26355)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="w-20 h-auto"
                    width={140}
                    height={47}
                    viewBox="0 0 140 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                  </svg>
                  <svg
                    className="w-20 h-auto"
                    width={200}
                    height={67}
                    viewBox="0 0 200 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.6108 11.7537C45.9082 11.7537 47.1058 11.3545 48.0041 10.5561C48.9023 9.75767 49.4013 8.65988 49.4013 7.46227C49.4013 6.16487 48.9023 5.16686 48.0041 4.26866C47.1058 3.47026 46.008 3.07104 44.6108 3.07104C43.3134 3.07104 42.2156 3.47026 41.3174 4.36846C40.4192 5.26666 40.02 6.26467 40.02 7.46227C40.02 8.65988 40.4192 9.65787 41.3174 10.5561C42.2156 11.3545 43.3134 11.7537 44.6108 11.7537Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M73.3534 0.176758V20.6358H73.1538C72.8544 20.1368 72.3554 19.6378 71.8564 19.1388C71.2576 18.6398 70.559 18.1408 69.7606 17.7416C68.9622 17.3424 68.064 16.9432 66.9662 16.6438C65.8684 16.3444 64.6708 16.2446 63.3734 16.2446C61.2776 16.2446 59.3814 16.6438 57.6847 17.4422C55.9881 18.2406 54.4911 19.3384 53.1937 20.7356C51.9961 22.1328 50.9981 23.7297 50.2995 25.6259C49.6009 27.5221 49.3015 29.5181 49.3015 31.6139C49.3015 33.7097 49.6009 35.8055 50.2995 37.6019C50.8983 39.4981 51.8963 41.0949 53.1937 42.4921C54.4911 43.8893 55.9881 44.9871 57.6847 45.7855C59.4812 46.5839 61.4772 46.9831 63.7726 46.9831C65.8684 46.9831 67.7646 46.5839 69.561 45.7855C71.3574 44.9871 72.7546 43.6897 73.8524 41.8933H73.9522V46.0849H80.8384V0.176758H73.3534ZM73.054 34.8075C72.6548 35.9053 72.056 36.8035 71.3574 37.6019C70.559 38.4003 69.6608 39.0989 68.6628 39.4981C67.565 39.9971 66.3674 40.1967 65.07 40.1967C63.7726 40.1967 62.575 39.9971 61.4772 39.4981C60.3794 38.9991 59.4812 38.4003 58.7826 37.6019C57.9841 36.8035 57.4851 35.9053 57.0859 34.8075C56.6867 33.7097 56.4871 32.7117 56.4871 31.5141C56.4871 30.4163 56.6867 29.3185 57.0859 28.2207C57.4851 27.1229 58.0839 26.2247 58.7826 25.4263C59.581 24.6279 60.4792 23.9293 61.4772 23.5301C62.575 23.031 63.7726 22.8314 65.07 22.8314C66.3674 22.8314 67.565 23.031 68.6628 23.5301C69.7606 24.0291 70.6588 24.6279 71.3574 25.4263C72.1558 26.2247 72.6548 27.1229 73.054 28.2207C73.4532 29.3185 73.6528 30.4163 73.6528 31.5141C73.6528 32.6119 73.4532 33.7097 73.054 34.8075Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M130.739 19.9373L123.553 27.1229V40.3963H123.353C122.954 39.8973 122.555 39.3983 121.956 38.8993C121.357 38.4003 120.659 37.9013 119.86 37.5021C119.062 37.1029 118.164 36.7037 117.066 36.4043C116.367 36.2047 115.469 36.1049 114.571 36.0051L99.501 51.2746C99.501 53.3704 99.8004 55.3664 100.499 57.2626C101.098 59.1588 102.096 60.7556 103.393 62.1528C104.691 63.55 106.188 64.6478 107.884 65.3464C109.681 66.1448 111.677 66.544 113.872 66.544C115.968 66.544 117.864 66.1448 119.661 65.3464C121.457 64.548 122.854 63.2506 123.852 61.4542H123.952V65.8454H130.838V19.9373H130.739ZM123.253 54.4682C122.854 55.566 122.255 56.4642 121.557 57.2626C120.858 58.061 119.86 58.7596 118.862 59.1588C117.764 59.6578 116.667 59.8574 115.269 59.8574C113.972 59.8574 112.774 59.6578 111.677 59.1588C110.579 58.6598 109.681 58.061 108.982 57.2626C108.283 56.4642 107.685 55.566 107.285 54.4682C106.886 53.3704 106.687 52.3724 106.687 51.1748C106.687 50.077 106.886 48.9792 107.285 47.8814C107.685 46.7836 108.283 45.8854 108.982 45.087C109.681 44.2886 110.579 43.5899 111.677 43.1907C112.774 42.6917 113.872 42.4921 115.269 42.4921C116.567 42.4921 117.764 42.6917 118.862 43.1907C119.96 43.6897 120.858 44.2886 121.557 45.087C122.255 45.8854 122.854 46.7836 123.253 47.8814C123.653 48.9792 123.852 50.077 123.852 51.1748C123.852 52.3724 123.653 53.4702 123.253 54.4682Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M162.275 44.9872C161.477 43.091 160.279 41.4941 158.882 40.1967C157.485 38.8993 155.788 37.8015 153.892 37.1029C151.996 36.4043 149.9 36.0051 147.704 36.0051C145.509 36.0051 143.513 36.4043 141.517 37.1029C139.621 37.8015 137.924 38.8993 136.527 40.1967C135.13 41.4941 134.032 43.091 133.134 44.9872C132.335 46.8834 131.936 48.9792 131.936 51.2746C131.936 53.57 132.335 55.6658 133.134 57.562C133.932 59.4582 135.13 61.055 136.527 62.3524C137.924 63.6498 139.621 64.7476 141.517 65.4462C143.413 66.1448 145.509 66.544 147.704 66.544C149.9 66.544 151.896 66.1448 153.892 65.4462C155.788 64.7476 157.485 63.6498 158.882 62.3524C160.279 61.055 161.377 59.4582 162.275 57.562C163.074 55.6658 163.473 53.57 163.473 51.2746C163.573 48.9792 163.174 46.8834 162.275 44.9872ZM155.689 54.4682C155.289 55.566 154.691 56.4642 153.992 57.2626C153.293 58.061 152.395 58.7596 151.297 59.1588C150.2 59.6578 149.102 59.8574 147.704 59.8574C146.407 59.8574 145.209 59.6578 144.112 59.1588C143.014 58.6598 142.116 58.061 141.417 57.2626C140.718 56.4642 140.12 55.566 139.72 54.4682C139.321 53.3704 139.122 52.3724 139.122 51.1748C139.122 50.077 139.321 48.9792 139.72 47.8814C140.12 46.7836 140.619 45.8854 141.417 45.087C142.116 44.2886 143.014 43.59 144.112 43.1908C145.209 42.6918 146.307 42.4922 147.704 42.4922C149.002 42.4922 150.2 42.6918 151.297 43.1908C152.395 43.6898 153.293 44.2886 153.992 45.087C154.691 45.8854 155.289 46.7836 155.689 47.8814C156.088 48.9792 156.287 50.077 156.287 51.1748C156.287 52.3724 156.088 53.4702 155.689 54.4682Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M186.128 52.6718C185.329 51.574 184.431 50.6758 183.234 50.077C182.036 49.4782 180.838 48.9792 179.441 48.6798C178.144 48.3804 176.946 48.081 175.649 47.7816C174.451 47.4822 173.553 47.1828 172.755 46.7836C171.956 46.3844 171.557 45.6858 171.557 44.8874C171.557 43.7896 172.056 42.9912 172.954 42.4922C173.852 41.9932 174.85 41.7936 175.848 41.7936C178.244 41.7936 180.14 42.7916 181.537 44.7876L186.427 40.3963C185.23 38.7995 183.733 37.6019 181.836 37.0031C179.94 36.3045 178.044 36.0051 176.048 36.0051C174.551 36.0051 173.154 36.2047 171.757 36.5041C170.359 36.9033 169.062 37.4023 167.964 38.2007C166.866 38.9991 165.968 39.9971 165.369 41.0949C164.671 42.2926 164.371 43.6898 164.371 45.2866C164.371 47.1828 164.771 48.58 165.569 49.6778C166.367 50.7756 167.266 51.574 168.463 52.1728C169.661 52.7716 170.858 53.1708 172.256 53.4702C173.653 53.7696 174.85 53.9692 176.048 54.3684C177.246 54.6678 178.144 55.067 178.942 55.566C179.741 56.065 180.14 56.7636 180.14 57.7616C180.14 58.3604 179.94 58.8594 179.641 59.2586C179.341 59.6578 178.942 60.057 178.443 60.3564C177.944 60.6558 177.445 60.8554 176.846 60.9552C176.248 61.055 175.749 61.1548 175.25 61.1548C173.753 61.1548 172.455 60.8554 171.357 60.1568C170.26 59.4582 169.262 58.6598 168.363 57.562L163.473 62.1528C164.97 63.8494 166.667 65.047 168.563 65.6458C170.459 66.2446 172.555 66.6438 174.85 66.6438C176.248 66.6438 177.645 66.544 179.142 66.2446L187.425 57.9612C187.425 57.7616 187.425 57.562 187.425 57.3624C187.325 55.2666 186.926 53.7696 186.128 52.6718Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M33.8322 17.3425L26.0478 37.5022H25.948L18.2634 17.3425L12.6746 22.9313L22.1556 46.085H29.8402L40.9181 18.1409V46.085H48.2035V17.3425H33.8322Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                    <path
                      d="M108.483 34.4084V29.4183C108.483 28.7197 108.483 27.9213 108.383 27.0231C108.383 26.1249 108.184 25.1269 107.984 24.2287C107.785 23.2307 107.385 22.3325 106.886 21.3345C106.387 20.4363 105.689 19.5381 104.691 18.8395C103.793 18.1409 102.595 17.5421 101.198 17.0431C99.8005 16.5441 98.0041 16.3445 96.0081 16.3445C93.7127 16.3445 91.5171 16.7437 89.3215 17.4423C87.1258 18.1409 85.2296 19.3385 83.6328 21.0351L87.4252 24.8275C88.4233 23.9293 89.5211 23.1309 90.9183 22.6319C92.2157 22.1329 93.7127 21.8335 95.2097 21.8335C97.1059 21.8335 98.7027 22.3325 100 23.2307C101.298 24.1289 101.896 25.5261 101.896 27.3225V28.1209H100.1C98.9023 28.1209 97.6049 28.1209 96.2077 28.2207C94.8105 28.3205 93.5131 28.4203 92.1159 28.6199C90.7187 28.8195 89.4213 29.2187 88.2237 29.6179C86.9262 30.0171 85.8284 30.6159 84.9302 31.4143C83.9322 32.1129 83.2336 33.1109 82.6348 34.2087C82.036 35.3066 81.8364 36.7038 81.8364 38.2008C81.8364 39.6978 82.1358 40.8954 82.7346 41.9932C83.3334 43.091 84.1318 43.9892 85.1298 44.6878C86.1278 45.3864 87.2256 45.9852 88.523 46.2846C89.8205 46.6838 91.1179 46.7836 92.4153 46.7836C94.0121 46.7836 95.4093 46.584 96.8065 46.085L108.483 34.4084ZM101.497 34.7078C101.497 36.8036 100.898 38.4004 99.7007 39.598C98.5031 40.7956 96.7067 41.3944 94.1119 41.3944C93.5131 41.3944 92.9143 41.2946 92.3155 41.1948C91.7167 41.095 91.1179 40.7956 90.7187 40.4962C90.2197 40.1968 89.8205 39.7976 89.5211 39.2986C89.2217 38.7996 89.0221 38.3006 89.0221 37.602C89.0221 36.5042 89.4213 35.7058 90.2197 35.107C91.0181 34.5082 91.9163 34.109 93.0141 33.8096C94.1119 33.5101 95.3095 33.3105 96.5071 33.2107C97.8045 33.1109 98.9023 33.1109 99.9003 33.1109H101.397V34.7078H101.497Z"
                      fill="currentColor"
                      className="fill-gray-500"
                    />
                  </svg>
                </div>
              </div>
              {/* End Brands */}
              <div className="mt-10 flex items-center gap-x-5">
                {/* Avatar Group */}
                <div className="flex -space-x-2">
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <span className="inline-flex justify-center items-center size-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
                    <svg
                      className="size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                </div>
                {/* End Avatar Group */}
                <span className="text-sm text-gray-500">
                  Trusted by over 37k customer
                </span>
              </div>
            </div>
            {/* End Col */}
            <div className="relative">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Fill in the form
                </h2>
                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-1"
                          id="hs-firstname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-lastname-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-hire-us-1"
                          id="hs-lastname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-company-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          name="hs-company-hire-us-1"
                          id="hs-company-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-company-website-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Company Website
                        </label>
                        <input
                          type="text"
                          name="hs-company-website-hire-us-1"
                          id="hs-company-website-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-about-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Details
                      </label>
                      <textarea
                        id="hs-about-hire-us-1"
                        name="hs-about-hire-us-1"
                        rows={4}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </form>
                {/* End Grid */}
                {/* Checkbox */}
                <div className="mt-3 flex">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      By submitting this form I have read and acknowledged the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        Privacy policy
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send inquiry
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hire Us */}
      </>

      <Footer />


    </>

  )
}

export default Home