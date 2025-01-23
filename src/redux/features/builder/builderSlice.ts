// store/slices/builderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Component {
  id: string;
  type: string;
  styles: Record<string, string>;
}

interface BuilderState {
  components: Component[];
  selectedComponentId: string | null;
}

const initialState: BuilderState = {
  components: [],
  selectedComponentId: null,
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<Component>) => {
      state.components.push(action.payload);
    },
    selectComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedComponentId = action.payload;
    },
    updateComponentStyles: (
      state,
      action: PayloadAction<{ id: string; styles: Record<string, string> }>
    ) => {
      const component = state.components.find((comp) => comp.id === action.payload.id);
      if (component) {
        component.styles = { ...component.styles, ...action.payload.styles };
      }
    },
  },
});

export const { addComponent, selectComponent, updateComponentStyles } = builderSlice.actions;
export default builderSlice.reducer;
