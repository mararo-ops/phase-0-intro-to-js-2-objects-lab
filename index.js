const employee = {
    name:"james",
    streetAddress:"nairobi"
}
function updateEmployeeWithKeyAndValue(obj,key,value) {
    return {...obj,[key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj,key) {
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}   
function destructivelyDeleteNewEmployeeByKey(obj,key) {
    delete obj[key];
    return obj;
}
