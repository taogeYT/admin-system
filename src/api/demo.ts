import axios from 'axios';

export interface Record {
  name: string;
  phone: string;
  salary: number;
  address: string;
  email: string;
}

interface DemoList {
  data: Record[];
  total: number;
}

export interface DemoParams {
  name: string;
  phone: string;
}

export function queryDemoList(params: DemoParams) {
  return axios.get<DemoList>('http://127.0.0.1:8000/demos', { params });
}
