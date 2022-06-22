import api from '../../Shared/api'

// 액션 타입
const ADD_POST = 'post/ADD_POST'
const GET_POST = 'post/GET_POST'

const GET_POST_REQUEST = 'post/GET_POST_REQUEST'
const GET_POST_ERROR = 'post/GET_POST_ERROR'

// 액션 함수
const getPost = (payload) => ({ type: GET_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });

const getPostRequest = (payload) => ({ type: GET_POST_REQUEST, payload });
const getPostError = (payload) => ({ type: GET_POST_ERROR, payload });

// 초기값
const initialState = [

]
// thunk

// 포스트
export const __addPost = (payload) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    dispatch(getPostRequest(true))
    try {
        await api.post('/api/posts', [
            {
                name: payload.name,
                location: payload.location,
                phone: payload.phone,
                logoImg: payload.logoImg,
                openingHours: payload.openingHours,
                minPrice: payload.minPrice,
                category: "치킨",
            },
            {
                menuName: payload.menuName,
                price:payload.price,
                explain: payload.explain,
                menuImg: payload.menuImg
            },
            {
                menuName: payload.menuNameTwo,
                price: payload.priceTwo,
                explain: payload.explainTwo,
                menuImg: payload.menuImgTwo
            },
            {
                menuName: payload.menuNameThree,
                price: payload.priceThree,
                explain: payload.explainThree,
                menuImg: payload.menuImgThree
            }
        ], {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        // dispatch(addPost(data.data))
    } catch (error) {
        dispatch(getPostError(error))
    } finally {
        dispatch(getPostRequest(false))
    }
}

// get
export const __getPost = () => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    try {
        const data = await api.get(`/api/post`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch(getPost(data.data))
        console.log(data.data.restaurantList)
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
        // case ADD_POST:
        //     return { ...state, lists: [...state.lists, payload] }
        case GET_POST_REQUEST:
            return { ...state, loading: payload }
        case GET_POST_ERROR:
            return { ...state, error: payload }
        default:
            return state;
    }
}


export default postReducer