
CREATE TABLE `client` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `dni` varchar(9) NOT NULL,
  `name` int(32) NOT NULL,
  `surname` int(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `project` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nPanels` int(8) NOT NULL,
  `dateInscription` date NOT NULL,
  `orientation` varchar(32) NOT NULL,
  `surface` int(12) NOT NULL,
  `poblation` varchar(32) NOT NULL,
  `adress` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `style` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `logo` varchar(132) NOT NULL,
  `primary` varchar(132) NOT NULL,
  `secondary` varchar(132) NOT NULL,
  `terciary` varchar(132) NOT NULL,
  `font` varchar(132) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `token` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) NOT NULL,
  `dateInscription` date NOT NULL,
  `dateExpiration` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
);

CREATE TABLE `business` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `cif` varchar(32) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `poblation` varchar(32) NOT NULL,
  `adress` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `tokenId` tinyint(4) NOT NULL,
  `styleId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`tokenId`) REFERENCES token(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`styleId`) REFERENCES style(`id`) ON DELETE CASCADE
);

CREATE TABLE `budget` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `precio` int(12) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `businessId` tinyint(4) NOT NULL,
  `clientId` tinyint(4) NOT NULL,
  `projectId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`businessId`) REFERENCES business(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`clientId`) REFERENCES client(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`projectId`) REFERENCES project(`id`) ON DELETE CASCADE
);