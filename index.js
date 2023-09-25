
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const clone = { ...employee };
  clone[key] = value;
  return clone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const clone = { ...employee };
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

const employee = {
  name: 'Sam'
};