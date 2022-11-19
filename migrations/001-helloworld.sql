-- Up
CREATE TABLE Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Vehicle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('qwer', 'qwer@uiop.com');
INSERT INTO Person (name, email) values ('asdf', 'asdf@uiop.com');

INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'r8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'tt', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;