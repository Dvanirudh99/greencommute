USE `green_commute`;

CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `location_id` int NOT NULL,
  `company_name` varchar(45) NOT NULL,
  PRIMARY KEY (`company_id`),
  KEY `location_id_idx` (`location_id`),
  CONSTRAINT `location_id` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;