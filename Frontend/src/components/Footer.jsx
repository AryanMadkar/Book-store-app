import React from "react";

const Footer = () => {
  return (
    <div>
          <div className="w-full h-2px border"></div>

      <div className="felx mt-[2rem] flex-col items-center m-[1rem] justify-center">
        <div className="flex items-center justify-center">
          <ul className="flex gap-5">
            <li>
              <a href="https://www.linkedin.com/in/aryan-madkar/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/aryanmadkar">Github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/aryan_madkar/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/aryan.madkar">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/aryan_madkar">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center m-[1rem]  justify-center">
          <a href="/" className="mx-[0.3rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m334-80-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l440 280 40 200h-80l-40-80H560v160h-80v-160h-80L334-80Zm66-240h353l-63-40H400q-66 0-113-47t-47-113h80q0 33 23.5 56.5T400-440h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Z" />
            </svg>
          </a>
          <a href="https://www.youtube.com" className="m-[0.3rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
            </svg>
          </a>
          <a href="https://www.facebook.com" className="m-[0.3rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </a>
        </div>
        <div className="w-[100%]">
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
              <p>
                Copyright © 2024 - All right reserved by ACME Industries Ltd
              </p>
            </aside>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
