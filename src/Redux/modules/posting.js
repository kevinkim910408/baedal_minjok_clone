import api from '../../Shared/api'

// 액션 타입
const ADD_POST = 'post/ADD_POST'
const GET_POST = 'post/GET_POST'

const GET_POST_REQUEST = 'post/GET_POST_REQUEST'
const GET_POST_ERROR = 'post/GET_POST_ERROR'

// 액션 함수
const getMenus = (payload) => ({ type: GET_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });

const getPostRequest = (payload) => ({ type: GET_POST_REQUEST, payload });
const getPostError = (payload) => ({ type: GET_POST_ERROR, payload });

// 초기값
const initialState = {
    lists: [
        {
            name: "",
            location: "",
            phone: "",
            logoImg: "",
            openingHours: "",
            minPrice: "",
            menuName: "",
            price: "",
            explain: "",
            menuImg: "",
        }
    ],
}

// thunk

// 포스트
export const __addPost = (payload) => async (dispatch, getState) => {
    const token = localStorage.getItem("Authorization");
    dispatch(getPostRequest(true))
    try {
        const data = await api.post('/api/posts', {
            categoryId: payload.categoryId,
            name: payload.name,
            location: payload.location,
            phone: payload.phone,
            logoImg: payload.logoImg,
            openingHours: payload.openingHours,
            minPrice: payload.minPrice,
            menuName: payload.menuName,
            price: payload.price,
            explain: payload.explain,
            menuImg: payload.menuImg
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        console.log(data)

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
        case GET_POST:
            return { ...state, lists: payload }
        case ADD_POST:
            return { ...state, lists: [...state.lists, payload] }
        case GET_POST_REQUEST:
            return { ...state, loading: payload }
        case GET_POST_ERROR:
            return { ...state, error: payload }
        default:
            return state;
    }
}

export default postReducer;