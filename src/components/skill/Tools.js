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

const Tools = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart outerRadius="75%" data={skillData.ToolData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="tool" />
        <PolarRadiusAxis angle={55} domain={[0, 100]} />
        <Radar
          name="Tools"
          dataKey="B"
          stroke="#0f5ba8"
          fill="#0f5ba8"
          fillOpacity={0.3}
        />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Tools;
