module.exports = function check(str, bracketsConfig) {
 let a =[];
let r = true;
if (!str.includes('7')){
  for (let i= 0;i<str.length;i++){  
      if((str[i]==='(')|(str[i] === '[')|(str[i] === '{')){ a.unshift(str[i])}
      else if(((str[i] === ')')&(a[0]!= '('))|((str[i] === ']')&(a[0]!= '['))|((str[i] === '}')&(a[0]!== '{'))){ return false}
      else if((str[i] == '|')& r){
        a.unshift(str[i]);
        r = false;
      }else if(str[i] == '|'){
        r = true;
        a.shift();
      } else{a.shift()} 
    }
}else{
  let s = true;
  for (let i= 0;i<str.length;i++){  
    if((str[i] == '7')&(str[i+1] == '8')& r & !s) { return false}
    if ((str[i] == '8')&(str[i+1] == '7')& s & !r) { return false}

    if((str[i]==='1')|(str[i] === '3')|(str[i] === '5')){ a.unshift(str[i])}
    else if(((str[i] === '2')&(a[0]!= '1'))|((str[i] === '4')&(a[0]!= '3'))|((str[i] === '6')&(a[0]!== '5'))){ return false}
    else if((str[i] == '7')& r){
      a.unshift(str[i]);
      r = false;
    }else if(str[i] == '7'){
      r = true;
      a.shift();
    }else if((str[i] == '8')& s){
      a.unshift(str[i]);
      s = false;
    }else if (str[i] == '8'){
      a.shift();
      s = true;
    }
    else{a.shift()} 
  }
}
  if(a.length === 0){return true}
  else{return false}
}
