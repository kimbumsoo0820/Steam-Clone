import { createSlice } from "@reduxjs/toolkit";

interface ObjectItems {
    item : string,
    selected : boolean
}
interface ObjectProps {
    title : string;
    items : ObjectItems[];
}
interface InitialStateType {
    options:ObjectProps[];
}


const initialState: InitialStateType = {
    options : []
};

const options = createSlice({
  name: "options",
  initialState,

  reducers: {
    setOptions: (state, action)=> {
        console.log('action : ',action.payload)
        state.options = action.payload
        // state.options = JSON.parse(JSON.stringify(action.payload))
    }
  },
});

export default options;
export const { setOptions } = options.actions;
