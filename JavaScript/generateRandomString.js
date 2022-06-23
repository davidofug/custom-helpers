let generateRandomString = (len) => {
  let randomString = "";

  while (randomString.length < len) {
    randomString += Math.random().toString(36).substr(2);
  }

  return randomString.substr(0, len);
};

generateRandomString(3); // k8p 


generateRandomString(8); // 712kpd1h 

generateRandomString(12); //bb8iut7odvu4 
