export const truncateText = (str) => {
    if(str.length < 15) return str;
    return str.substring(0 , 10)    
}