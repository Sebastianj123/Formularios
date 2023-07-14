CREATE OR REPLACE DATABASE sj;

CREATE TABLE sj.sex(
    sex_id int PRIMARY KEY AUTO_INCREMENT,
    sex_nam varchar(20)
);

CREATE TABLE sj.tyDoc(
    tyDoc_id int PRIMARY KEY AUTO_INCREMENT,
    tyDoc_nam varchar(10)
);

CREATE TABLE sj.dts(
    dts_id int PRIMARY KEY AUTO_INCREMENT,
    tyDoc_id int,
    sex_id int,
    dts_doc double,
    dts_tel double,
    dts_addr varchar(80),
    INDEX(tyDoc_id,sex_id),
    CONSTRAINT tyDocPK_dtsFK_tyDoc_id FOREIGN KEY (tyDoc_id) REFERENCES sj.tyDoc (tyDoc_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT sexPK_dtsFK_sex_id FOREIGN KEY (sex_id) REFERENCES sj.sex (sex_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE sj.sta(
    sta_id int PRIMARY KEY AUTO_INCREMENT,
    sta_nam varchar(20)
);

CREATE TABLE sj.usr (
    usr_id int PRIMARY KEY AUTO_INCREMENT,
    usr_name varchar(80),
    usr_lastName varchar(60),
    usr_em varchar(60),
    usr_pass varchar(60),
    sta_id int,
    dts_id int,
    INDEX(sta_id,dts_id),
	CONSTRAINT staPK_usrFK_sta_id FOREIGN KEY (sta_id) REFERENCES sj.sta (sta_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT dtsPK_usrFK_dts_id FOREIGN KEY (dts_id) REFERENCES sj.dts (dts_id) ON DELETE CASCADE ON UPDATE CASCADE
);




INSERT INTO sj.sta VALUES 
(null,'Activo'),
(null,'Inactivo'),
(null,'Por confirmar');

INSERT INTO sj.usr VALUES (null,'Cami','Rojas','camRo@gmail.com','123',1,null);