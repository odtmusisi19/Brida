import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
    },

    Price: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Products;
