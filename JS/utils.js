function query(key) {
  const params = new URLSearchParams(window.location.search);
  // console.log(params);
  return params.get(key);
}
