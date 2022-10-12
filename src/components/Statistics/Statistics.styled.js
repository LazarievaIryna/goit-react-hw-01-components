import styled from 'styled-components';

export const StatisticsSection = styled.section`
  height: 100%;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
  color: gray;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  color: white;
`;

export const StatisticsLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const StatisticsPercentage = styled.span`
  font-size: 18px;
`;
