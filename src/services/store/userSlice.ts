import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '@/services/axios';
import Cookies from 'js-cookie';

export interface User {
  data: [
    {
      id: string;
      fullName: string;
      email: string;
      phone?: string;
      address?: string;
      cpfCnpj?: string;
      birthDate?: string;
      avatarUrl?: string;
    }
  ]
}

interface UserState {
  data: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: UserState = {
  data: null,
  status: 'idle',
};

const token = Cookies.get('user-token');

export const fetchProfile = createAsyncThunk('user/fetchProfile', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/user/getProfileById', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data as User;
  } catch (e: any) {
    return rejectWithValue(e?.response?.data?.message || e.message || 'Erro ao buscar perfil');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    signOut(state) {
      state.data = null;
      state.status = 'idle';
      Cookies.remove("user-token");
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
  },
});

export const { setUser, signOut } = userSlice.actions;
export default userSlice.reducer;