import Chart from "chart.js/auto";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";
import axios from "axios";

//css
import "./progressPage.css";

function ProgressPage() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [totalConsumed, setTotalConsumed] = useState(0);
  const [userId, setUserId] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/add_goal", {
          headers: { token: localStorage.getItem("token") },
        });
        setGoals(response.data);
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, []);

  const handleChange = (event) => {
    setGoalName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setGoalAmount(event.target.value);
  };

  const addGoal = () => {
    if (goalName && goalAmount) {
      const newGoal = {
        name: goalName,
        target: Number(goalAmount),
        metaAtual: 0,
      };

      axios
        .post("http://localhost:5000/api/add_goal", {
          userId: userId,
          metaName: goalName,
          metaQuantity: goalAmount,
        })
        .then((response) => {
          console.log(response.data);
          setGoals([...goals, newGoal]);
          setGoalName("");
          setGoalAmount("");
        })
        .catch((error) => {
          console.error("Error adding goal:", error);
        });
    }
  };

  const updateMeta = (metaId, valorMeta) => {
    axios.put(
      "http://localhost:5000/api/add_goal",
      {
        metaAtual: valorMeta,
      },
      { headers: { token: localStorage.getItem("token"), metaId: metaId } }
    );
  };

  const increaseConsumption = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].metaAtual += 1;
    setGoals(updatedGoals);
    calculateTotalConsumed();
    updateMeta(updatedGoals[index].id, updatedGoals[index].metaAtual);
  };

  const decreaseConsumption = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].metaAtual -= 1;
    setGoals(updatedGoals);
    calculateTotalConsumed();
  };

  const calculateTotalConsumed = () => {
    const total = goals.reduce((acc, curr) => acc + curr.metaAtual, 0);
    setTotalConsumed(total);
  };

  const data = {
    labels: goals.map((goal) => goal.nome),
    datasets: [
      {
        data: goals.map((goal) => goal.metaAtual),
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main>
      <HeaderComponent />

      <div className="content-progress">
        <h1 className="titulo-progress">Seu progresso</h1>
        <div className="form-progress">
          <label className="label-progress" htmlFor="goalNameInput">
            Nome do objetivo
          </label>
          <input
            className="input-progress"
            type="text"
            id="goalNameInput"
            value={goalName}
            onChange={handleChange}
            placeholder="Sua meta"
          />
        </div>
        <div className="form-progress">
          <label className="label-progress" htmlFor="goalAmountInput">
            Quantidade
          </label>
          <input
            className="input-progress"
            type="number"
            id="goalAmountInput"
            value={goalAmount}
            onChange={handleAmountChange}
            placeholder="Kg / L / Km / ..."
          />
        </div>
        <button className="incluir-progress" onClick={addGoal}>
          Adicionar Meta
        </button>
      </div>
      <p className="meta-titulo">Meta geral: {totalConsumed}</p>
      <div className="itens-progress">
        {goals.map((goal, index) => (
          <div className="adicionar-progress" key={index}>
            <p>
              {goal.nome}: {goal.quantidade} / {goal.metaAtual}
            </p>
            <div className="adic-dim">
              <button
                className="btn-progress"
                onClick={() => increaseConsumption(index)}
              >
                +
              </button>
              <button
                className="btn-progress"
                onClick={() => decreaseConsumption(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <Doughnut className="grafico" data={data} />
      </div>
      <NavBarComponent />
    </main>
  );
}

export default ProgressPage;
