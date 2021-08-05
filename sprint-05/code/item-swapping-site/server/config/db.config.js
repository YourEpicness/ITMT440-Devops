module.exports = {
  HOST: "192.168.33.34",
  USER: "root",
  PASSWORD: "toor",
  DB: "iss",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
