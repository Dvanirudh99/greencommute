USE `green_commute`;

CREATE TABLE `skill` (
  `skill_id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(45) NOT NULL,
  PRIMARY KEY (`skill_id`),
  UNIQUE KEY `skill_id_UNIQUE` (`skill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;