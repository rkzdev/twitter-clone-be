CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`password` text,
	`role` text,
	`created_at` integer,
	`updated_at` integer
);
