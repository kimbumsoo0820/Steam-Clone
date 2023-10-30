"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.down = exports.up = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    id: 1,
    value: 0,
};
const counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.payload;
        },
        down: (state, action) => {
            state.value = state.value - action.payload;
        },
        init: (state, action) => {
            state.value = 0;
        },
    },
});
exports.default = counterSlice;
_a = counterSlice.actions, exports.up = _a.up, exports.down = _a.down, exports.init = _a.init;
//# sourceMappingURL=game.js.map