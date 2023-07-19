import SideNav from "./Sidenav.jsx";
import Footer from "./footer.jsx";
import FormProvider from "../../context/formContext.js";
export default function Main({ children }) {
  return (
    <div>
      <FormProvider>
        <SideNav />
        {children}
      </FormProvider>
    </div>
  );
}
