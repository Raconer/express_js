import jwt from "jsonwebtoken";
const secret = process.env.SECRET_KEY;

export let create = (data) => {
  // access token 발급
  const payload = {
    // access token에 들어갈 payload
    email: data.email,
  };
  return jwt.sign(payload, secret, {
    // secret으로 sign하여 발급하고 return
    algorithm: "HS256", // 암호화 알고리즘
    expiresIn: "10m", // 유효기간
  });
};

export let createRefresh = () => {
  return jwt.sign({}, secret, {
    algorithm: "HS256",
    expiresIn: "20m",
  });
};

export let decode = (token) => {
  let decoded = null;
  try {
    decoded = jwt.decode(token);
    return {
      ok: true,
      id: decoded.id,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};
export let verify = (token) => {
  // access token 검증
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      id: decoded.id,
      // role: decoded.role,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};
