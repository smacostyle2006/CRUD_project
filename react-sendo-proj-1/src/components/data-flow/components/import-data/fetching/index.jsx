// Hàm post/put đơn giản (bạn có thể dùng fetch hoặc axios)
export function put(url, data) {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

function get(url) {
  return fetch(url).then((res) => res.json());
}
