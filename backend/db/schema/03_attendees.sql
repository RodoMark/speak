DROP TABLE IF EXISTS attendees CASCADE;
CREATE TABLE attendees(
    id SERIAL PRIMARY KEY NOT NULL,
    room_id INT REFERENCES rooms(id),
    attendee_name VARCHAR(255) NOT NULL, 
    feedback text 
);