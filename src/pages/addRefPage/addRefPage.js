import React, { useState } from "react";
import "./addRefPage.css";
import HeaderAddRefComponent from "../../components/headerAddRefComponent/headerAddRefComponent";
import Camera from "../../assets/img/camera.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRefPage() {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [pic, setpic] = useState(null);
  const navigate = useNavigate();

  const handleAddpicClick = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          const video = document.createElement("video");
          video.srcObject = stream;
          video.onloadedmetadata = function () {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            video.addEventListener("play", function () {
              const captureFrame = () => {
                if (video.paused || video.ended) {
                  return;
                }
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/jpeg");

                // Define a imagem capturada no estado1
                setpic(dataUrl);

                // Limpa os recursos
                stream.getTracks().forEach((track) => track.stop());
                video.removeEventListener("play", captureFrame);
              };
              captureFrame();
            });

            // Inicia a reprodução do vídeo quando estiver pronto
            video.play();
          };

          // Se houver um erro, registra no console
          video.onerror = function (error) {
            console.error("Erro ao reproduzir o vídeo: ", error);
          };
        })
        .catch(function (error) {
          console.error("Erro ao acessar a câmera: ", error);
        });
    } else {
      console.error("Navegador não suporta acesso à câmera.");
    }
  };

  const handleSaveClick = () => {
    const blob = dataURLtoBlob(pic);

    // Crie um FormData para enviar a imagem junto com outros dados
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("token"));
    formData.append("title", mealName);
    formData.append("description", mealDescription);
    formData.append("pic", blob);
  
    axios
      .post("http://localhost:5000/api/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Refeição salva com sucesso!");
        setMealName("");
        setMealDescription("");
        setpic(null);
        // Check if the response indicates success
        if (response.data.message === "Post saved successfully") {
          // Redirect to /refeicoes
          navigate("/refeicoes"); // Corrected navigation
        }
      })
      .catch((error) => {
        console.error("Erro ao salvar a refeição:", error);
      });
  };
  
  // Função para converter uma string base64 em um blob
  function dataURLtoBlob(dataURL) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
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
      {pic && <img src={pic} alt="Refeição" className="photo-preview" />}
      <button className="btn-add" onClick={handleAddpicClick}>
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

