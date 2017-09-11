export const fetchAllLikes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/likes'
  })
);

export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { like }
  })
);

export const deleteLike = like => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${like.user_id}`,
    data: { like }
  })
)
