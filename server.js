const {
  getDepartmentData,
  getRoleData,
  getEmployeeData,
} = require("./db/dbQueries");
const { displayStartUpQ } = require("./prompts");

const startApp = async () => {
  var answer = await displayStartUpQ();
  while (answer.table !== "Exit.") {
    switch (answer.table) {
      case "View all departments.":
        await getDepartmentData();
        break;
      case "View all roles.":
        await getRoleData();
        break;
      case "View all employees.":
        await getEmployeeData();
        break;
    }
    answer = await displayStartUpQ();
  }
};

startApp();
