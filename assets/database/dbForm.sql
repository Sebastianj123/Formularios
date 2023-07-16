CREATE DATABASE fromProj;

CREATE TABLE tyDoc (
    tyDoc_id INT PRIMARY KEY AUTO_INCREMENT,
    tyDoc_nam VARCHAR(30),
    tyDoc_desc TEXT
);

CREATE TABLE sex (
    sex_id INT PRIMARY KEY AUTO_INCREMENT,
    sex_nam VARCHAR(20)
);

CREATE TABLE reg (
    reg_id INT PRIMARY KEY AUTO_INCREMENT,
    reg_ema VARCHAR(80),
    reg_usrName VARCHAR(80),
    reg_pass VARCHAR(80),
    reg_term VARCHAR(10)
);

CREATE TABLE other (
    other_id INT PRIMARY KEY AUTO_INCREMENT,
    other_date DATE,
    other_time TIME,
    other_clr VARCHAR(10)
);

CREATE TABLE dts (
    dts_id INT PRIMARY KEY AUTO_INCREMENT,
    dts_name VARCHAR(80),
    dts_lastName VARCHAR(80),
    sex_id INT,
    tyDoc_id INT,
    dts_doc DOUBLE,
    dts_addr VARCHAR(80),
    dts_tel DOUBLE,
    INDEX(sex_id,tyDoc_id),
    CONSTRAINT `sexFk_dtsFK_dts_id` FOREIGN KEY (sex_id) REFERENCES sex (sex_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `tyDocFk_dtsFK_tyDoc_id` FOREIGN KEY (tyDoc_id) REFERENCES tyDoc (tyDoc_id) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE usr (
    usr_id INT PRIMARY KEY AUTO_INCREMENT,
    dts_id INT,
    other_id INT,
    reg_id INT,
    INDEX(dts_id,other_id,reg_id),
    CONSTRAINT `dtsPK_usrFk_dts_id` FOREIGN KEY (dts_id) REFERENCES `dts`(dts_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `otherPK_usrFk_other_id` FOREIGN KEY (other_id) REFERENCES `other`(other_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `regPK_usrFk_reg_id` FOREIGN KEY (reg_id) REFERENCES `reg`(reg_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DELIMITER //

CREATE PROCEDURE i_data (
    IN nam VARCHAR(80), 
    IN ltName VARCHAR(80), 
    IN tyDoc INT, 
    IN doc DOUBLE, 
    IN em VARCHAR(80), 
    IN addr VARCHAR(80), 
    IN tel DOUBLE, 
    IN dat DATE, 
    IN tim TIME, 
    IN clr VARCHAR(10), 
    IN sex INT, 
    IN usrNam VARCHAR(80), 
    IN pass VARCHAR(80), 
    IN term VARCHAR(10)
) 
BEGIN
    DECLARE dtsId INT;
    DECLARE otherId INT;
    DECLARE regId INT;
    
    -- Insertar en la tabla dts y obtener el último ID insertado
    INSERT INTO dts VALUES (NULL, nam, ltName, sex, tyDoc, doc, addr, tel);
    SET dtsId = LAST_INSERT_ID();
    
    -- Insertar en la tabla other y obtener el último ID insertado
    INSERT INTO other VALUES (NULL, dat, tim, clr);
    SET otherId = LAST_INSERT_ID();
    
    -- Insertar en la tabla reg y obtener el último ID insertado
    INSERT INTO reg VALUES (NULL, em, usrNam, pass, term);
    SET regId = LAST_INSERT_ID();
    
    -- Insertar en la tabla usr con los IDs obtenidos
    INSERT INTO usr VALUES (NULL, dtsId, otherId, regId);
    
END //
DELIMITER ();