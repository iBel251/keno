import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useMainStore = create(
  devtools(
    (set) => ({
      // Store an array of numbers
      numbers: [],
      // Store balance
      balance: 10,
      // Store matchedNumbers
      matchedNumbers: [],
      // Store userNumbers
      userNumbers: [],
      // Store randNumbers
      randNumbers: [],
      // Store betAmount
      betAmount: 0,
      // Store payoutAmount
      payoutAmount: 0,

      // Add functions to set the state for different data
      setNumbers: (data) => set({ numbers: data }),
      setBalance: (balance) => set({ balance }),
      setMatchedNumbers: (matchedNumbers) => set({ matchedNumbers }),
      setUserNumbers: (userNumbers) => set({ userNumbers }),
      setRandNumbers: (randNumbers) => set({ randNumbers }),
      setBetAmount: (betAmount) => set({ betAmount }),
      setPayoutAmount: (payoutAmount) => set({ payoutAmount }),
    }),
    "MainStore"
  )
);

const persistData = (store) => {
  const { name } = store;

  const persistedData = localStorage.getItem(name);

  if (persistedData) {
    store.setState(JSON.parse(persistedData));
  }

  store.subscribe((snapshot) => {
    localStorage.setItem(name, JSON.stringify(snapshot));
  });
};

persistData(useMainStore);

export default useMainStore;
