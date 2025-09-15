import { create } from 'zustand';

const useCounterStore = create(set => ({
  count: 1,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set(state => ({ count: 0 })),
}));

export default useCounterStore;
