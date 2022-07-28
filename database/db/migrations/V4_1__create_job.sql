USE `green_commute`;

CREATE TABLE `job` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `time_posted` varchar(45) NOT NULL,
  `skill_id` int NOT NULL,
  `company_id` int NOT NULL,
  `address` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `distance` varchar(45) NOT NULL,
  PRIMARY KEY (`job_id`),
  UNIQUE KEY `job_id_UNIQUE` (`job_id`),
  KEY `fk_job_1_idx` (`skill_id`),
  KEY `fk_job_2_idx` (`company_id`),
  CONSTRAINT `fk_job_1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`),
  CONSTRAINT `fk_job_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;