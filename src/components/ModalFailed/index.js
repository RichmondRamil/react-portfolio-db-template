import { faXmark, faSadTear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const ModalFailed = ({ modalTitle, modalBody, closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="modalCloseX" onClick={() => closeModal(false)}>
          <FontAwesomeIcon color="white" icon={faXmark} />
        </button>
        <div className="title">
          <h2>{modalTitle}</h2>
        </div>
        <FontAwesomeIcon size="4x" color="#ffcc33" icon={faSadTear} />
        <div className="body">
          <h3>{modalBody}</h3>
        </div>
        <div mo className="footer">
          <button
            className="modalCloseButton"
            onClick={() => closeModal(false)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
export default ModalFailed
