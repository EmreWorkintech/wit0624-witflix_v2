export const errorMessages = {
  email: "Geçerli bir email adresi giriniz!...",
  password:
    "Password'ünüz en az 8 karakter olmalı, en az 1 büyük harf ve 1 küçük harf içermeli.",
  terms: "Kayıt olabilmek için anlaşma şartlarını kabul etmelisiniz!...",
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (pass) => {
  return (
    pass.trim().length >= 8 &&
    pass.toLowerCase() !== pass &&
    pass.toUpperCase() !== pass
  );
};
