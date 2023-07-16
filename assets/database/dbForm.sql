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

CREATE TABLE usrInf (
    usrInf_id INT PRIMARY KEY AUTO_INCREMENT,
    usrInf_name VARCHAR(80),
    usrInf_lastName VARCHAR(80),
    sex_id INT,
    tyDoc_id INT,
    usrInf_doc DOUBLE,
    usrInf_addr VARCHAR(80),
    usrInf_tel DOUBLE,
    INDEX(sex_id,tyDoc_id),
    CONSTRAINT `sexFk_usrInfFK_usrInf_id` FOREIGN KEY (sex_id) REFERENCES sex (sex_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `tyDocFk_usrInfFK_tyDoc_id` FOREIGN KEY (tyDoc_id) REFERENCES tyDoc (tyDoc_id) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE usr (
    usr_id INT PRIMARY KEY AUTO_INCREMENT,
    usrInf_id INT,
    other_id INT,
    reg_id INT,
    INDEX(usrInf_id,other_id,reg_id),
    CONSTRAINT `usrInfPK_usrFk_usrInf_id` FOREIGN KEY (usrInf_id) REFERENCES `usrInf`(usrInf_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `otherPK_usrFk_other_id` FOREIGN KEY (other_id) REFERENCES `other`(other_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `regPK_usrFk_reg_id` FOREIGN KEY (reg_id) REFERENCES `reg`(reg_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DELIMITER //
CREATE PROCEDURE i_data (IN nam VARCHAR(80), ltName VARCHAR(80), tyDoc INT, doc DOUBLE, em VARCHAR(80), addr VARCHAR(80), tel DOUBLE, dat DATE, tim TIME, clr VARCHAR(10), sex INT, usrNam VARCHAR(80), pass VARCHAR(80), term VARCHAR(10) ) 
BEGIN
INSERT INTO `usrInf` VALUES ( NULL, nam, ltName, sex, tyDoc, doc, addr, tel );
INSERT INTO `other` VALUES ( NULL, dat, tim, clr );
INSERT INTO `reg` VALUES ( NULL, em, usrName, pass, term ); 
-- INSERT INTO `usr` VALUES ( NULL, usrInf_id,other_id,reg_id)
END // 
DELIMITER ();