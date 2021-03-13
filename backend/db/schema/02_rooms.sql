DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE rooms(
    id SERIAL PRIMARY KEY NOT NULL,
    teacher_id INT REFERENCES teachers(id),
    room_name VARCHAR(255) NOT NULL,
    room_description VARCHAR(255) NOT NULL,
    start_time timestamp NOT NULL DEFAULT now(),
    end_time timestamp NOT NULL DEFAULT now(),
    link VARCHAR(255) NOT NULL
);