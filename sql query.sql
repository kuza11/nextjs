DROP VIEW vw;
CREATE VIEW vw AS SELECT logs.name, logs.description, logs.time, logs.date, logs.persons_id, tags_assignment.tags_id from logs INNER JOIN tags_assignment ON logs.id = tags_assignment.logs_id;
SELECT vw.name, vw.description, vw.time, vw.date, tags.name, tags.description, tags.color FROM vw INNER JOIN tags ON vw.tags_id = tags.id;
DROP VIEW vw;

--SELECT * FROM logs;
SELECT * FROM tags_assignment INNER JOIN tags on	tags_assignment.tags_id = tags.id WHERE tags_assignment.logs_id = 1;
SELECT tags.id, tags.name, tags.color, tags.description FROM tags_assignment INNER JOIN tags on	tags_assignment.tags_id = tags.id WHERE tags_assignment.logs_id = 1;
--SELECT * FROM languages WHERE id = 2;
