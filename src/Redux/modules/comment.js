import api from '../../Shared/api'

// 액션 타입
const POST_COMMENT = 'comment/GET_POSTDETAIL'

// 액션 함수
const postComment = (payload) => ({ type: POST_COMMENT, payload });

// 중복체크
export const __getPostDetail = ({ comment, id }) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    const data = await api.get(`/api/post/${id}/review`, {
        comment : comment
    },{
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    console.log(data)
    // dispatch(postComment(data.data.restaurantDetail));
}

// 초기값
const initialState = {
    detailLists:[],
    loading: false,
    error: null,
}

export default function detailReducer(state = initialState, { payload, type }) {
    switch (type) {
        case POST_COMMENT:
            return {
                ...state,
                detailLists: [...state.detailLists, payload],
            };
        default:
            return state;
    }
} 