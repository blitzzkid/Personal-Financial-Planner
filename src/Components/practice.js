// const dataPractice = (
//   currentAge,
//   retirementAge,
//   passingAge,
//   retirementIncome,
//   inflationRate,
//   interestRate
// ) => {
//   const lengthOfWorkingLife = retirementAge - currentAge;
//   const retirementIncomeFactoringInflation =
//     retirementIncome * (1 + inflationRate) ** lengthOfWorkingLife;
//   const lengthOfRetirementInMonths = (passingAge - retirementAge) * 12;
//   const retirementFund =
//     lengthOfRetirementInMonths * retirementIncomeFactoringInflation;
//   const workingSavingsPerYear = Math.round(
//     retirementFund / lengthOfWorkingLife
//   );
//   const workingSavingsPerMonth = Math.round(workingSavingsPerYear / 12);

//   console.log("retirement Fund", retirementFund);
//   console.log("working Savings Per Year", workingSavingsPerYear);
//   console.log("Working savings per month", workingSavingsPerMonth);

//   const savingsData = [];
//   let j = 1;
//   for (let i = currentAge; i <= retirementAge; i++) {
//     let dataPoint = {};
//     dataPoint.x = i;
//     dataPoint.y = workingSavingsPerYear * j;
//     savingsData.push(dataPoint);
//     j += 1;
//   }
//   // console.log(savingsData)
//   const yearlyContributionInvested = Math.round(
//     (retirementFund * interestRate) /
//       ((1 + interestRate) ** lengthOfWorkingLife - 1)
//   );
//   const monthlyContributionInvested = Math.round(
//     yearlyContributionInvested / 12
//   );
//   console.log("yearly contribution invested", yearlyContributionInvested)
//   console.log("monthly contribution invested", monthlyContributionInvested);
//   const savingsInvestedData = [];
//   let k = 1;
//   for (let i = currentAge; i <= retirementAge; i++) {
//     let dataPoint = {};
//     dataPoint.x = i;
//     dataPoint.y = Math.round(
//       (yearlyContributionInvested / interestRate) * (((1 + interestRate) ** k) - 1)
//     );
//     savingsInvestedData.push(dataPoint);
//     k += 1;
//   }
//   console.log(savingsInvestedData);
// };

// dataPractice(30, 60, 80, 100, 0.0, 0.05);
