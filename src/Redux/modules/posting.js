import api from '../../Shared/api'

// 액션 타입
const LOAD_CATEGORY = 'post/LOAD_Category'
const LOAD_MENUS = 'post/Menus'
const ADD_POST = 'post/ADD_POST'
const DONE_POST = 'post/DONE_POST'

const GET_POST_REQUEST = 'post/GET_POST_REQUEST'
const GET_POST_ERROR = 'post/GET_POST_ERROR'

// 액션 함수
const loadCategory = (payload) => ({ type: LOAD_CATEGORY, payload });
const loadMenus = (payload) => ({ type: LOAD_MENUS, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const donePost = (payload) => ({ type: DONE_POST, payload });

const getPostRequest = (payload) => ({ type: GET_POST_REQUEST, payload });
const getPostError = (payload) => ({ type: GET_POST_ERROR, payload });

// 초기값
const initialState = {
    restaurantlist: [],
    menus: [],
}

// thunk

// 포스트
export const __addPost = (payload) => async (dispatch, getState) => {
    dispatch(getPostRequest(true))
    try {
        const data = await api.post('/api/posts', {
            categoryId: payload.categoryId,
            name: payload.name,
            location: payload.location,
            phone: payload.phone,
            img: payload.img,
            openingHours: payload.openingHours,
            minPrice: payload.minPrice,
        })
        localStorage.setItem("Authorization", data.data.token);
        dispatch(addPost(data.data))
    } catch (error) {
        dispatch(getPostError(error))
    } finally {
        dispatch(getPostRequest(false))
    }
}

// 리듀서
const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CATEGORY:
            return { ...state, list: payload }
        case LOAD_MENUS:
            return { ...state, list: payload }
        case ADD_POST:
            return { ...state, list: [...state.list, payload] }
        case GET_POST_REQUEST:
            return { ...state, loading: payload }
        case GET_POST_ERROR:
            return { ...state, error: payload }
        default:
            return state;
    }
}

export default postReducer;





// "restaurantList": [
//     {
//       "restaurantId": 8,
//       "name": "족발나라",
//       "categoryId": 12,
//       "location": "영등포점",
//       "phone": "07012345678",
//       "img": "url",
//       "openingHours": "오전11시",
//       "minPrice": 20000,
//       "star": null,
//       "review": null,
//       "ownerReview": null,
//       "like": null,
//       "createdAt": "2022-06-20T14:46:06.000Z",
//       "updatedAt": "2022-06-20T14:46:06.000Z",
//       "Category": {
//         "categoryId": 12,
//         "category": "족발,보쌈",
//         "createdAt": "2022-06-20T10:36:28.000Z",
//         "updatedAt": "2022-06-20T10:36:28.000Z"
//       }
//     }],
//       "Menus": [
//         {
//           "menuId": 8,
//           "menuName": "족발(大)",
//           "price": 30000,
//           "restaurantId": 8,
//           "explain": "일본이 놀라 자빠지고 중국이 탐내는 족발",
//           "img": null,
//           "createdAt": "2022-06-20T15:13:30.000Z",
//           "updatedAt": "2022-06-20T15:13:30.000Z"
//         }
//       ]