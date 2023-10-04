const inquirer = require("inquirer");

const displayStartUpQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "table",
      message: "Choose from the following.",
      choices: [
        "View all departments.",
        "View all roles.",
        "View all employees.",
        "Add a department.",
        "Add a role.",
        "Add an employee.",
        "Update an employee role.",
        "Exit.",
      ],
    },
  ]);
  return answer;
};

const displayAddDepartmentQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "Provide department name.",
    },
  ]);
  return answer;
};

const displayAddRoleQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "Provide the name of the role.",
    },
    {
      type: "input",
      name: "salary",
      message: "Provide the salary.",
    },
    {
      type: "input",
      name: "newDepartment",
      message: "Provide the department name.",
    },
  ]);
  return answer;
};

const displayAddEmployeeQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Provide employee first name.",
    },
    {
      type: "input",
      name: "lastName",
      message: "Provide employee last name.",
    },
    {
      type: "input",
      name: "role",
      message: "Provide employee role.",
    },
    {
      type: "input",
      name: "manager",
      message: "Provide employee manager.",
    },
  ]);
  return answer;
};

module.exports = {
  displayStartUpQ,
  displayAddDepartmentQ,
  displayAddRoleQ,
  displayAddEmployeeQ,
};
