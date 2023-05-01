export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after dev remain null
  //token: 'BQACyJDI9Ai_XwONEJqi5Wm8AawIiDydeCuv7cd1m9KpheONVl…Jl-hXzbDiAemGDdcz7n8t-AJGu9gos6sd-d2HlFtQA9OgMKhw',
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return{
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return{
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer;
