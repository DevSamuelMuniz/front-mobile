import React, { useState} from "react";
import "./homePage.css";
//css
import "./homePage.css";
//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import RecipeCarrosselComponent from "../../components/recipeCarrosselComponent/recipeCarrosselComponent";
import SideBarComponent from "../../components/sideBarComponent/sideBarComponent";

//imagens
import Banner from "../../assets/img/banner.png";

function Home() {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//   const sidebarRef = useRef(null);

//   const openPopup = () => {
//     setIsSidebarVisible(true);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsSidebarVisible(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const openSidebar = () => {
  setIsSidebarOpen(true);
};

const closeSidebar = () => {
  setIsSidebarOpen(false);
};
  return (
    <main className="content-header">
      <HeaderComponent openPopUp={openSidebar}/>
      
      <SideBarComponent isOpen={isSidebarOpen} onClose={closeSidebar}/> 
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <RecipeCarrosselComponent />
      <RecipeCarrosselComponent />
    </main>
  );
}

export default Home;
