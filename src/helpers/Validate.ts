type Props = {};

const Validate = (field: any, rules: any) => {
  const { name, value } = field;
  const selectRules = rules[name];
  const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let minRegx = /min/g;
  let maxRegx = /max/g;
  let errorMessage = "";
  let password: any, confirmPassword: any;
  if (name === "password") {
    localStorage.setItem("password", value);
  }
  if (name === "confirm_password" || name === "confirmPassword") {
    localStorage.setItem("confirmPassword", value);
  }
  password = localStorage.getItem("password");
  confirmPassword = localStorage.getItem("confirmPassword");
  selectRules.split("|").forEach((rule: any) => {
    switch (true) {
      case rule === "required" && !value:
        errorMessage = `${capitalizeName} is required`;
        break;
      case rule === "string" && /[0-9]/g.test(value):
        errorMessage = `${capitalizeName} is not string`;
        break;
      case rule === "number" && /[A-Za-z]/.test(value):
        errorMessage = `${capitalizeName} is not number`;
        break;
      case rule === "email" && emailRegx.test(value) === false && value !== "":
        errorMessage = `${capitalizeName} is not valid`;
        break;

      case rule === "matchPassword" &&
        password !== confirmPassword &&
        value !== "":
        errorMessage = `Password is not match`;
        break;

      case minRegx.test(rule): {
        const charLength = rule.split(":")[1];
        if (value.toString().length < charLength && value.length !== 0)
          errorMessage =
            `${capitalizeName}` +
            ` length should be greater than ${charLength}`;
        // const minError = estimateMinMax(rule, value);
        // errorMessage = `${capitalizeName} ` + minError;
        break;
      }
      case maxRegx.test(rule): {
        const charLength = rule.split(":")[1];
        if (value.toString().length > charLength && value.length !== 0)
          errorMessage =
            `${capitalizeName}` +
            ` length should not be larger than ${charLength}`;
        break;
      }
      default:
        break;
    }
  });
  // if (password === confirmPassword) {
  //   localStorage.clear();
  // }
  return errorMessage;
};

// const estimateMinMax = (rule: any, value: any) => {
//   const splitRule = rule.split(":");
//   const selectRule = splitRule[0];
//   const ruleValue = splitRule[1];

//   if (
//     selectRule === "min" &&
//     value.toString().length < ruleValue &&
//     value.length !== 0
//   ) {
//     return `length should be greater than ${ruleValue}`;
//   }
//   if (selectRule === "max" && value.toString().length > ruleValue) {
//     return `length should not be larger than ${ruleValue}`;
//   }
// };

export default Validate;
