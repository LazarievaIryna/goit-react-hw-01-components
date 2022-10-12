import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 350px;
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    0 1px 1px 0 rgba(0, 0, 0, 0.12);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e1dcdc;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const UserDetail = styled.p`
  font-size: 16px;
  color: gray;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const StatsList = styled.ul`
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #f3f1f1;
`;
export const StatsListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #d3caca;
  :not(:last-child) {
    border-right: 1px solid #d3caca;
  }
`;
export const StatsLabel = styled.span`
  font-size: 16px;
  color: gray;
  margin-bottom: 10px;
`;
export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
