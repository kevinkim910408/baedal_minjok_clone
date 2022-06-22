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
const initialState = {
    lists: [
        // restaurantList:[] ~ minprice까지
        // Menus:[] menuname ~ menuimg
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
            twomenuNameRef: "",
            twopriceRef: "",
            twoexplainRef: "",
            twomenuImgRef: "",
            threemenuNameRef: "",
            threepriceRef: "",
            threeexplainRef: "",
            threemenuImgRef: "",
        }
    ],
}

// thunk

// 포스트
export const __addPost = (payload) => async (dispatch, getState) => {
    const token = localStorage.getItem("Authorization");
    // console.log(payload);
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
            menuImg: payload.menuImg,
            twomenuNameRef: payload.twomenuNameRef,
            twopriceRef: payload.twopriceRef,
            twoexplainRef: payload.twoexplainRef,
            twomenuImgRef: payload.twomenuImgRef,
            threemenuNameRef: payload.threemenuNameRef,
            threepriceRef: payload.threepriceRef,
            threeexplainRef: payload.threeexplainRef,
            threemenuImgRef: payload.threemenuImgRef,

        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        // console.log(data)
        dispatch(addPost(data.data))
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


export default postReducer