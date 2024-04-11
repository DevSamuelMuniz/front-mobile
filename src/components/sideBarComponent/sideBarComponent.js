import React from "react";
import { slide as Menu } from 'react-burger-menu';

//css
import "./sideBarComponent.css"

//imagens
import ConfigIcon from '../../assets/img/configIcon.png'
import ModoIcon from '../../assets/img/modoIcon.png'
import PoliticasIcon from '../../assets/img/politicasIcon.png'

function sideBarComponent({ isOpen, onClose }){
    const handleItemClick = () => {
        // Adicione aqui a lógica para lidar com o clique nos itens do menu, como navegação para diferentes páginas
        onClose(); // Fecha o menu após clicar em um item
      };
      
    return(
        <Menu isOpen={isOpen} onClose={onClose} className="popUp">
        <a className="menu-item" href="/" onClick={handleItemClick}><img src={ConfigIcon}></img><p>Configurações</p></a>
        <a className="menu-item" href="#" onClick={handleItemClick}><img src={ModoIcon}></img><p>Modo Escuro</p></a>
        <a className="menu-item" href="#" onClick={handleItemClick}><img src={PoliticasIcon}></img><p>Políticas de Privacidade</p></a>
      </Menu>
    );
};

export default  sideBarComponent; 