import {create} from 'zustand';

interface State {
  data: { [key: string]: string }[];
  setData: (data: { [key: string]: string }[]) => void;
}

const useStore = create<State>(set => ({
  data: [],
  setData: data => set({ data }),
}));

export default useStore;