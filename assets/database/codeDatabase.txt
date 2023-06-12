CREATE OR REPLACE DATABASE formUser;

CREATE TABLE formUser.userInfo (
	id int PRIMARY KEY AUTO_INCREMENT,
    nm char(40),
    srNam char(40),
    sex char(6),
    birt date,
    addr varchar(70),
    tel double
);

CREATE TABLE formUser.doc (
    id int PRIMARY KEY,
    typDoc char(2),
    numDoc double,
    index(id)
);

CREATE TABLE formUser.reg (
    id int PRIMARY KEY,
    ema varchar(40),
    nmU varchar(15),
    pass varchar(20),
    index(id)
);

CREATE TABLE formUser.otr (
    id int PRIMARY KEY,
    tim time,
    cl varchar(16),
    term int(1),
    index(id)
);

CREATE TABLE formUser.history (
    chan int PRIMARY KEY AUTO_INCREMENT,
    typchan int,
    datChan date,
    timChan time,
    tabChan varchar(10)
);

CREATE TABLE formUser.userInfoHis (
	numChan int PRIMARY KEY AUTO_INCREMENT,
    New_id int,
    New_nm char(40),
    New_srNam char(40),
    New_sex char(6),
    New_birt date,
    New_addr varchar(70),
    New_tel double,
    old_id int,
    old_nm char(40),
    old_srNam char(40),
    old_sex char(6),
    old_birt date,
    old_addr varchar(70),
    old_tel double,
    chan int,
    index(chan)
);



CREATE TABLE formUser.docHis (
	numChan int PRIMARY KEY AUTO_INCREMENT,
    new_id int,
    new_typDoc char(2),
    new_numDoc double,
    old_id int,
    old_typDoc char(2),
    old_numDoc double,
    chan int,
    index(chan)
);

CREATE TABLE formUser.regHis (
	numChan int PRIMARY KEY AUTO_INCREMENT,
    new_id int,
    new_ema varchar(40),
    new_nmU varchar(15),
    new_pass varchar(20),
    old_id int,
    old_ema varchar(40),
    old_nmU varchar(15),
    old_pass varchar(20),
    chan int,
    index(chan)
);

CREATE TABLE formUser.otrHis (
	numChan int PRIMARY KEY AUTO_INCREMENT,
    new_id int,
    new_tim time,
    new_cl varchar(16),
    new_term int(1),
    old_id int,
    old_tim time,
    old_cl varchar(16),
    old_term int(1),
    chan int,
    index(chan)
);

ALTER TABLE formUser.doc ADD CONSTRAINT `userI_doc` FOREIGN KEY (`id`) REFERENCES `userInfo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE formUser.reg ADD CONSTRAINT `userI_reg` FOREIGN KEY (`id`) REFERENCES `userInfo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE formUser.otr ADD CONSTRAINT `userI_otr` FOREIGN KEY (`id`) REFERENCES `userInfo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE formUser.docHis ADD CONSTRAINT `userI_docHis` FOREIGN KEY (`chan`) REFERENCES `history` (`chan`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE formUser.regHis ADD CONSTRAINT `userI_regHis` FOREIGN KEY (`chan`) REFERENCES `history` (`chan`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE formUser.otrHis ADD CONSTRAINT `userI_otrHis` FOREIGN KEY (`chan`) REFERENCES `history` (`chan`) ON DELETE CASCADE ON UPDATE CASCADE;




CREATE OR REPLACE TRIGGER formUser.i_usIn AFTER INSERT ON formUser.userInfo FOR EACH ROW
BEGIN 

	INSERT INTO formUser.history (typchan,datChan,timChan,tabChan) VALUES ('INSERT',CURDATE(),CURTIME(),"userInfo");    
	INSERT INTO formUser.userInfoHis (New_id, New_nm, New_srNam, New_sex, New_birt, New_addr, New_tel, old_id, old_nm, old_srNam, old_sex, old_birt, old_addr, old_tel) VALUES (NEW.id, NEW.nm, NEW.srNam, NEW.sex, NEW.birt, NEW.addr, NEW.tel, null, null, null, null, null, null, null);
    INSERT INTO formUser.doc (`id`) value (NEW.id);
    INSERT INTO formUser.reg (`id`) value (NEW.id);
    INSERT INTO formUser.otr (`id`) value (NEW.id);

END;

CREATE OR REPLACE TRIGGER formUser.u_usIn BEFORE UPDATE ON formUser.userInfo FOR EACH ROW
BEGIN 

	INSERT INTO formUser.history (typchan,datChan,timChan,tabChan) VALUES ('UPDATE',CURDATE(),CURTIME(),"userInfo");    
	INSERT INTO formUser.userInfoHis (New_id, New_nm, New_srNam, New_sex, New_birt, New_addr, New_tel, old_id, old_nm, old_srNam, old_sex, old_birt, old_addr, old_tel) VALUES (NEW.id, NEW.nm, NEW.srNam, NEW.sex, NEW.birt, NEW.addr, NEW.tel, OLD.id, OLD.nm, OLD.srNam, OLD.sex, OLD.birt, OLD.addr, OLD.tel);
	
    UPDATE formUser.doc SET (`id`) = (NEW.id) WHERE doc.id = OLD.id;
    UPDATE formUser.reg SET (`id`) = (NEW.id) WHERE reg.id = OLD.id;
    UPDATE formUser.otr SET (`id`) = (NEW.id) WHERE reg.id = OLD.id;

END;