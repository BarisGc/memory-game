//completed basılırsa işlem görmesi geliştirilecek, backend tarafında root url vb. ayarlamak gerekiyor.
import { createSlice } from "@reduxjs/toolkit";

// export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     const res = await fetch('http://localhost:7000/todos');
//     return await res.json()
// })
//bunun yerine axios tercih ettik
const memoryCardDeck = [
    {
        id: 1,
        name: "graphql",
        imageUrl: '/Images/png/graphql.png',
        pairedCardId: 2,
        isOpen: true
    },
    {
        id: 2,
        name: "bootstrap",
        imageUrl: '/Images/png/bootstrap.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 3,
        name: "ejs",
        imageUrl: '/Images/png/ejs.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 4,
        name: "heroku",
        imageUrl: '/Images/png/heroku.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 5,
        name: "html",
        imageUrl: '/Images/png/html.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 6,
        name: "javascript",
        imageUrl: '/Images/png/javascript.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 7,
        name: "json",
        imageUrl: '/Images/png/json.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 8,
        name: "mongoDB",
        imageUrl: '/Images/png/mongoDB.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 9,
        name: "netlify",
        imageUrl: '/Images/png/netlify.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 10,
        name: "nodejs",
        imageUrl: '/Images/png/nodejs.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 11,
        name: "react",
        imageUrl: '/Images/png/react.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 12,
        name: "redis",
        imageUrl: '/Images/png/redis.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 13,
        name: "redux",
        imageUrl: '/Images/png/redux.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 14,
        name: "vscode",
        imageUrl: '/Images/png/vscode.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 15,
        name: "postman",
        imageUrl: '/Images/png/postman.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 16,
        name: "mongoose",
        imageUrl: '/Images/png/mongoose.png',
        pairedCardId: 1,
        isOpen: false
    }
]

export const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState: {
        items: memoryCardDeck,
        points: 0,
        isLoading: false,
        error: null,
        // activeFilter: localStorage.getItem('activeFilter'),
        // // addNewTodoIsLoading: false,
        // // addNewTodoError: null,
        // addNewTodo: {
        //     isLoading: false,
        //     error: false,
        // },
    },
    reducers: {
        toggleCards: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.isOpen = !item.isOpen;
        },

        // changeActiveFilter: (state, action) => {
        //     state.activeFilter = action.payload
        // },
        // clearCompleted: (state) => {
        //     const filtered = state.items.filter((item) => item.completed === false);
        //     state.items = filtered;
        // },
    },
    extraReducers: {
        // get todos
        // [getTodosAsync.pending]: (state, action) => {
        //     state.isLoading = true;
        // },
        // [getTodosAsync.fulfilled]: (state, action) => {
        //     state.items = action.payload;
        //     state.isLoading = false;
        // },
        // [getTodosAsync.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.error.message;
        // },
        // // add todo
        // [addTodosAsync.pending]: (state, action) => {
        //     state.addNewTodo.isLoading = true
        // },
        // [addTodosAsync.fulfilled]: (state, action) => {
        //     state.items.push(action.payload)
        //     state.addNewTodo.IsLoading = false
        // },
        // [addTodosAsync.rejected]: (state, action) => {
        //     state.addNewTodo.IsLoading = false;
        //     state.addNewTodo.Error = action.error.message;
        // },
        // // toggle todo
        // [toggleTodosAsync.fulfilled]: (state, action) => {
        //     const { id, completed } = action.payload
        //     const index = state.items.findIndex(item => item.id === id);
        //     state.items[index].completed = completed
        // },
        // // remove todo
        // // [removeTodosAsync.fulfilled]: (state, action) => {
        // //     const id = action.payload;
        // //     const filtered = state.items.filter((item) => item.id !== id);
        // //     state.items = filtered;
        // // },
        // // veya alttaki kullanılabilir
        // [removeTodosAsync.fulfilled]: (state, action) => {
        //     const id = action.payload;
        //     const index = state.items.findIndex((item) => item.id === id);
        //     state.items.splice(index, 1)
        // }
    }
});

// export const selectTodos = (state) => state.todos.items;
// export const selectFilteredTodos = (state) => {
//     if (state.todos.activeFilter === 'all') {
//         return state.todos.items;
//     }
//     return state.todos.items.filter((todo) => state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed === true)
// }

export const { toggleCards } = memoryCardsSlice.actions;
export default memoryCardsSlice.reducer;