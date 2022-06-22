import api from '../../Shared/api'

// 액션 타입
const POST_COMMENT = 'comment/GET_POSTDETAIL'
const LOAD_COMMENT = "comment/LOAD_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

// 액션 함수
const postComment = (payload) => ({ type: POST_COMMENT, payload });
const loadComment = (payload) => ({ type: LOAD_COMMENT, payload });
const updateComment = (payload) => ({ type: UPDATE_COMMENT, payload });
const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload });

export const __postComment = ({ comment, id }) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    const data = await api.post(`/api/posts/${id}/review`, {
        review : comment
    },{
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    alert('댓글이 추가되었습니다')
    dispatch(postComment(data.data))
}

export const __loadComment = ({id}) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    const data = await api.get(`/api/posts/${id}/review`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(loadComment(data.data));
};

export const __updateComment = ({restaurantId, reviewId, comment}) => async (dispatch) => {
    console.log(restaurantId, reviewId, comment)
    const token = localStorage.getItem("Authorization");
    const data = await api.put(
      `/api/posts/${restaurantId}/review/${reviewId}`,
      {
        review: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert('댓글이 수정되었습니다')
    dispatch(updateComment(data.data.patchReviews));
};

export const __deleteComment = ({restaurantId, reviewId}) => async (dispatch) => {
    const token = localStorage.getItem("Authorization");
    await api.delete(`/api/posts/${restaurantId}/review/${reviewId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      alert("댓글이 삭제 되었습니다.");
    dispatch(deleteComment(reviewId));
  
};

const initialState = {
    comments:[],
    loading: false,
    error: null,
}

export default function commentReducer(state = initialState, { payload, type }) {
    switch (type) {
        case POST_COMMENT:
            return {...state, comments: payload };
        case LOAD_COMMENT:
            return { ...state, comments: payload };
        case UPDATE_COMMENT:
            const newChangeComment = state.comments.map((value) => {
                console.log(payload)
                return value.reviewId === Number(payload.reviewId) ? payload : value;
            });
            return { ...state, comments: newChangeComment };
        case DELETE_COMMENT:
            const newDeletedComment = state.comments.filter((value) => {
                return value.reviewId !== Number(payload);
            });
            return { ...state, comments: [...newDeletedComment] };
        default:
            return state;
    }
} 