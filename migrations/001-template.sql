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
  time NUMBER,
  date TEXT,
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
  ("_c"),
  ("_cpp"),
  ("_cs"),
  ("_java"),
  ("_javascript"),
  ("_typescript"),
  ("_python"),
  ("_go"),
  ("_kotlin"),
  ("_php"),
  ("_swift"),
  ("_r"),
  ("_ruby"),
  ("_matlab"),
  ("_scala"),
  ("_html"),
  ("_css"),
  ("_assembly"),
  ("_fs"),
  ("_fortran"),
  ("_rust"),
  ("_sql");


-- Down
DROP TABLE person;
DROP TABLE languages;
DROP TABLE tags;
DROP TABLE tags_assignment;
DROP TABLE logs;
DROP TABLE person_tags;
DROP TABLE persons_languages;