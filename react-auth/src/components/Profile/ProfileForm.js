import { useRef } from 'react';
import { useSelector } from 'react-redux';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const idToken = useSelector(state => state.auth.token);

  const changePasswordHandler = (e) => {
    e.preventDefault();

    const password = passwordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDEyeUpB0IDtUIjg4Iy8qcgPFCMUPvX0jY', {
      method: 'POST',
      body: JSON.stringify({
        idToken,
        password,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {

    })
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordInputRef} minLength="7" type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
