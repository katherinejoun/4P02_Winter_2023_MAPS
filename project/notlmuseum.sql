--CREATE DATABASE notlmuseum;

CREATE TABLE collection(
	collection_name VARCHAR(40) NOT NULL,
	collection_description VARCHAR,
	date_created TIMESTAMP NOT NULL,
	collection_id SERIAL PRIMARY KEY
	);

CREATE TABLE staff(
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	position VARCHAR(20),
	staff_id SERIAL PRIMARY KEY
	);

INSERT INTO staff(first_name, last_name)
VALUES('Jacob', 'Lavell'),
	('Andrea', 'Baker'),
	('Hannah', 'Chan'),
	('Katherine', 'Joun'),
	('Victoria', 'Peel');

CREATE TABLE exhibit_location(
	location_name VARCHAR(50),
	floor_number INT NOT NULL,
	location_id SERIAL PRIMARY KEY
	);

INSERT INTO exhibit_location (location_name, floor_number)
VALUES('Main Room ', '1'),
	('Hallway', '2'),
	('Memorial Room', '2');
	
CREATE TABLE exhibit(
	exhibit_name VARCHAR(50),
	start_date DATE,
	end_date DATE,
	date_created TIMESTAMP NOT NULL,
	exhibit_description VARCHAR,
	exhibit_id SERIAL PRIMARY KEY,
	location_id INTEGER REFERENCES exhibit_location(location_id),
	curated_by INTEGER REFERENCES staff(staff_id)
	);
	
CREATE TABLE artifact(
	artifact_name VARCHAR(100) NOT NULL,
	artifact_description VARCHAR,
	artifact_id SERIAL PRIMARY KEY,
	date_created TIMESTAMP NOT NULL,
	processed_by INTEGER REFERENCES staff(staff_id),
	collection_id INTEGER REFERENCES collection(collection_id) ON DELETE SET NULL,
	exhibit_id INTEGER REFERENCES exhibit(exhibit_id) ON DELETE SET NULL		
	);

CREATE TABLE image(
	image_name VARCHAR(40),
	image_description VARCHAR,
	date_taken DATE,
	image_id SERIAL PRIMARY KEY, 
	artifact_id INTEGER REFERENCES artifact(artifact_id) ON DELETE SET NULL
	);


	

INSERT INTO artifact(artifact_name, artifact_description, date_created, processed_by)
VALUES('Crazy Rich Asians Dress', 'The blue dress worn by Constance Wu in the film Crazy Rich Asians. The film was the first Hollywood film to star a mostly East Asian cast 	since 1993s The Joy Luck Club. The Marchesa dress is a Grecian-style dress with light blue tulle.',
	   current_timestamp, 1),
	   ('Digital Arithmetic Training Apparatus', 'During the late 1950s and 1960s, American scientists and educators proposed using machines for instruction. Teaching machines and related programmed textbooks used a careful sequence of questions for teaching. Jerome C. Meyer and later William R. Hafel, both of Sunnydale, California, believed that it would be more efficient to use randomly generated problems. Given a problem, a student entered the answer. A correct answer elicited a new problem. These ideas were incorporated in this teaching device, the Digitor.
		The instrument, introduced by the California firm Centurion Industries in 1974, used an Intel microchip and boasted a space-age look. It taught basic arithmetic. More recently, electronic calculators have become common at more advanced levels of mathematics teaching.',
		current_timestamp, 1),
	   ('Texas Instruments Little Professor Calculator', 'Introduced in mid-1976, the Little Professor is a non-printing electronic calculator modified to present simple arithmetic problems. A correct answer prompts another problem on the eight-digit display. An error delivers the message, "EEE." The colorful keyboard shows a professor with whiskers and glasses. The red light-emitting diode screen, in combination with the top of the instrument, looks like a mortar board.
This example has buttons that allow one to set the level of problems, as well as an on/off button on the front rather than the side of the machine. These features were introduced in a version of the machine made from 1978 onward.', current_timestamp, '2'),
	   ('Smiths Rosebud Salve', 'The indications or uses for this product as provided by the manufacturer are:
		A valuable preparation for chapped lips, face and hands; minor burns and scalds; bites and stings of non-poisonous insects and all other conditions for which a soothing salve is useful.',
		current_timestamp, 3);

INSERT INTO collection(collection_name, collection_description, date_created)
VALUES('Smithsonian', 'A selection of items on loan from the Smithsonian', current_timestamp),
	('The Louvre', 'A selection of items on loan from the Louvre', current_timestamp),
	('Arts and Crafts Movement', 'A selection of items from the Arts and Crafts Movement', current_timestamp);

	
INSERT INTO exhibit(exhibit_name, start_date, date_created, exhibit_description, curated_by)
VALUES('Education Through the Ages', '2023-11-10', current_timestamp, 'A look at how education has changed through the years', '1'),
	('Fashion and Beauty', '2022-11-10', current_timestamp, 'A look at how fashion and beauty standards have changed through the years', '1');


-- Update the collection and artifact belongs to
--UPDATE artifact 
--SET collection_id = 2
--WHERE collection_id = 1;


--UPDATE artifact 
--SET collection_id = 2
--WHERE artifact_id = 1;

-- Update the location of an exhibit
--UPDATE exhibit 
--SET location_id = 2
--WHERE exhibit_id = 1;


-- Display all current exhibits
--SELECT exhibit_name FROM exhibit
--WHERE start_date >= current_date;

--UPDATE artifact 
--SET exhibit_id = 1
--WHERE artifact_id = 3;


-- Display all exhibits and their artifacts
--SELECT artifact.artifact_name, exhibit.exhibit_name
--FROM exhibit
--INNER JOIN artifact ON artifact.exhibit_id = exhibit.exhibit_id

-- Add img_url column to image table
--ALTER TABLE image
--ADD img_url TEXT NOT NULL;

-- Add an image 
--INSERT INTO image(image_name, image_description, artifact_id, img_url)
--VALUES('crazy rich asians dress', 'image of dress from move', '1', 'C:\Users\victo\OneDrive - Brock University\Desktop\crazy rich asians.jpeg')


--UPDATE artifact 
--SET collection_id = 2
--WHERE artifact_id = 1;
--SELECT * FROM artifact;

--UPDATE exhibit 
--SET location_id = 2
--WHERE exhibit_id = 1;

--SELECT exhibit_name FROM exhibit
--WHERE start_date >= current_date;

--UPDATE artifact 
--SET exhibit_id = 1
--WHERE artifact_id = 3;
--SELECT * FROM artifact;


--SELECT artifact.artifact_name, exhibit.exhibit_name
--FROM exhibit
--INNER JOIN artifact ON artifact.exhibit_id = exhibit.exhibit_id


