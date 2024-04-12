import React, { useState, useRef } from "react";
import "./addRefPage.css";
import HeaderAddRefComponent from "../../components/headerAddRefComponent/headerAddRefComponent";
import Camera from "../../assets/img/camera.png";

function AddRefPage() {
 const [capturedImage, setCapturedImage] = useState(null);
 const [showCaptureButtons, setShowCaptureButtons] = useState(false); // Estado para controlar a visibilidade dos botões
 const videoRef = useRef(null);
 const canvasRef = useRef(null);

 const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageDataUrl);
 };

 const saveImage = () => {
    const link = document.createElement('a');
    link.href = capturedImage;
    link.download = 'captured_image.png';
    link.click();
 };

 const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCaptureButtons(true); // Habilitar os botões de captura após iniciar a câmera
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
 };

 return (
    <main className="form-add">
      <HeaderAddRefComponent />
      <label className="pergunta">Qual a refeição?</label>
      <input
        className="input-nome"
        placeholder="Digite um nome para a sua refeição"
      />
      <label className="pergunta">Sobre a refeição:</label>
      <textarea
        className="input-descricao"
        placeholder="Descreva a sua refeição"
      ></textarea>
      <button className="btn-add" onClick={startCamera}>
        <img src={Camera} alt="Camera"></img>
        <span>Adicionar foto da Refeição</span>
      </button>
      <video ref={videoRef} autoPlay></video>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      {/* Renderizar os botões somente se showCaptureButtons for true */}
      {showCaptureButtons && (
        <div>
          <button className="btn-capturar" onClick={captureImage}>
            Capturar Foto
          </button>
          <button className="btn-salvar" onClick={saveImage}>
            Salvar Foto
          </button>
        </div>
      )}
      <button className="btn-cancelar">
        Cancelar
      </button>
    </main>
 );
}

export default AddRefPage;
