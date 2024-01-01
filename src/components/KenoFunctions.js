import React from "react";

const getKenoMultiplierInfo = (number) => {
  switch (number) {
    case 3:
      return {
        2: 3,
        3: 22,
      };
    case 4:
      return {
        2: 1,
        3: 7,
        4: 32,
      };
    case 5:
      return {
        3: 3,
        4: 10,
        5: 38,
      };
    case 6:
      return {
        3: 2,
        4: 8,
        5: 32,
        6: 72,
      };
    case 7:
      return {
        3: 1,
        4: 5,
        5: 22,
        6: 55,
        7: 212,
      };
    case 8:
      return {
        4: 2,
        5: 6,
        6: 32,
        7: 84,
        8: 400,
      };
    case 9:
      return {
        4: 2,
        5: 5,
        6: 18,
        7: 52,
        8: 128,
        9: 1000,
      };
    case 10:
      return {
        4: 2,
        5: 4,
        6: 9,
        7: 32,
        8: 92,
        9: 510,
        10: 1500,
      };
  }
};

const generateRandomNumbers = () => {
  const selectedNumbers = [];

  while (selectedNumbers.length < 20) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;

    if (!selectedNumbers.includes(randomNumber)) {
      selectedNumbers.push(randomNumber);
    }
  }

  return selectedNumbers;
};
const generateQuickPickNumbers = () => {
  const quickPickNumbers = [];

  while (quickPickNumbers.length < 10) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;

    if (!quickPickNumbers.includes(randomNumber)) {
      quickPickNumbers.push(randomNumber);
    }
  }

  return quickPickNumbers;
};

const calculatePayout = (bet, match, payoutLoad) => {
  // Check if the match is a key in the payoutLoad object
  if (payoutLoad?.hasOwnProperty(match)) {
    // Retrieve the corresponding payout value and calculate the payout
    const payoutMultiplier = payoutLoad[match];
    const payout = bet * payoutMultiplier;

    // Return the calculated payout
    return payout;
  } else {
    // If match is not a key in the payoutLoad object, return 0 (no payout)
    return 0;
  }
};

const matchCounter = (randomNumbers, userNumbers) => {
  // Use the filter function to find common numbers in both arrays
  const commonNumbers = randomNumbers.filter((number) =>
    userNumbers.includes(number)
  );

  // Return the array containing common numbers
  return commonNumbers;
};

export {
  getKenoMultiplierInfo,
  generateRandomNumbers,
  generateQuickPickNumbers,
  calculatePayout,
  matchCounter,
}; // Directly export the function
