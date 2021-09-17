import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const onSubmit = (values) => {
  values.preparation_time = values.preparation_time
    .toTimeString()
    .substring(0, 8);
  values.diameter = parseFloat(values.diameter, 10);
  values.spiciness_scale = parseFloat(values.spiciness_scale, 10);
  console.log(values);
  const val = {
    id: uuidv4(),
    ...values,
  };

  axios
    .post("https://frosty-wood-6558.getsandbox.com:443/dishes", {
      ...val,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
