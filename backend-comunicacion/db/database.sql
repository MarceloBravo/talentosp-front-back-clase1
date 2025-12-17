CREATE DATABASE IF NOT EXISTS posts_db;
USE posts_db;

CREATE TABLE IF NOT EXISTS posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    autor VARCHAR(100) NOT NULL,
    estado ENUM('borrador', 'publicado', 'archivado') DEFAULT 'borrador',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    autor VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    email VARCHAR(255),
    estado ENUM('pendiente', 'aprobado','rechazado') DEFAULT 'pendiente',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO posts (titulo, contenido, autor, estado) VALUES
('Primer Post', 'Este es el contenido del primer post.', 'Juan Perez', 'publicado'),
('Segundo Post', 'Contenido del segundo post va aquí.', 'Maria Gomez', 'borrador');

INSERT INTO comentarios (post_id, autor, contenido, email, estado) VALUES
(1, 'Ana Lopez', 'Excelente post, muy informativo.','ana@ejemplo.com','pendiente'),
(1, 'Carlos Ruiz', 'No estoy de acuerdo con algunos puntos.','carlos@ejemplo.com', 'aprobado'),
(2, 'Luis Fernandez', 'Espero que publiques más sobre este tema.','luis@ejemplo.com', 'pendiente');