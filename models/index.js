/*// import models
const Product = require('./Product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

  // Products belongsTo Category
  Product.belongsTo(Category, {
    foreignKey: "category_id",
    // onDelete: "CASCADE",
    as: "product_category"
  });

  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: "category_id",
    // onDelete: "CASCADE",
    as: "product_category"
  });

  // Products belongToMany Tags (through ProductTag)
  Product.belongsToMany(Tag, {
    through: {
      model: ProductTag,
      unique: false
    },
    as: "tags"
  });

  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false
    },
    as: "products"
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}; */

// import models 
const Product = require('./Product'); 
const Category = require('./category'); 
const Tag = require('./tag'); 
const ProductTag = require('./productTag');

//Products.belongsTo.Category 
Product.belongsTo(Category, { foreignKey: "category_id", 
// onDelete: "CASCADE", as: "product_category" });

// Categories have many Products 
Category.hasMany(Product, { foreignKey: "category_id", 
// onDelete: "CASCADE", as: "product_category" });

// Products belongToMany Tags (through ProductTag) 
Product.belongsToMany(Tag, { through: { model: ProductTag, unique: false }, as: "tags" });

// Tags belongToMany Products (through ProductTag) 
Tag.belongsToMany(Product, { through: { model: ProductTag, unique: false }, as: "products" });

module.exports = { Product, Category, Tag, ProductTag, };

