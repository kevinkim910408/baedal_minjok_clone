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

// 중복체크
export const __postComment = ({ comment, id }) => async (dispatch) => {
    console.log(comment,id)
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
    const token = localStorage.getItem("Authorization");
    const data = await api.put(
      `/api/posts/${restaurantId}/review/${reviewId}`,
      {
        comment: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(updateComment(data.data));
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


// 초기값
const initialState = {
    comments:[],
    loading: false,
    error: null,
}

export default function commentReducer(state = initialState, { payload, type }) {
    switch (type) {
        case POST_COMMENT:
            return {
                ...state,
                comments: [...state.comments, payload],
            };
        case LOAD_COMMENT:
            return { ...state, comments: payload };
        // case UPDATE_COMMENT:
        //     const newChangeComment = state.comment.map((value) => {
        //         return value.commentId === Number(payload.commentId) ? payload : value;
        //     });
        //     return { ...state, comment: newChangeComment };
        case DELETE_COMMENT:
            const newDeletedComment = state.comments.filter((value) => {
                return value.reviewId !== Number(payload);
            });
            return { ...state, comments: [...newDeletedComment] };
        default:
            return state;
    }
} 