import React, { useState } from "react";
import "./addRefPage.css";
import HeaderAddRefComponent from "../../components/headerAddRefComponent/headerAddRefComponent";
import Camera from "../../assets/img/camera.png";
import axios from 'axios';

function AddRefPage() {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const userId = 1;

  const handleAddPhotoClick = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();

          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          const dataUrl = canvas.toDataURL('image/jpeg');

          setPhoto(dataUrl);

          stream.getTracks().forEach(track => track.stop());
        })
        .catch(function(error) {
          console.error('Erro ao acessar a câmera: ', error);
        });
    } else {
      console.error('Navegador não suporta acesso à câmera.');
    }
  };

  const handleSaveClick = () => {
    // Enviar os dados da refeição para o backend usando o Axios
    axios.post('http://localhost:5000/api/post', {
      userId: localStorage.getItem("token"), 
      title: mealName,
      description: mealDescription,
      pic: photo,
    })
    .then(response => {
      console.log("Refeição salva com sucesso!");
      // Limpar os campos após o salvamento
      setMealName("");
      setMealDescription("");
      setPhoto(null);
    })
    .catch(error => {
      console.error("Erro ao salvar a refeição:", error);
    });
  };

  return (
    <main className="form-add">
      <HeaderAddRefComponent />
      <label className="pergunta">Qual a refeição?</label>
      <input
        className="input-nome"
        placeholder="Digite um nome para a sua refeição"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />
      <label className="pergunta">Sobre a refeição:</label>
      <textarea
        className="input-descricao"
        placeholder="Descreva a sua refeição"
        value={mealDescription}
        onChange={(e) => setMealDescription(e.target.value)}
      ></textarea>
      {photo && (
        <img src={photo} alt="Refeição" className="photo-preview" />
      )}
      <button className="btn-add" onClick={handleAddPhotoClick}>
        <img src={Camera} alt="Camera"></img>
        <span>Adicionar foto da Refeição</span>
      </button>
      
      <button className="btn-salvar" onClick={handleSaveClick}>
        Salvar
      </button>
    </main>
  );
}

export default AddRefPage;
