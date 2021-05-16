import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';




class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}



            // <DownloadLink src="/path/to/my.pdf">Click Here</DownloadLink>
       




function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Hope to Hear From You Soon!
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/about'>Who I Am</Link>
            <Link to='/accolades'>School Accolades</Link>
            <DownloadLink src="img/Resume.pdf" target='_blank'>Resume</DownloadLink>
            {/* <Link to='/about'>Resume</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/yahoo'>Email</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/linkedin' target="_blank">LinkedIn</Link>
            <Link to='/github' target='_blank'>GitHub</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i class='fab fa-react' />
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='/linkedin'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link gitHub'
              to='/github'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link gmail'
              to='/contact'
              aria-label='GMail'
            >
              <i class='far fa-envelope' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;