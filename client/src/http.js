const BASE_URL = 'https://yumelog.herokuapp.com'

const csrfToken = document.getElementsByName("csrf-token").item(0).content;
const same_origin = {
  credentials: "same-origin"
};

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken
  }
};

const get_header = {
  method: "GET",
  ...same_origin,
  ...headers
};

const post_header = {
  method: "POST",
  ...same_origin,
  ...headers
};

const patch_header = {
  method: "PATCH",
  ...same_origin,
  ...headers
};

const delete_header = {
  method: "DELETE",
  ...same_origin,
  ...headers
};

const to_json = body => {
  return JSON.stringify(body);
};

export const get = path => {
  return fetch(BASE_URL + path).then(res => res.json());
};

export const get_with_auth = path => {
  return fetch(BASE_URL + path, { ...get_header }).then(res => res.json());
};

export const post = (path, params = {}) => {
  let body = to_json(params);
  return fetch(BASE_URL + path, { ...post_header, body }).then(res =>
    res.json()
  );
};

export const patch = (path, params = {}) => {
  let body = to_json(params);
  return fetch(BASE_URL + path, { ...patch_header, body }).then(res =>
    res.json()
  );
};

export const destroy = path => {
  return fetch(BASE_URL + path, { ...delete_header }).then(res =>
    res.json()
  );
};
