CREATE OR REPLACE DATABASE sj;

CREATE TABLE sj.sta(
    sta_id INT PRIMARY KEY AUTO_INCREMENT,
    sta_nam VARCHAR(15)
);

INSERT INTO sj.sta (`sta_nam`) VALUES 
('Activo'), 
('Inactivo'), 
('Por confirmar');

CREATE TABLE sj.srv (
    srv_id INT PRIMARY KEY AUTO_INCREMENT,
    srv_nam varchar(60),
    srv_dsc TEXT
);

INSERT INTO sj.srv (`srv_nam`,`srv_dsc`) VALUES
('Manicure y pedicure','Este servicio consiste en un tratamiento para las uñas (de las manos y pies). Ofrecemos el arte y la moda para las uñas, por ejemplo, pintándolas en diferentes estilos, también se aplica, repara y quita uñas postizas o extensiones.'),
('Masajes',null),
('Maquillaje',null),
('Depilación',null),
('Tratamientos faciales',null),
('Colorimetría',null),
('Corte de cabello',null),
('Tratamiento capilar',null);

CREATE TABLE sj.reg (
    reg_id INT PRIMARY KEY AUTO_INCREMENT,
    reg_em VARCHAR(60),
    reg_pass VARCHAR(60)
);

INSERT INTO sj.reg (`reg_em`,`reg_pass`) VALUES ('admin','admin0710');

CREATE TABLE sj.sex(
    sex_id INT PRIMARY KEY AUTO_INCREMENT,
    sex_nam VARCHAR(20)
);

INSERT INTO sj.sex (`sex_nam`) VALUES 
('Hombre'),
('Mujer'),
('Otro');

CREATE TABLE sj.tyDoc(
    tyDoc_id INT PRIMARY KEY AUTO_INCREMENT,
    tyDoc_nam VARCHAR(10)
);

INSERT INTO sj.tyDoc (`tyDoc_nam`) VALUES 
('TI'),
('CC'),
('CE'),
('Otro');


CREATE TABLE sj.dts(
    dts_id INT PRIMARY KEY AUTO_INCREMENT,
    dts_name VARCHAR(80),
    dts_lastName VARCHAR(60),
    dts_birt DATE,
    sex_id INT,
    tyDoc_id INT,
    dts_doc DOUBLE,
    dts_tel DOUBLE,
    dts_addr VARCHAR(80),
    INDEX(tyDoc_id,sex_id),
    CONSTRAINT tyDocPK_dtsFK_tyDoc_id FOREIGN KEY (tyDoc_id) REFERENCES sj.tyDoc (tyDoc_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT sexPK_dtsFK_sex_id FOREIGN KEY (sex_id) REFERENCES sj.sex (sex_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE sj.clt(
    clt_id INT PRIMARY KEY AUTO_INCREMENT,
    clt_hour TIME,
    clt_date DATE,
    srv_id INT,
    sta_id INT,
    INDEX(srv_id,sta_id),
    CONSTRAINT srvPK_cltFK_srv_id FOREIGN KEY (srv_id) REFERENCES sj.srv(srv_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT staPK_cltFK_sta_id FOREIGN KEY (sta_id) REFERENCES sj.sta(sta_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE sj.usrInf (
    usrInf_id INT PRIMARY KEY AUTO_INCREMENT,
    dts_id INT,
    reg_id INT,
    INDEX(reg_id,dts_id),
	CONSTRAINT regPK_usrInfFK_reg_id FOREIGN KEY (reg_id) REFERENCES sj.reg (reg_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT dtsPK_usrInfFK_dts_id FOREIGN KEY (dts_id) REFERENCES sj.dts (dts_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE sj.usr (
    usr_id INT PRIMARY KEY AUTO_INCREMENT,
    usrInf_id INT,
    clt_id INT,
    sta_id INT,
    INDEX(usrInf_id,clt_id,sta_id),
    CONSTRAINT cltPK_usrFK_clt_id FOREIGN KEY (clt_id) REFERENCES sj.clt(clt_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT staPK_usrFK_sta_id FOREIGN KEY (sta_id) REFERENCES sj.sta (sta_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT usrInfPK_srcFK_usrInf_id FOREIGN KEY (usrInf_id) REFERENCES sj.usrInf(usrInf_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP PROCEDURE IF EXISTS sj.In_usr;
DELIMITER //
CREATE PROCEDURE sj.IN_usr (
IN
nam VARCHAR(80),
ape VARCHAR(60),
birt DATE, 
sex int,
tyDoc int,
doc double,
tel double,
addr VARCHAR(80),
ema VARCHAR(60),
pass VARCHAR(60)
)
BEGIN
INSERT INTO sj.dts VALUES (NULL,nam,ape,birt,sex,tyDoc,doc,tel,addr);
INSERT INTO sj.reg VALUES (NULL,ema,pass);

END// 
DELIMITER ();

DELIMITER //
CREATE TRIGGER sj.AI_dts AFTER INSERT ON sj.dts FOR EACH ROW
BEGIN
INSERT INTO sj.usrInf VALUES (NULL,NEW.dts_id,NULL);
END//
DELIMITER ();

DELIMITER //
CREATE TRIGGER sj.AI_reg AFTER INSERT ON sj.reg FOR EACH ROW
BEGIN
UPDATE sj.usrInf SET usrInf.reg_id = NEW.reg_id WHERE usrInf.usrInf_id = NEW.reg_id;
END//
DELIMITER ();

SELECT * FROM sj.usrInf F INNER JOIN 
sj.reg R ON F.reg_id = R.reg_id INNER JOIN
sj.dts D ON F.dts_id = D.dts_id WHERE F.reg_id = NEW.reg_id;

call IN_usr ('Rosmery','Perez','2000-12-01',1,2,1232123454,1233211212,'Kr11 No67 66 sur','rosPe@gmail.com','123');