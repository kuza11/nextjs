-- Up


CREATE TABLE persons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT,
  title TEXT,
  description TEXT
);

CREATE TABLE languages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

CREATE TABLE tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  color TEXT,
  description TEXT
);

CREATE TABLE person_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  persons_id INTEGER,
  tags_id INTEGER,
  FOREIGN KEY (tags_id) REFERENCES tags(id),
  FOREIGN KEY (persons_id) REFERENCES persons(id)
);

CREATE TABLE logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  persons_id INTEGER,
  name TEXT,
  languages_id INTEGER,
  description TEXT,
  rating INTEGER,
  time NUMBER,
  date INTEGER,
  FOREIGN KEY (persons_id) REFERENCES persons(id),
  FOREIGN KEY (languages_id) REFERENCES languages(id)
);

CREATE TABLE tags_assignment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  logs_id INTEGER,
  tags_id INTEGER,
  FOREIGN KEY (tags_id) REFERENCES tags(id),
  FOREIGN KEY (logs_id) REFERENCES logs(id)
);

CREATE TABLE persons_languages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  persons_id INTEGER,
  languages_id INTEGER,
  total_time NUMBER,
  FOREIGN KEY (languages_id) REFERENCES languages(id),
  FOREIGN KEY (persons_id) REFERENCES persons(id)
);

INSERT INTO persons (username, password) values ('qwer', "123");
INSERT INTO persons (username, password) values ('asdf', "123");
INSERT INTO languages (name) values
  ("c"),
  ("cpp"),
  ("cs"),
  ("java"),
  ("javascript"),
  ("typescript"),
  ("python"),
  ("go"),
  ("kotlin"),
  ("php"),
  ("swift"),
  ("ruby"),
  ("matlab"),
  ("scala"),
  ("html"),
  ("css"),
  ("assembly"),
  ("fs"),
  ("fortran"),
  ("rust"),
  ("sql");


-- Down
DROP TABLE persons;
DROP TABLE languages;
DROP TABLE tags;
DROP TABLE tags_assignment;
DROP TABLE logs;
DROP TABLE person_tags;
DROP TABLE persons_languages;