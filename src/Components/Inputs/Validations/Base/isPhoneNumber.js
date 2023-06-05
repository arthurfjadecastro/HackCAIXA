const isPhoneNumber = (text) =>
  /^\(?\d\d\)? ?\d ?\d{3,4}[ -]?\d{4}$/.test(text);
export default isPhoneNumber;