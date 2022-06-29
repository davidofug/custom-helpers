const sortStringsBy = ( strings = [], by = 'len', order = 'ASC' ) => {
  
  if( strings.length > 0 ) {
    
    if( by === 'len' ) {
      
      if ( order === 'ASC' ) {
        
        return strings.sort((a, b) => a.length - b.length);
      }
      
      return strings.sort((a, b) => b.length - a.length);
    }
    
    if( order === 'DESC' ) {
      return strings.sort((a, b) => b - a );
    }
    
    return strings.sort();
  }
  
  return strings;
}
