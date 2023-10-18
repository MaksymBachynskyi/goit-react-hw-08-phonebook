import * as Yup from 'yup';
import { Formik } from 'formik';
import { addContacts } from 'redux/operation';
import { selectorContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledField,
  StyledErrMsg,
  StyledLabel,
  StyledBtn,
} from './contactForm.styled';

const MyShema = Yup.object().shape({
  name: Yup.string()
    .matches("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: false,
    })
    .required()
    .min(3, 'Too short'),
  number: Yup.string()
    .matches(
      '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$',
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with + For example +9720557841192 or 0579402210',
      }
    )
    .required(),
});
export const ContactForm = ({ onAddNumber }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={MyShema}
      onSubmit={(values, { resetForm }) => {
        const isIcluded = contacts.some(
          item =>
            item.name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
        );
        if (isIcluded) {
          alert(`${values.name} is alredy in contacts`);
          return;
        }
        dispatch(addContacts(values));
        resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField type="text" name="name" required />
          <StyledErrMsg name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledField type="tel" name="number" />
          <StyledErrMsg name="number" component="div" />
        </StyledLabel>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
