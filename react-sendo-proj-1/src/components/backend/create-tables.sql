/*ALLPRODUCTS*/
DROP TABLE IF EXISTS Product;
CREATE TABLE Product (
   id serial not null primary key,
   name VARCHAR(128) NOT NULL,
   descrip VARCHAR(1000) NOT NULL,
   price FLOAT(53) NOT NULL,
   image VARCHAR(1000) NOT NULL
);

/* \c allproducts*/
/* \i C:/Users/Admin/Documents/Coding/react-sendo-proj/product-backend/src/modules/create-tables.sql */
/* SELECT * FROM PRODUCT; */
