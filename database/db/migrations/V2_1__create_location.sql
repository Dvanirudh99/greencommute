USE `green_commute`;

CREATE TABLE `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(45) DEFAULT NULL,
  `aqi` int DEFAULT NULL,
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `location_id_UNIQUE` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;