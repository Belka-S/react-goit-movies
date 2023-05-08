import { Component } from 'react';
import { Section } from '../Section/Section';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { IconBtn } from '../Button/IconBtn';
import { ReactComponent as CloseIcon } from 'img/svg/close.svg';

export class AppModal extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <Section title="Modal">
        <Button onClick={this.toggleModal}>Open Modal</Button>
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <h2>Modal Window</h2>
            <IconBtn onClick={this.toggleModal} aria-label="close modal">
              <CloseIcon width="15" height="15" />
            </IconBtn>
          </Modal>
        )}
      </Section>
    );
  }
}
