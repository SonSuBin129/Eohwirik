import styled, { keyframes } from "styled-components";
import React from "react";

interface DoughnutChartProps {
  percent: number;
  size?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = (
  props: DoughnutChartProps,
) => {
  const { percent, size = "44px" } = props;
  const radius = 80;

  return (
    <Chart size={size}>
      <AniSvg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B1EEEE" />
            <stop offset="100%" stopColor="#46BEBE" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#ebebeb"
          strokeWidth="40"
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="40"
          strokeDasharray={`${2 * Math.PI * radius * percent} ${
            2 * Math.PI * radius * (1 - percent)
          }`}
          strokeDashoffset={2 * Math.PI * radius * 0.25}
          strokeLinecap="round"
        />
      </AniSvg>
      <Percent>{Math.round(percent * 100)}%</Percent>
    </Chart>
  );
};

export default DoughnutChart;

const Chart = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const AniSvg = styled.svg`
  position: relative;
`;

// 여기서 80은 radius를 의미
const circleFill = keyframes`
    0% {
        stroke-dasharray: 0 ${2 * Math.PI * 80};
    }
`;

const AnimatedCircle = styled.circle`
  animation: ${circleFill} 2s ease;
`;

const Percent = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 800;
  color: black;
`;
