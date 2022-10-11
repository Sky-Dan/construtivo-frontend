// ** Icons Import
import { Heart } from 'react-feather';

const Footer = () => {
  return (
    <div className='mt-5'>
      <p className="clearfix mb-0 justify-content-center d-flex">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CRIATIVO
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      {/* <span className='float-md-end d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span> */}
    </p>
    </div>
  );
};

export default Footer;
