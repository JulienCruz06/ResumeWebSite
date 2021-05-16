import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Buttons/PurdueButton'


function SchoolCard(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} target='_blank'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item-img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <Button buttonStyle='btn--secondary'>{props.button}</Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SchoolCard;