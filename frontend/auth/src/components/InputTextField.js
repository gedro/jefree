import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputTextField({
  classes,
  label,
  id,
  name,
  errors,
  register,
  message,
  min,
  readOnly,
  autoComplete,
  autoFocus
}) {

  const type = name ? name : id;

  return (
    <div className={classes.au_inputFieldDiv}>
      <TextField
        className={ classes.au_inputField + (errors[id]?.message ? " " + classes.au_inputFieldError : "") }
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name ? name : id}
        type={type === "password" ? "password" : (type === "email" ? "email" : "text")}
        autoComplete={autoComplete ? autoComplete : id}
        autoFocus={autoFocus ? autoFocus : false}

        InputProps={{
          classes: {
            notchedOutline: classes.au_inputField + (errors[id]?.message ? " " + classes.au_inputFieldError : "")
          }
        }}

        {...register(id, {
          required: {value: true, message},
          minLength: min
            ? {value: min, message: "Minimum " + min + " character is required"}
            : null,
        })}
        readOnly={readOnly}
      />

      {errors[id]?.message && (
        <p className={classes.au_inputFieldErrorMsg}>
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
}
