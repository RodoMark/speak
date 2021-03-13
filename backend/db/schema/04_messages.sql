DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages(
    id SERIAL PRIMARY KEY NOT NULL,
    attendee_id INT REFERENCES attendees(id),
    time_stamp timestamp NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
    message_content VARCHAR(1024)
);

