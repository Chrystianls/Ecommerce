CREATE TYPE size AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

CREATE TABLE IF NOT EXISTS pants (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    size size NOT NULL,
    color VARCHAR(255) NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shirts (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    size size NOT NULL,
    color VARCHAR(255) NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shorts (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    size size NOT NULL,
    color VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);