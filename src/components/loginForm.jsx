import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operation';

export default function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    dispatch(logInUser(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            {...register('email', {
              required: 'Required field',

              pattern: {
                value: /^\S+@\S+$/i,
              },
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
