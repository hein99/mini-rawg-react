import useData from "./useData";

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () => useData<Platfrom>('/platforms/lists/parents');

export default usePlatfroms;