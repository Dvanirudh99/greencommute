USE `green_commute`;

CREATE TABLE `save_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_save_jobs_1_idx` (`job_id`),
  CONSTRAINT `fk_save_jobs_1` FOREIGN KEY (`job_id`) REFERENCES `job` (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

