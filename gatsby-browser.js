import Modal from 'react-modal';
import smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
  smoothscroll.polyfill();
}
