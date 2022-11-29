import axios from 'axios';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ChartDiagram } from "./ChartDiagram";
import { Filters } from "./Filters";
import { StatisticTable } from "./StatisticTable";
import { DiagramTabContainer, ChartDiagramContainer, DiagramTabTitle, DiagramTabText, DiagramTabTotal } from "./DiagramTab.styled";
import { theme } from "../../styleConfig/theme";
import { findNameById, findColorById } from "../../helpers/helpers";

export const DiagramTab = () => {
  const [totalIncoming, setTotalIncoming] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [statisticData, setStatisticData] = useState([]);

  const categories = useSelector(state => state.categories.categories);
  const expenseCategories = categories.filter(({ type }) => type === 'expense');
  
  const statisticFormatter = (data) => {
    const { expense, income } = data;
    const expenseTotal = expense.map(item => item.totalSum).reduce((a, b) => a + b, 0).toFixed(2);
    setTotalExpense(expenseTotal);
    const incomingTotal = income.map(item => item.totalSum).reduce((a, b) => a + b, 0).toFixed(2);
    setTotalIncoming(incomingTotal);
    const dataSource = expense.map(({ category, totalSum }) => {
      return {
        id: category,
        name: findNameById(category, expenseCategories),
        totalSum: +totalSum.toFixed(2),
        color: findColorById(category),
      };
    });
    setStatisticData(dataSource);
  };

  const getYearStatistic = async (year) => {
    try {
      const { data } = await axios.get(`/transactions/statistics?from=${year}&till=${+year + 1}`);
     statisticFormatter(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMonthStatistic = async (period) => {
    const periodFrom = period.split('-');
    const nextMonth = +periodFrom[1] + 1;
    const periodTill = `${periodFrom[0]}-${nextMonth}`
    try {
      const { data } = await axios.get(`/transactions/statistics?from=${period}&till=${periodTill}`);
      statisticFormatter(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYearStatistic('2022');
    console.log('mounting statistic...');
    // eslint-disable-next-line
  }, []);

  return (
    <DiagramTabContainer>
      <ChartDiagramContainer>
        <DiagramTabTitle>Statistics</DiagramTabTitle>
        <ChartDiagram data={statisticData} total={totalExpense} />
      </ChartDiagramContainer>
      <div>
        <Filters getYearStatistic={getYearStatistic} getMonthStatistic={getMonthStatistic}/>
        <StatisticTable data={statisticData} />
        <DiagramTabText style={{ marginBottom: '15px' }} >
          <span>Expenses:</span>
          <DiagramTabTotal accent={theme.colors.accentSecondary}>{totalExpense}</DiagramTabTotal>
        </DiagramTabText>
        <DiagramTabText>
          <span>Income: </span>
          <DiagramTabTotal accent={theme.colors.accent}>
            {totalIncoming}
          </DiagramTabTotal>
        </DiagramTabText>
      </div>
    </DiagramTabContainer>
  );
};