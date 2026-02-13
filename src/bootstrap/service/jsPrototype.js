Function.prototype.getName = function(){
  return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
}

Function.prototype.getParamKeys = function(){
  let _funStr = this.toString();
  // let _param = this.toString().match(/function\s*([^(].+[\)$])/)[1];
  // _param = _param.substring(this.getName().length + 1, _param.length-1);
  let _param = _funStr.substring(_funStr.indexOf('(')+1, _funStr.indexOf(')'));
  if(_param.length<=0)return [];
  _param = _param.split(',').map(function(keyName){ // 清洗多余字符
    return keyName.match(/\w+/)[0]
  });
  return _param;
}