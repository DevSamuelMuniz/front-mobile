import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";

//css
import "./progressPage.css";

function ProgressPage() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [totalConsumed, setTotalConsumed] = useState(0);

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
        consumed: 0
      };
      setGoals([...goals, newGoal]);
      setGoalName('');
      setGoalAmount('');
    }
  };

  const increaseConsumption = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].consumed += 1;
    setGoals(updatedGoals);
    calculateTotalConsumed();
  };

  const calculateTotalConsumed = () => {
    const total = goals.reduce((acc, curr) => acc + curr.consumed, 0);
    setTotalConsumed(total);
  };

  // Preparar os dados para o gráfico
  const data = {
    labels: goals.map(goal => goal.name),
    datasets: [{
      data: goals.map(goal => goal.consumed),
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        // Adicione mais cores conforme necessário
      ],
      borderWidth: 1,
    }]
  };

  return (
    <main>
      <HeaderComponent />

      <div>
        <h1>Seu progresso</h1>
        <div>
          <label htmlFor="goalNameInput">Meta:</label>
          <input type="text" id="goalNameInput" value={goalName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="goalAmountInput">Quantidade:</label>
          <input type="number" id="goalAmountInput" value={goalAmount} onChange={handleAmountChange} />
        </div>
        <button onClick={addGoal}>Adicionar Meta</button>
        <Doughnut data={data} />
        <p>Total Consumido: {totalConsumed}</p>
        {goals.map((goal, index) => (
          <div key={index}>
            <p>{goal.name}: {goal.consumed} / {goal.target}</p>
            <button onClick={() => increaseConsumption(index)}>+</button>
          </div>
        ))}
        <NavBarComponent />
      </div>
    </main>
  );
}

export default ProgressPage;
