import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import './globals.css'
const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
   );
}
 
export default Layout;