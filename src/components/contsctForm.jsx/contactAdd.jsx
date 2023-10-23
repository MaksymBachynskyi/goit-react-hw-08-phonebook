import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operation';
import { StyledBtn, StyledErrMsg, StyledForm } from './contactAddStyled';
import { selectorContacts } from 'redux/selectors';

export default function ContactsAdd() {
  const contacts = useSelector(selectorContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    const isIcluded = contacts.some(
      item => item.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );
    if (isIcluded) {
      alert(`${data.name} is alredy in contacts`);
      return;
    }
    dispatch(addContacts(data));
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          {...register('name', {
            required: 'Required field',
            minLength: {
              value: 2,
              message: 'Name is too short',
            },
          })}
        ></input>
      </label>
      <StyledErrMsg>
        {errors?.name && <p>{errors?.name?.message || 'Error'}</p>}
      </StyledErrMsg>
      <label>
        Number
        <input
          placeholder="0587401191"
          {...register('number', {
            required: 'Required field',

            pattern: {
              value: /^[0-9]+$/,
              message:
                'Phone number must contains only numbers without spaces and any symbols, For example 0579402210',
            },
            minLength: {
              value: 6,
              message: 'Number is too short For example 0579402210',
            },
            maxLength: {
              value: 12,
              message: 'Number is too long For example 0579402210',
            },
          })}
        ></input>
      </label>
      <StyledErrMsg>
        {errors?.number && <p>{errors?.number?.message || 'Error'}</p>}
      </StyledErrMsg>
      <StyledBtn type="submit" disabled={!isValid}>
        Create Contact
      </StyledBtn>
    </StyledForm>
  );
}
