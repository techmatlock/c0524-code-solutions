/* exported getPropertyValue */
function getPropertyValue(object: object, key: keyof object): any {
  return object[key];
}
