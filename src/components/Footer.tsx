import logo from '../sections/CopyInfo/images/MP FILMS.svg';
export const Footer = () => {
  return (
    <div className="flex items-end w-full bg-black">
      <footer className="w-full bg-black " style={{ fontSize: 'medium' }}>
        <div className="flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
              <img src={logo as string} alt="MP-Films" />
            </a>
            <p className="mt-2  text-gray-500">Design, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <p className="mb-3  font-medium tracking-widest text-white uppercase title-font">
                About
              </p>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Company</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Careers</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Blog</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <p className="mb-3  font-medium tracking-widest text-white uppercase title-font">
                Support
              </p>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Contact Support</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Help Resources</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Release Updates</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <p className="mb-3  font-medium tracking-widest text-white uppercase title-font">
                Platform
              </p>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Pricing</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">FAQ</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <p className="mb-3  font-medium tracking-widest text-white uppercase title-font">
                Contact
              </p>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Send a Message</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">Request a Quote</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white">+123-456-7890</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container px-5 py-4 mx-auto">
            <p className=" text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
