CREATE TABLE "lesson" (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    tree_position TEXT NOT NULL,
    game_type TEXT NOT NULL,
    content TEXT
);

CREATE TABLE "user" (
    id SERIAL NOT NULL PRIMARY KEY,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    progress SMALLINT NOT NULL,
    is_admin BOOLEAN
);

CREATE TABLE "leader_board" (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    progress SMALLINT NOT NULL,
);

CREATE TABLE "ads" (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    count INT NOT NULL,
    shows INT NOT NULL
);
