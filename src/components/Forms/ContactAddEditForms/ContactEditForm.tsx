import React, { useState } from 'react';
import {
  Formik,
  Form, FormikProps,
} from 'formik';
import { Button, Modal } from 'antd';
import { useActions } from '../../../hooks/useActions';
import { IAddingContact } from '../../../redux/commonTypes/IAddingContact';
import { ContactEditFormProps } from './types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { validator } from './validator';
import CustomFieldCreator from '../CustomFieldCreator/CustomFieldCreator';

function ContactEditForm({ contact }:ContactEditFormProps): JSX.Element {
  const { editContactThunk } = useActions();
  const { token } = useTypedSelector((state) => state.app);
  const initialValues: IAddingContact = {
    name: contact.name,
    city: contact.city,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
  };

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formRef = React.useRef<FormikProps<IAddingContact>>(null);
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    handleSubmit();
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Edit contact
      </Button>
      <Modal
        title="Add contact"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <h1>Edit contact</h1>
          <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validate={(values) => validator(values)}
            onSubmit={(values, actions) => {
              setVisible(false);
              editContactThunk(contact.id, { ...values }, token);
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <CustomFieldCreator name="name" placeholder="Enter name" type="text" />
              <CustomFieldCreator name="city" placeholder="Enter city" type="text" />
              <CustomFieldCreator name="email" placeholder="Enter email" type="text" />
              <CustomFieldCreator name="phoneNumber" placeholder="Enter phone number" type="text" />
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>

  );
}

export default ContactEditForm;
