//获取指定的开始月份和结束月份
export const getJdDate = function(year,startMonth,endMonth) {
    const startJdDate = new Date(year, startMonth-1, 2);
    const endJdDate = new Date(year, endMonth, 1);
  return {
    start: startJdDate.toISOString().split('T')[0],
    end: endJdDate.toISOString().split('T')[0]
  };
}
//获取某年的开始结束
export const getYearDate = function(year) {
  const startDate = new Date(year, 0, 2);
  const endDate = new Date(year, 11, 32);
  return {
    start: startDate.toISOString().split('T')[0],
    end: endDate.toISOString().split('T')[0]
  };
}

//得到某个月份的开始和结束日期
export const getMonthDate=function(year, month) {
  const startDate = new Date(year, month-1, 2);
  const endDate = new Date(year, month, 1);
  return {
    start: startDate.toISOString().split('T')[0],
    end: endDate.toISOString().split('T')[0]
  };
} 
