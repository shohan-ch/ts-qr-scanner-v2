import React from "react";

const ValidationBase = (data: any, rules: any) => {
  let errorMessage = {};
  let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let minRegx = /min/g;
  let maxRegx = /max/g;

  for (let ruleProp in rules) {
    let password: any, confirmPassword: any;
    if (ruleProp === "password") {
      localStorage.setItem("password", data[ruleProp]);
    }
    if (ruleProp === "confirm_password" || ruleProp === "confirmPassword") {
      localStorage.setItem("confirmPassword", data[ruleProp]);
    }
    password = localStorage.getItem("password");
    confirmPassword = localStorage.getItem("confirmPassword");
    let capitalizeRule = ruleProp.charAt(0).toUpperCase() + ruleProp.slice(1);
    switch (true) {
      case data[ruleProp] === undefined:
        errorMessage = {
          ...errorMessage,
          [ruleProp]: `${capitalizeRule} is required`,
        };
        break;
      case data.hasOwnProperty(ruleProp):
        rules[ruleProp].split("|").forEach((rule: any) => {
          let inputValue = data[ruleProp];

          //   ruleProp = ruleProp.charAt(0).toUpperCase() + ruleProp.slice(1);
          switch (true) {
            case rule === "required" && !inputValue: {
              errorMessage = {
                ...errorMessage,
                [ruleProp]: `${capitalizeRule} is required`,
              };
              break;
            }
            case rule === "string" && /[0-9]/g.test(inputValue): {
              errorMessage = {
                ...errorMessage,
                [ruleProp]: `${capitalizeRule} should be string`,
              };
              break;
            }
            case rule === "number" && /[A-Za-z]/g.test(inputValue): {
              errorMessage = {
                ...errorMessage,
                [ruleProp]: `${capitalizeRule} should be number`,
              };
              break;
            }
            case rule === "email" && emailRegx.test(inputValue) === false:
              errorMessage = {
                ...errorMessage,
                [ruleProp]: `${capitalizeRule} is invalid`,
              };
              break;

            case minRegx.test(rule): {
              const charLength = rule.split(":")[1];
              if (inputValue.toString().length < charLength && inputValue)
                errorMessage = {
                  ...errorMessage,
                  [ruleProp]: `${capitalizeRule} length should be greater than ${charLength}`,
                };

              break;
            }
            case maxRegx.test(rule): {
              const charLength = rule.split(":")[1];
              if (inputValue.toString().length > charLength && inputValue)
                errorMessage = {
                  ...errorMessage,
                  [ruleProp]: `${capitalizeRule} length should not be larger than ${charLength}`,
                };
              break;
            }
            case rule === "matchPassword" &&
              password !== confirmPassword &&
              inputValue !== "": {
              errorMessage = {
                ...errorMessage,
                [ruleProp]: `Password is not match`,
              };
              break;
            }
            default:
              break;
          }
        });
        break;

      default:
        break;
    }
  }

  return (Object.keys(errorMessage).length === 0 && true) || errorMessage;
  console.log(data, "from base");
};

export default ValidationBase;
