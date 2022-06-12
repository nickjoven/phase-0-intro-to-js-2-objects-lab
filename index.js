// Program purpose: keep record of employees

// First initialize employee object
const employee = {
    name: "Muffin Man",
    streetAddress: "Drury Lane" 
};

// Next create function as decribed in readme
// Personal note, obj,[key]: value is standard, colon signifies key val pair

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj,
        [key]: value,
    };
};

// Next function destructive update

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

// Delete employee by key nondestructively (spread)

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj }
    delete newObj[key];
    return newObj;
};

let newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee)

// Delete employee by key destructively

/*function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};
*/

/* function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    const newObject = Object.assign(employee, Key)
    delete newObject[Key];
    return newObject;
}
// I guess?
*/
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  };