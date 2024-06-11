"use strict";
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
    name: 'Carl',
    details: {
        age: 82,
    },
};
v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');
const config1 = v1 || 'default-value';
const config2 = 'default-value' || v2;
console.log('config1:', config1);
console.log('config2:', config2);
const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';
console.log('cfg1:', cfg1);
console.log('cfg2:', cfg2);
console.log('cfg3:', cfg3);
