module.exports ={
  "type": "postgres",
  "port": process.env.ORM_PORT,
  "host": process.env.ORM_HOST,
  "username": process.env.ORM_USERNAME,
  "password": process.env.ORM_PASSWORD,
  "database": "rentx",
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
