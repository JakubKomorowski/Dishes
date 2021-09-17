import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="dish-type">Dish Type</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: "Dish Type",
        id: "dish-type",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderRange = ({ input }) => (
  <input type="range" min="1" max="10" {...input} />
);

export const renderTimePick = ({
  input,
  meta: { touched, invalid, error },
  label,
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardTimePicker
      InputLabelProps={{ shrink: true }}
      ampm={false}
      id="time-picker"
      label={label}
      value={input.value}
      onChange={input.onChange}
      views={["hours", "minutes", "seconds"]}
      format="HH:mm:ss"
      helperText={touched && error}
      error={touched && invalid}
      {...input}
      InputProps={{
        readOnly: true,
      }}
    />
  </MuiPickersUtilsProvider>
);
