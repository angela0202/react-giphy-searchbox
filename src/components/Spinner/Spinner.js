// @flow
import React from 'react'
import { useStyle } from '../../style'
import { styles } from './spinnerStyles'
import SpinnerIcon from '../../assets/SpinnerIcon'

type Props = {
  show: boolean,
  message: string,
  externalCss: boolean,
  image: ?string,
}

const Spinner = ({ show, message, image, externalCss }: Props) => {
  useStyle(!externalCss ? 'Spinner' : null, styles)

  return (
    show && (
      <div role="status" className="reactGiphySearchbox-spinnerWrapper">
        <div className="reactGiphySearchbox-spinner" data-testid="Spinner">
          {image ? <img src={image} alt="Loading icon" /> : <SpinnerIcon />}
        </div>
        <div
          className="reactGiphySearchbox-spinnerText"
          data-testid="SpinnerText"
        >
          {message}
        </div>
      </div>
    )
  )
}

export default Spinner
