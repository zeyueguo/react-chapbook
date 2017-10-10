/**
 * 用户的数据包括三部分，姓名（username）、年龄（age）、性别（gender）
 */

// /* 增加用户操作 */
// dispatch({
//   type: 'ADD_USER',
//   user: {
//     username: 'Lucy',
//     age: 12,
//     gender: 'female'
//   }
// })

// /* 通过 id 删除用户操作 */
// dispatch({
//   type: 'DELETE_USER',
//   index: 0 // 删除特定下标用户
// })

// /* 修改用户操作 */
// dispatch({
//   type: 'UPDATE_USER',
//   index: 0,
//   user: {
//     username: 'Tomy',
//     age: 12,
//     gender: 'male'
//   }
// })

function createStore(reducer) {
    let state = null;
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}


function usersReducer(state, action) {
    let index = 0;

    if (!state) {
        return {
            user: [
                {
                    index: 0,
                    username: 'Mai',
                    age: 22,
                    gender: 'male'
                }
            ]
        };
    }

    switch (action.type) {
        case 'ADD_USER':

            state.user.push({
                username: action.user.username,
                age: action.user.age,
                gender: action.user.gender,
                index: index + 1
            })
            return state;
        case 'DELETE_USER':
            state.user.splice(action.index, 1);
            return state;
        case 'UPDATE_USER':
            state.user.splice(action.index, 1, action.user);
            return state;
        default:
            return state;
    }
}

const store = createStore(usersReducer)

// console.log(store.getState());

store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Lucy',
        age: 12,
        gender: 'female'
    }
})

store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Lucy-1',
        age: 12,
        gender: 'female'
    }
})

store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Lucy-2',
        age: 12,
        gender: 'female'
    }
})

// console.log(store.getState());

store.dispatch({
    type: 'DELETE_USER',
    index: 2
})

// console.log(store.getState());

store.dispatch({
    type: 'UPDATE_USER',
    index: 0,
    user: {
        username: 'Tomy',
        age: 12,
        gender: 'male'
    }
})

console.log(store.getState());
// reducer(null, )


//   const usersReducer  = function(state, action){

//   }