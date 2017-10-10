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
      user: {
        username: 'Mai',
        age: 22,
        gender: 'male'
      }
    };
  }

  switch (action.type) {
    case 'ADD_USER':
      return state.push({
        user: action.user,
        index: index + 1
      })
    case 'DELETE_USER':
      return state.splice(action.index, 1)
    case 'UPDATE_USER':
      return state.splice(action.index, 1, action.user)
    default:
      return state;
  }
}

const store = createStore(usersReducer)




// reducer(null, )


//   const usersReducer  = function(state, action){

//   }