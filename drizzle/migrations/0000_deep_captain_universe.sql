CREATE TABLE `todos` (
	`header` text NOT NULL,
	`description` text DEFAULT '',
	`done` integer DEFAULT false NOT NULL
);
