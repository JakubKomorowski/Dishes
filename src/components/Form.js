import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { onSubmit } from "../apiCall";
import { FormWrapper } from "./StyledForm";
import {
  renderRange,
  renderSelectField,
  renderTextField,
  renderTimePick,
} from "../fieldRenders";

const validate = (values) => {
  const errors = {};
  const requiredFields = ["name", "preparation_time", "type"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  values.diameter = parseFloat(values.diameter);
  if (values.type === "pizza") {
    if (!values.no_of_slices) errors.no_of_slices = "Required";
    if (!values.diameter) errors.diameter = "Required";
  } else if (values.type === "soup") {
    if (!values.spiciness_scale) errors.spiciness_scale = "Required";
  } else {
    if (!values.slices_of_bread) errors.slices_of_bread = "Required";
  }

  return errors;
};

const Form = ({ handleSubmit, pristine, submitting }) => {
  const state = useSelector((state) => state.form.Form);
  const spicinessScale = state.values?.spiciness_scale;
  const dishType = state.values?.type;

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Field name="name" component={renderTextField} label="Name" />
      <Field
        name="preparation_time"
        component={renderTimePick}
        label="Preparation Time"
      />
      <Field
        style={{ width: "100%" }}
        name="type"
        component={renderSelectField}
        label="Dish Type"
      >
        <option value="" />
        <option value={"pizza"}>Pizza</option>
        <option value={"soup"}>Soup</option>
        <option value={"sandwich"}>Sandwich</option>
      </Field>
      {dishType === "pizza" && (
        <>
          <Field
            name="no_of_slices"
            type="number"
            label="Slices"
            component={renderTextField}
            parse={(val) => parseInt(val)}
            inputProps={{ min: 0 }}
          />
          <Field
            name="diameter"
            type="number"
            label="Diameter"
            component={renderTextField}
            inputProps={{ min: 0 }}
          />
        </>
      )}

      {dishType === "soup" && (
        <div style={{ display: "flex" }}>
          <Field
            name="spiciness_scale"
            label="Spiciness scale"
            component={renderRange}
          />
          <p>{spicinessScale}</p>
        </div>
      )}

      {dishType === "sandwich" && (
        <>
          <Field
            name="slices_of_bread"
            label="Slices of bread"
            type="number"
            component={renderTextField}
            parse={(val) => parseInt(val, 10)}
            inputProps={{ min: 0 }}
          />
        </>
      )}

      <Button
        type="submit"
        variant="outlined"
        color="primary"
        disabled={pristine || submitting}
      >
        Submit
      </Button>
    </FormWrapper>
  );
};

export default reduxForm({
  form: "Form",
  validate,
  onSubmit,
})(Form);
