DROP DATABASE IF EXISTS greatbay;
CREATE DATABASE greatbay;

USE great_bay;

CREATE TABLE item(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  currentbid INTEGER(1000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("Whos Next", "The Who", "Classic Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

