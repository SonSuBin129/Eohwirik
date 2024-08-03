import styled, { keyframes } from "styled-components";
import React from "react";

interface ProgressBarProps {
  percent: number; // 진행률 (0 ~ 1)
  width?: string; // 그래프의 너비
  height?: string; // 그래프의 높이
  backgroundColor?: string; // 백그라운드 색상
  progressColor?: string; // 진행된 부분의 색상
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  width = "100%",
  height = "10px",
  backgroundColor = "rgba(175, 175, 175, 0.2)",
  progressColor = "linear-gradient(90deg, #CADDEF 0%, #9AAFF9 100%)",
}) => {
  const fillWidth = `${percent * 100}%`; // 0~1 범위의 percent를 백분율로 변환

  return (
    <ProgressContainer
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
    >
      <ProgressFill
        $width={fillWidth}
        $progressColor={progressColor}
        $height={height}
      />
    </ProgressContainer>
  );
};

export default ProgressBar;

const ProgressContainer = styled.div<{
  $width: string;
  $height: string;
  $backgroundColor: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 10px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: $percent; 
  }
`;

const ProgressFill = styled.div<{
  $width: string;
  $progressColor: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: 100%;
  background: ${({ $progressColor }) => $progressColor};
  border-radius: ${({ $height }) => `${parseInt($height, 10) / 2}px`};
  animation: ${fillAnimation} 2s ease forwards;
  transition: width 0.3s ease;
`;
