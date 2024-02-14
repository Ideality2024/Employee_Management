import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as Chart } from 'chart.js/auto';

function BarChart({ chartData }) {
  return <Bar data={chartData}/>;
}

export default BarChart;
