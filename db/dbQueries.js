const { connect } = require("./dbConnection");

const getDepartmentData = async () => {
  const connection = await connect();
  const [rows, columns] = await connection.execute("SELECT * FROM department");
  console.log("rows", rows);
  console.log("columns", columns);
};
const getRoleData = async () => {
  const connection = await connect();
  const [rows, columns] = await connection.execute("SELECT * FROM role");
  console.log("rows", rows);
  console.log("columns", columns);
};
const getEmployeeData = async () => {
  const connection = await connect();
  const [rows, columns] = await connection.execute("SELECT * FROM employee");
  console.log("rows", rows);
  console.log("columns", columns);
};

module.exports = { getDepartmentData, getRoleData, getEmployeeData };
