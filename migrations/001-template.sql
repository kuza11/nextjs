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
  persons_id INTEGER FOREIGN KEY REFERENCES persons(id),
  tags_id INTEGER FOREIGN KEY REFERENCES tags(id)
);

CREATE TABLE logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  persons_id INTEGER FOREIGN KEY REFERENCES persons(id),
  name TEXT,
  languages_id INTEGER FOREIGN KEY REFERENCES languages(id),
  description TEXT,
  time NUMBER,
  date TEXT
);

CREATE TABLE tags_assignment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  logs_id INTEGER FOREIGN KEY REFERENCES logs(id),
  tags_id INTEGER FOREIGN KEY REFERENCES tags(id)
);

CREATE TABLE persons_languages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  persons_id INTEGER FOREIGN KEY REFERENCES persons(id),
  languages_id INTEGER FOREIGN KEY REFERENCES languages(id),
  total_time NUMBER
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
  ("rust"),
  ("_sq");


-- Down
DROP TABLE person;
DROP TABLE prog_lang;