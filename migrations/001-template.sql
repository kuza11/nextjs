-- Up
CREATE TABLE person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT,
  password TEXT
);

CREATE TABLE prog_lang (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ownerId INTEGER REFERENCES Person(id),
  _c NUMBER,
  _cpp NUMBER,
  _cs NUMBER,
  _java NUMBER,
  _javascript NUMBER,
  _typescript NUMBER,
  _python NUMBER,
  _go NUMBER,
  _kotlin NUMBER,
  _php NUMBER,
  _swift NUMBER,
  _r NUMBER,
  _ruby NUMBER,
  _matlab NUMBER,
  _scala NUMBER,
  _html NUMBER,
  _css NUMBER,
  _assembly NUMBER,
  _fs NUMBER,
  _fortran NUMBER,
  _sql NUMBER





);

INSERT INTO person (username, email, password) values ('qwer', 'qwer@uiop.com', "123");
INSERT INTO person (username, email, password) values ('asdf', 'asdf@uiop.com', "123");


-- Down
DROP TABLE person;
DROP TABLE prog_lang;