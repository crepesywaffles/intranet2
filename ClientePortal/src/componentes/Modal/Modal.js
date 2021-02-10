

import React from 'react'
import { Icon, Image, Modal, Button } from 'semantic-ui-react'


function ModalScrollingExample(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      centered
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(props.open)}
      trigger={<Image className="btn" as={"button"}> {props.btn}</Image>}
      size={props.size}

    >
      <Modal.Actions>
        <Button black onClick={() => setOpen(false)}>
          Cerrar<Icon name='right chevron' />
        </Button>
      </Modal.Actions>
      <Modal.Content image scrolling>
        {children}
      </Modal.Content>
    </Modal>
  )
}

export default ModalScrollingExample
