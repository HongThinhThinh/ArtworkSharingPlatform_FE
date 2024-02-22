import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";
export const alertSuccess = (message) => {
  Swal.fire({
    title: "Good job!",
    text: `${message}`,
    icon: "success",
  });
};
export const alertSuccessSignUp = (message) => {
  Swal.fire({
    title: "SignUp Successfully!",
    text: `${message}`,
    icon: "success",
  });
};
export const alertFail = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  });
};
