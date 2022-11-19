-- Up
CREATE TABLE person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT,
  password TEXT
);

CREATE TABLE Vehicle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (username, email, password) values ('qwer', 'qwer@uiop.com', "123");
INSERT INTO Person (username, email, password) values ('asdf', 'asdf@uiop.com', "123");

INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'r8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'tt', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;