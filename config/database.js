module.exports = {
  "username": process.env.USERNAME || "",
  "password": process.env.PASSSWORD || "",
  "database": process.env.DATABASE || "products",
  "dialect": process.env.DIALECT || "sqlite",
  "storage": process.env.STORAGE || "database.sqlite",
  "host": process.env.HOST || "",
  "port": process.env.PORT || "",
  "ssl": true,
  "native": true
}
