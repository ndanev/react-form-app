import useInput from '../hooks/useInput';

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmittionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return
    }

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && (<p className='error-text'>Name must not be empty!</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && (<p className='error-text'>Email must not be empty and must contain @ symbol!</p>)}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
