import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface DashboardStatistic {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowCount: number;
}

export interface RankingByCity {
  cityId: string;
  rankingList: Student[];
}

export interface DashboardState {
  loading: boolean;
  statistic: DashboardStatistic;
  highestStudentList: Student[];
  lowestStudentList: Student[];
  rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
  loading: false,
  statistic: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;

    },
    fetchDataFailed(state) {
      state.loading = false;

    },

    setStatistic(state, action: PayloadAction<DashboardStatistic>) {
      state.statistic = action.payload;
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload;
    },
    setLowestStudentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload;
    },
    setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selectors
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
export const selectDashboardStatistic = (state: RootState) => state.dashboard.statistic;
export const selectHighestStudentList = (state: RootState) => state.dashboard.highestStudentList;
export const selectLowestStudentList = (state: RootState) => state.dashboard.lowestStudentList;
export const selectRankingByCityList = (state: RootState) => state.dashboard.rankingByCityList;


// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
