import api from '../../Shared/api'

// 액션 타입
const GET_POSTDETAIL = 'detail/GET_POSTDETAIL'
const GET_REQUEST_LOADING = 'detail/GET_REQUEST_LOADING';

// 액션 함수
const getPostDetail = (payload) => ({ type: GET_POSTDETAIL, payload });
const getRequestLoading = (payload) => ({ type: GET_REQUEST_LOADING, payload });

// 중복체크
export const __getPostDetail = ({ id }) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    dispatch(getRequestLoading(true));
    try {
        const data = await api.get(`/api/post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        dispatch(getPostDetail(data.data.restaurantDetail));
    } catch (error) {
        // alert('이미 있는 아이디 입니다');
    } finally {
        dispatch(getRequestLoading(false))
    }
}

// 초기값
const initialState = {
    detailLists:[],
    loading: false,
    error: null,
}

export default function detailReducer(state = initialState, { payload, type }) {
    switch (type) {
        case GET_POSTDETAIL:
            return {
                ...state,
                detailLists: payload,
            };
        case GET_REQUEST_LOADING:
            return {
                ...state,
                loading: payload,
            }
        default:
            return state;
    }
} 