import DisplayEmails from "../Components/DisplayEmails";
import Main from "../Components/Main";
import ViewMail from "../Components/ViewMail";

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: DisplayEmails,
  },
  invalid: {
    path: "/*",
    element: DisplayEmails,
  },
  view: {
    path: "/view",
    element: ViewMail,
  },
};
export { routes };
