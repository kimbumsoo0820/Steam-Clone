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


const initialState: any = {
    options : [],
    sorts: []
};

const options = createSlice({
  name: "options",
  initialState,

  reducers: {
    setOptions: (state, action)=> {
        console.log('action | option : ',action.payload)
        state.options = action.payload
        // state.options = JSON.parse(JSON.stringify(action.payload))
    },
    setSorts: (state, action)=> {
        console.log('action | sort : ',action.payload)
        state.sorts = action.payload
    }
  },
});

export default options;
export const { setOptions,setSorts } = options.actions;
