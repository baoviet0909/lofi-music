import { createSlice } from '@reduxjs/toolkit';
import { chill1Day, chill1Night, chill1RainyDay, chill1Rainynight } from '../assets/videos';
export const themeSlice = createSlice({
    name: 'Theme Slice',
    initialState: {
        theme: {
            isRain: false,
            isDay: true,
            rainDayVideo: chill1RainyDay,
            rainNightVideo: chill1Rainynight,
            dayVideo: chill1Day,
            nightVideo: chill1Night,
        },
    },
    reducers: {
        changeThemeRain: (state, action) => {
            state.theme = {
                ...state.theme,
                ...action.payload,
            };
        },
        changeThemeDay: (state, action) => {
            state.theme = {
                ...state.theme,
                ...action.payload,
            };
        },
    },
});

const themeReducer = themeSlice.reducer;
export default themeReducer;

export const themeAction = themeSlice.actions;

export const themeState = (state) => state.theme.theme;
