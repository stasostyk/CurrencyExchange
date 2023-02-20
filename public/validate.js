function validate(obj) {
  if (/^[\d]*$/.test(obj.value) ||
      /^[\d]*\.[\d]{0,2}$/.test(obj.value) ||
      /^\.[\d]{0,2}$/.test(obj.value)) {
    return true;
  }

  obj.value = obj.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  if (obj.value.indexOf('.') > -1) {
    if (obj.value.substring(obj.value.indexOf('.')).length > 3) {
      obj.value = obj.value.substring(0, obj.value.indexOf('.')+3)
    }
  }
  return false;
}
