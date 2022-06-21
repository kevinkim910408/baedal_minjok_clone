import api from '../../Shared/api'

// 액션 타입
const ADD_POST = 'post/ADD_POST'
const GET_POST = 'post/DONE_POST'

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
            restaurantDetail: {
                name: "",
                location: "",
                phone: "",
                img: null,
                openingHours: "",
                minPrice: "",
            },
            Menus: {
                menuname: "",
                price: "",
                explain: "",
                img: null,
            }
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
            img: payload.img,
            openingHours: payload.openingHours,
            minPrice: payload.minPrice,
            menuname: payload.menuname,
            price: payload.price,
            explain: payload.explain,
            img: payload.img
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