export const lengthOfWorkingLife = (
  currentAge: number,
  retirementAge: number
) => retirementAge - currentAge;

export const calculateRetirementFund = (
  currentAge: number,
  retirementAge: number,
  passingAge: number,
  retirementIncome: number,
  inflationRate: number
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
  workingLife: number,
  retirementFund: number
) => {
  return retirementFund / workingLife;
};
export const calculateSavingsPerMonthNotInvested = (
  savingsPerYearNotInvested: number
) => savingsPerYearNotInvested / 12;

export const calculateSavingsPerYearInvested = (
  workingLife: number,
  retirementFund: number,
  interestRate: number
) => {
  return (
    (retirementFund * interestRate) / ((1 + interestRate) ** workingLife - 1)
  );
};

export const calculateSavingsPerMonthInvested = (
  calculateSavingsPerYearInvested: number
) => calculateSavingsPerYearInvested / 12;

export const generateSavingsNotInvestedData = (
  currentAge: number,
  retirementAge: number,
  savingsPerYearNotInvested: number
) => {
  const savingsData = [];
  let j = 1;
  for (let i = currentAge; i <= retirementAge; i++) {
    let dataPoint: any = {};
    dataPoint.x = i;
    dataPoint.y = savingsPerYearNotInvested * j;
    savingsData.push(dataPoint);
    j += 1;
  }
  return savingsData;
};

export const generateSavingsInvestedData = (
  currentAge: number,
  retirementAge: number,
  interestRate: number,
  savingsPerYearInvested: number
) => {
  const investmentsData = [];
  let k = 1;
  for (let i = currentAge; i <= retirementAge; i++) {
    let dataPoint: any = {};
    dataPoint.x = i;
    dataPoint.y =
      (savingsPerYearInvested / interestRate) * ((1 + interestRate) ** k - 1);
    investmentsData.push(dataPoint);
    k += 1;
  }
  return investmentsData;
};
