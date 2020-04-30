
DROP DATABASE IF EXISTS shmetsy;

CREATE DATABASE shmetsy;

USE shmetsy;

CREATE TABLE colors (
  id INTEGER AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  color_name TEXT,
  color_url TEXT,
  PRIMARY KEY (ID)
);

INSERT INTO colors (id, product_id, color_name, color_url) VALUES (1, 1, "Black", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2290355171_9ptb.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (2, 1, "White", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2242845984_3gqq.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (3, 1, "Caribbean Blue", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2242758170_bqpz.jpg
");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (4, 1, "Royal", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2290355929_997u.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (5, 1, "Safety Green", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2290355215_hrh6.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (6, 1, "Charcoal", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2290355227_i426.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (7, 1, "Pink", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2290355259_8b6t.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (8, 1, "Orange", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_794xN.2305171587_j74a.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (9, 1, "Black/White", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_794xN.2276118790_bg1a.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (10, 1, "USA", "https://hrr45fec.s3-us-west-1.amazonaws.com/mask_colors/il_1588xN.2242758290_5g93.jpg");


