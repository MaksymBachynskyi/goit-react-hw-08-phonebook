import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operation';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
        <label>
          Email
          <input
            {...register('email', {
              required: 'Required field',
              pattern: /^\S+@\S+$/i,
            })}
          ></input>
        </label>
        <div>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
        <label>
          Password
          <input
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 7,
                message: 'Password is too short',
              },
            })}
          ></input>
        </label>
        <div>
          {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
