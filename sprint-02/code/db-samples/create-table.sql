USE iss;

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS=0;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE users (
  user_id int NOT NULL,
  first_name varchar(255),
  last_name varchar(255),
  email varchar(255),
  phone_number int,
  student_id int,
  karma_points int NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE = InnoDB;

CREATE TABLE karma_points (
  karma_id int NOT NULL,
  karma_points int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (karma_id)
) ENGINE = InnoDB;

CREATE TABLE orders (
  order_id int NOT NULL,
  order_status varchar(255),
  order_date date,
  pickup_date date,
  request_item varchar(255),
  user_id int,
  PRIMARY KEY (order_id)
) ENGINE = InnoDB;

CREATE TABLE order_item (
  item_id int NOT NULL,
  order_id int,
  product_id int,
  lp_id int,
  PRIMARY KEY (item_id)
) ENGINE = InnoDB;

CREATE TABLE products (
  product_id int NOT NULL,
  product_name varchar(255),
  category_id int,
  order_id int,
  item_id int,
  lp_id int,
  PRIMARY KEY (product_id)
) ENGINE = InnoDB;

CREATE TABLE list_price (
  lp_id int NOT NULL,
  free varchar(255),
  trade varchar(255),
  price double,
  item_id int,
  product_id int,
  category_id int,
  order_id int,
  PRIMARY KEY (lp_id)
) ENGINE = InnoDB;

CREATE TABLE category (
  category_id int NOT NULL,
  category_name varchar(255),
  PRIMARY KEY (category_id)
) ENGINE = InnoDB;

ALTER TABLE users
ADD FOREIGN KEY (karma_points) REFERENCES karma_points(karma_id);

ALTER TABLE karma_points
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE orders
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE order_item
ADD FOREIGN KEY (order_id) REFERENCES orders(order_id),
ADD FOREIGN KEY (product_id) REFERENCES products(product_id),
ADD FOREIGN KEY (lp_id) REFERENCES list_price(lp_id);

ALTER TABLE products
ADD FOREIGN KEY (order_id) REFERENCES orders(order_id),
ADD FOREIGN KEY (category_id) REFERENCES category(category_id),
ADD FOREIGN KEY (item_id) REFERENCES order_item(item_id),
ADD FOREIGN KEY (lp_id) REFERENCES list_price(lp_id);

ALTER TABLE list_price
ADD FOREIGN KEY (item_id) REFERENCES order_item(item_id),
ADD FOREIGN KEY (product_id) REFERENCES products(product_id),
ADD FOREIGN KEY (category_id) REFERENCES category(category_id),
ADD FOREIGN KEY (order_id) REFERENCES orders(order_id);
