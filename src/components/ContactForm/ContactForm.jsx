import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContact,
  Input,
  Label,
  ErrorText,
  BtnAdd,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[A-Z][a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna",
      }
    )
    .required('Name is a required field'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    )
    .required('Number is a required field'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ contacts, onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const name = values.name;
    const number = values.number;
    const id = nanoid();
    const verificationContact = contacts.find(el => el.name === name);
    if (verificationContact) {
      toast.warn(`${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const contact = { id, name, number };
    onAddContact(contact);
    toast.success(`Сontact ${name} is added!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContact autoComplete="off">
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" placeholder="Name"></Input>
            <FormError name="name" component="p" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" placeholder="Phone number"></Input>
            <FormError name="number" component="p" />
          </Label>
          <BtnAdd type="submit">Add contact</BtnAdd>
        </FormContact>
      </Formik>
      <ToastContainer />
    </>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
