/*
* @SimonHoiberg
*/

const generateUID = () => {
  
  const head = Date.now().toString(36);
  
  const tail = Math.random().toString(36).substring(2);
  
  return `${head}${tail}`;
};

generateUID(); //
generateUID(); //
generateUID(); //

