import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Favorite {
  data: [
    {
      id: number;
      name: string;
      car_model: string;
      image_url: string;
      year: number;
      price_per_day: number;
      availability: boolean;
    }
  ]
}

interface FavoriteState {
  data: Favorite | any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: FavoriteState = {
  data: null,
  status: 'idle',
};

export const fetchFavorite = createAsyncThunk<Favorite, number>(
  'user/fetchFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'car/favorites/' + id, {
        method:'GET',
        cache: 'no-store'
      });

      const data = await res.json();

      return data as Favorite;
    } catch (e: any) {
      return rejectWithValue(
        e?.response?.data?.message || e.message || 'Erro ao buscar perfil'
      );
    }
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<Favorite | null>) {
      state.data = action.payload;
      state.status = 'succeeded';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorite.pending, state => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
  },
});

export const { setFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;