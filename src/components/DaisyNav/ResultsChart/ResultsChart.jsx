import { LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';
import { Line } from 'recharts';

const resultsData = [
  {
    "id": 1,
    "name": "Student 1",
    "physics": 78,
    "chemistry": 82,
    "biology": 69,
    "math": 88
  },
  {
    "id": 2,
    "name": "Student 2",
    "physics": 85,
    "chemistry": 74,
    "biology": 72,
    "math": 91
  },
  {
    "id": 3,
    "name": "Student 3",
    "physics": 62,
    "chemistry": 70,
    "biology": 65,
    "math": 58
  },
  {
    "id": 4,
    "name": "Student 4",
    "physics": 90,
    "chemistry": 88,
    "biology": 84,
    "math": 95
  },
  {
    "id": 5,
    "name": "Student 5",
    "physics": 71,
    "chemistry": 68,
    "biology": 75,
    "math": 80
  },
  {
    "id": 6,
    "name": "Student 6",
    "physics": 55,
    "chemistry": 60,
    "biology": 58,
    "math": 62
  },
  {
    "id": 7,
    "name": "Student 7",
    "physics": 82,
    "chemistry": 79,
    "biology": 88,
    "math": 85
  },
  {
    "id": 8,
    "name": "Student 8",
    "physics": 67,
    "chemistry": 72,
    "biology": 64,
    "math": 70
  },
  {
    "id": 9,
    "name": "Student 9",
    "physics": 93,
    "chemistry": 89,
    "biology": 95,
    "math": 97
  },
  {
    "id": 10,
    "name": "Student 10",
    "physics": 76,
    "chemistry": 81,
    "biology": 73,
    "math": 79
  }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultsData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;