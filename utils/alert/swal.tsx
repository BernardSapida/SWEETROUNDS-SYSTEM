import Swal, { SweetAlertIcon } from "sweetalert2";

export const Alert = (
  icon: SweetAlertIcon | undefined,
  title: string,
  message: string
) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
  });
};
