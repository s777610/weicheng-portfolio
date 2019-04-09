import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";
import skillData from "../../data/skills";

const Languages = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart outerRadius="75%" data={skillData.LanguageData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="language" />
        <PolarRadiusAxis angle={50} domain={[0, 100]} />
        <Radar
          name="Languages"
          dataKey="A"
          stroke="#056325"
          fill="#056325"
          fillOpacity={0.3}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Languages;
