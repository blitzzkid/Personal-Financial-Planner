export const lengthOfWorkingLife = (currentAge, retirementAge) =>
  retirementAge - currentAge;

export const calculateRetirementFund = (
  currentAge,
  retirementAge,
  passingAge,
  retirementIncome,
  inflationRate
) => {
  const lengthOfWorkingLife = retirementAge - currentAge;
  const retirementIncomeFactoringInflation =
    retirementIncome * (1 + inflationRate) ** lengthOfWorkingLife;
  const lengthOfRetirementInMonths = (passingAge - retirementAge) * 12;
  const retirementFund =
    lengthOfRetirementInMonths * retirementIncomeFactoringInflation;
  return retirementFund;
};

export const calculateSavingsPerYearNotInvested = (
  workingLife,
  retirementFund
) => {
  return retirementFund / workingLife;
};
export const calculateSavingsPerMonthNotInvested = savingsPerYearNotInvested =>
  savingsPerYearNotInvested / 12;

export const calculateSavingsPerYearInvested = (
  workingLife,
  retirementFund,
  interestRate
) => {
  return (
    (retirementFund * interestRate) / ((1 + interestRate) ** workingLife - 1)
  );
};

export const calculateSavingsPerMonthInvested = calculateSavingsPerYearInvested =>
  calculateSavingsPerYearInvested / 12;

export const generateSavingsNotInvestedData = (
  currentAge,
  retirementAge,
  savingsPerYearNotInvested
) => {
  const savingsData = [];
  let j = 1;
  for (let i = currentAge; i <= retirementAge; i++) {
    let dataPoint = {};
    dataPoint.x = i;
    dataPoint.y = savingsPerYearNotInvested * j;
    savingsData.push(dataPoint);
    j += 1;
  }
  return savingsData;
};

export const generateSavingsInvestedData = (
  currentAge,
  retirementAge,
  interestRate,
  savingsPerYearInvested
) => {
  const investmentsData = [];
  let k = 1;
  for (let i = currentAge; i <= retirementAge; i++) {
    let dataPoint = {};
    dataPoint.x = i;
    dataPoint.y =
      (savingsPerYearInvested / interestRate) * ((1 + interestRate) ** k - 1);
    investmentsData.push(dataPoint);
    k += 1;
  }
  return investmentsData;
};
