-- CREATE DATABASE "hamburgy"
-- WITH OWNER "postgres"
-- ENCODING 'UTF8'
-- LC_COLLATE = 'pt_BR.UTF-8'
-- LC_CTYPE = 'pt_BR.UTF-8'
-- TEMPLATE template0;

-- CREATE TABLE restaurants (
--     id BIGSERIAL PRIMARY KEY NOT NULL,
--     name VARCHAR(250) NOT NULL,
--     address VARCHAR(500) NOT NULL,
--     opening_hours VARCHAR(250) NOT NULL,
--     menu TEXT,
--     latitude REAL NOT NULL,
--     longitude REAL NOT NULL
-- );

-- CREATE TABLE comments (
--     comment_id BIGSERIAL PRIMARY KEY NOT NULL,
--     restaurant_id INT NOT NULL,
--     author VARCHAR(20) NOT NULL,
--     rating REAL,
--     check(rating >= 0 and rating <= 5),
--     comment VARCHAR(250) NOT NULL
-- );

SET CLIENT_ENCODING = 'UTF8';

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('República do Hambúrguer', 'Av. Anita Garibaldi, 1150', '12:00 até 14:00 18:30 até 23:30', 
'http://www.narepublica.com.br/', -25.4017713, -49.2585144);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Welcome Hamburgueria', 'R. Prof. Joaquim de Matos Barreto, 296', '11:30 até 14:30 17:30 até 22:00', 
'http://business.google.com/website/welcomehamburgueria', -25.3892516,-49.2702353);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Food Truck Jajarka', 'R. Cel. Amazonas Marcondes, 1160', '18:30 até 22:30', 
'https://www.ifood.com.br/delivery/curitiba-pr/jajarka-burguer-cabral/2e95728d-5d5c-4576-a02f-0792ebaab8f0', -25.3992342,-49.2535593);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Matteo Special Burgers', 'R. Dep. Carneiro de Campos, 325', '18:00 até 23:00', 
'https://www.ifood.com.br/delivery/curitiba-pr/matteo-special-burgers-hugo-lange/8395383a-90ce-45d6-a2ac-4780f3cc5400', -25.4161213, -49.2456573);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('The Chef''s Burger', 'R. Jorn. Alceu Chichorro, 305', '12:00 até 22:00',
'https://www.ifood.com.br/delivery/curitiba-pr/the-chefs-burger-bairro-alto/63f91d53-164f-4d97-a25b-fd0081603a52',
 -25.4135254,-49.2052406);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Fábrica Gourmet', 'R. Trajano Reis, 443', '18:30 até 23:00',
'https://fabricahamburgueria.totem.net.br/',
 -25.4234091,-49.2743792);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Chelsea Burgers & Shakes', 'R. Mal. Hermes, 113', '11:30 até 22:00',
'https://www.chelseaburger.com.br/menu',
-25.4181334,-49.2656345);

INSERT INTO restaurants (name, address, opening_hours, menu, latitude, longitude) 
VALUES ('Hamburgueria no Bosque', 'R. dos Capuchinhos, 30', '19:00 até 22:30',
'https://www.ifood.com.br/delivery/curitiba-pr/hamburgueria-no-bosque-merces/1fb03152-3d19-4716-b06d-8c68232ab239',
-25.4172352,-49.2922279);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('TBurguer', 'Rua João Tschannerl, 411', '19:00 até 22:30','#',
-25.4076184,-49.2926054);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Marujo''s Burguer', 'Rua Alvaro Botelho, 23', '11:00 até 14:30 18:00 até 23:00','https://www.ifood.com.br/delivery/curitiba-pr/marujos-burguer---bacacheri-bacacheri/6bb9984a-02a1-433b-b596-8f71696530a2',
-25.3982783,-49.2355686);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Brazil Burger', 'Rua Lodovico Geronazzo, 665 - Loja 3', '18:00 até 23:00','https://www.ifood.com.br/delivery/curitiba-pr/brazil-burger---boa-vista-boa-vista/2ce715a4-07b2-4776-b9f9-15accb25c818',
-25.3888703,-49.2434798);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Shelby Burguer', 'R. Prof. Nivaldo Braga, 2027', '11:00 até 15:00 18:00 até 23:30','https://deliveryapp.neemo.com.br/delivery/3864/menu',
-25.4305946,-49.2158484);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('O Barba Hamburgueria', 'Av. Vicente Machado, 578', '18:00 até 23:00','https://www.ifood.com.br/delivery/curitiba-pr/o-barba-hamburgueria-centro/f7b4ac39-3acc-4e85-818d-8d12d1a04856',
-25.4355295,-49.2829652);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Whatafuck', 'Av. Vicente Machado, 855', '18:00 até 23:30', 'https://www.ifood.com.br/delivery/curitiba-pr/whatafuck-hamburgueria-centro/f38e8b9d-6bb0-485e-bed5-f91e7037a4db',
-25.4364542,-49.2846771);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Hamburgueria Curitiba', 'R. Cap. Leônidas Marques, 67', '18:00 até 23:00', 'https://www.ifood.com.br/delivery/curitiba-pr/hamburgueria-curitiba-uberaba/5bdb4478-20cf-4042-848b-616afdce38f9',
-25.4673743,-49.2211028);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Gringos', 'Rua Tomazina, 345', '18:00 até 21:00', 'https://www.ifood.com.br/delivery/curitiba-pr/gringos-burgers-ahu/991362c1-0fe4-4674-afc1-69ec466e4066',
-25.3997121,-49.2587736);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Speed Burger', 'R. Marcelino Nogueira, 100', '18:00 até 23:00', 'https://www.ifood.com.br/delivery/curitiba-pr/speed-burger-delivery-bacacheri/57fd2322-f1cb-48c5-8a57-a6f5b8dec14a',
-25.3982725,-49.2369375);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('O Aviador Burger & Beer', 'Rua João Tschannerl, 992 - 01', '17:00 até 22:00', 'https://www.ifood.com.br/delivery/curitiba-pr/o-aviador-burger--beer-vista-alegre/d08bc00c-b23d-4950-9195-1c695b77c2d2',
-25.4036406,-49.2890888);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('WRK Hamburgueria', 'Av. José Gulin, 105', '10:30–14:30 18:00 até 23:00', 'https://www.ifood.com.br/delivery/curitiba-pr/wrk-hamburgueria-bacacheri/97f25ba8-e3b2-4384-a229-e58e3b1e37cb',
-25.3937817,-49.2257849);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Vapor Burger & Beer', 'R. dos Ferroviários, 249 - 2', '18:00 até 23:00', 'https://www.ifood.com.br/delivery/curitiba-pr/vapor-burger-e-beer-cajuru/a81f5881-0e2f-42cf-8da9-10d679ceaca3',
-25.4518668,-49.2126542);

INSERT INTO restaurants 
(name, address, opening_hours, menu, latitude, longitude) 
VALUES 
('Vapor Burger & Beer', 'R. dos Ferroviários, 249 - 2', '18:00 até 23:00', 'https://www.ifood.com.br/delivery/curitiba-pr/vapor-burger-e-beer-cajuru/a81f5881-0e2f-42cf-8da9-10d679ceaca3',
-25.4518668,-49.2126542);