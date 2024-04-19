\connect touchstone;

DELETE FROM braille_app_braille;

DELETE FROM braille_app_words;

DELETE FROM braille_app_phrases;

INSERT INTO braille_app_braille ("binary", english, braille_img, category, learning_img)
	VALUES 
	('100000', 'A', 'https://i.imgur.com/hSXLUH1.png', 'abc', 'https://i.imgur.com/v1kARdV.png'),
	('110000', 'B', 'https://i.imgur.com/qRWzRGJ.png', 'abc', 'https://i.imgur.com/5nKmOfQ.png'),
	('100100', 'C', 'https://i.imgur.com/996A4UP.png', 'abc', 'https://i.imgur.com/2VykXvw.png'),
	('100110', 'D', 'https://i.imgur.com/atbZzPC.png', 'abc' ,'https://i.imgur.com/t30jUGM.png'),
	('100010', 'E', 'https://i.imgur.com/Ci85csx.png', 'abc', 'https://i.imgur.com/iFOheh0.png'),
	('110100', 'F', 'https://i.imgur.com/nAiErjo.png', 'abc', 'https://i.imgur.com/MfZJ0DF.png'),
	('110110', 'G', 'https://i.imgur.com/rxn3sQl.png', 'abc', 'https://i.imgur.com/6rcT6dD.png'),
	('110010', 'H', 'https://i.imgur.com/aJgJEe2.png', 'abc', 'https://i.imgur.com/JHaZtE7.png'),
	('010100', 'I', 'https://i.imgur.com/49s63LD.png', 'abc', 'https://i.imgur.com/rZ5kgYb.png'),
	('010110', 'J', 'https://i.imgur.com/acDs7if.png', 'abc', 'https://i.imgur.com/d1V7uUG.png'),
	('101000', 'K', 'https://i.imgur.com/kqx4Slx.png', 'abc', 'https://i.imgur.com/pTHfaqb.png'),
	('111000', 'L', 'https://i.imgur.com/q1ujAwY.png', 'abc', 'https://i.imgur.com/7qr1EBT.png'),
	('101100', 'M', 'https://i.imgur.com/xVCPC5G.png', 'abc', 'https://i.imgur.com/GUYCFZe.png'),
	('101110', 'N', 'https://i.imgur.com/obqJCGb.png', 'abc', 'https://i.imgur.com/1EAqmED.png'),
	('101010', 'O', 'https://i.imgur.com/zCsYwBG.png', 'abc', 'https://i.imgur.com/6vRTIJg.png'),
	('111100', 'P', 'https://i.imgur.com/9QhqgSz.png', 'abc', 'https://i.imgur.com/T5R8pzd.png'),
	('111110', 'Q', 'https://i.imgur.com/c13ZokR.png', 'abc', 'https://i.imgur.com/CvzjJfJ.png'),
	('111010', 'R', 'https://i.imgur.com/7h7mmtc.png', 'abc', 'https://i.imgur.com/K0Y3Uze.png'),
	('011100', 'S', 'https://i.imgur.com/dlE9SPC.png', 'abc', 'https://i.imgur.com/kgi145G.png'),
	('011110', 'T', 'https://i.imgur.com/SBXvd4g.png', 'abc', 'https://i.imgur.com/Pvof3JK.png'),
	('101001', 'U', 'https://i.imgur.com/5wztfup.png', 'abc', 'https://i.imgur.com/YSO1SAL.png'),
	('111001', 'V', 'https://i.imgur.com/XvDZqj4.png', 'abc', 'https://i.imgur.com/nZ8jMJY.png'),
	('010111', 'W', 'https://i.imgur.com/YZa8XUp.png', 'abc', 'https://i.imgur.com/fbxu9kP.png'),
	('101101', 'X', 'https://i.imgur.com/GOjX9LW.png', 'abc', 'https://i.imgur.com/62ZyWYv.png'),
	('101111', 'Y', 'https://i.imgur.com/2SKkgXu.png', 'abc', 'https://i.imgur.com/fWasb7h.png'),
	('101011', 'Z', 'https://i.imgur.com/bCcjW0L.png', 'abc', 'https://i.imgur.com/oJAdUtd.png'),
	('010110', '0', 'https://i.imgur.com/acDs7if.png', '123', ''),
	('100000', '1', 'https://i.imgur.com/hSXLUH1.png', '123', ''),
	('110000', '2', 'https://i.imgur.com/qRWzRGJ.png', '123', ''),
	('100100', '3', 'https://i.imgur.com/996A4UP.png', '123', ''),
	('100110', '4', 'https://i.imgur.com/atbZzPC.png', '123', ''),
	('100010', '5', 'https://i.imgur.com/Ci85csx.png', '123', ''),
	('110100', '6', 'https://i.imgur.com/nAiErjo.png', '123', ''),
	('110110', '7', 'https://i.imgur.com/rxn3sQl.png', '123', ''),
	('110010', '8', 'https://i.imgur.com/aJgJEe2.png', '123', ''),
	('010100', '9', 'https://i.imgur.com/49s63LD.png', '123', ''),
	('010101', 'OW', 'https://i.imgur.com/iyNJ6Zr.png', 'the', ''),
	('110011', 'OU', 'https://i.imgur.com/sXUtsHH.png', 'the', ''),
	('110111', 'ER', 'https://i.imgur.com/PezhO8m.png', 'the', ''),
	('100111', 'TH', 'https://i.imgur.com/Ad8KUDJ.png', 'the', ''),
	('001110', 'AR', 'https://i.imgur.com/TST6uR9.png', 'the', ''),
	('110001', 'GH', 'https://i.imgur.com/vCwxj2x.png', 'the', ''),
	('100011', 'WH', 'https://i.imgur.com/BB4f1EM.png', 'the', ''),
	('010001', 'EN', 'https://i.imgur.com/JnPXJB7.png', 'the', ''),
	('110101', 'ED', 'https://i.imgur.com/tiVqHdK.png', 'the', ''),
	('100101', 'SH', 'https://i.imgur.com/dO7QHhJ.png', 'the', ''),
	('100001', 'CH', 'https://i.imgur.com/pcmViIS.png', 'the', ''),
	('001101', 'ING', 'https://i.imgur.com/DHqJQAm.png', 'the', ''),
	('001100', 'ST', 'https://i.imgur.com/oepUiEC.png', 'the', ''),
	('001010', 'IN', 'https://i.imgur.com/RsZ59mt.png', 'the', ''),
	('111111', 'FOR', 'https://i.imgur.com/vj0fs97.png', 'the', ''),
	('011111', 'WITH', 'https://i.imgur.com/VdvuqKf.png', 'the', ''),
	('111011', 'OF', 'https://i.imgur.com/IKLcofb.png', 'the', ''),
	('111011', 'AND', 'https://i.imgur.com/pZQ97M7.png', 'the', ''),
	('011101', 'THE', 'https://i.imgur.com/2H9UWVm.png', 'the', ''),
	('001000', '''', 'https://i.imgur.com/6yHGFXq.png', '!?.', ''),
	('001001', '-' , 'https://i.imgur.com/JcomJnA.png', '!?.', ''),
	('001011', '"', 'https://i.imgur.com/aqqv3vc.png', '!?.', ''),
	('010000', ',', 'https://i.imgur.com/lcj27Bs.png', '!?.', ''),
	('011000', ';', 'https://i.imgur.com/meRiC5j.png', '!?.', ''),
	('010010', ':', 'https://i.imgur.com/jUP6ew2.png', '!?.', ''),
	('010011', '.', 'https://i.imgur.com/CVwHCNf.png', '!?.', ''),
	('011010', '!', 'https://i.imgur.com/aGGniHu.png', '!?.', ''),
	('011001', '?', 'https://i.imgur.com/eToKwJB.png', '!?.', ''),
	('011011', '()', 'https://i.imgur.com/DRHslUD.png', '!?.', ''),
	('000111', '*contraction', 'https://i.imgur.com/Qk4vb92.png', '!?.', ''),
	('000110', '*currency', 'https://i.imgur.com/SyguZTX.png', '!?.', ''),
	('000100', '*accent', 'https://i.imgur.com/d2VwDGj.png', '!?.', ''),
	('000011', '*letter', 'https://i.imgur.com/ZiY6lNz.png', '!?.', ''),
	('000101', '*italic', 'https://i.imgur.com/BJfPXdD.png', '!?.', ''),
	('000001', '*uppercase', 'https://i.imgur.com/38STJvS.png', '!?.', ''),
	('000010', '*contraction(2)', 'https://i.imgur.com/WM7eP02.png', '!?.', ''),
	('001111', '*number', 'https://i.imgur.com/oxbpj8O.png', '!?.', ''),
	('000000', '*space', 'https://i.imgur.com/BqrfRSi.png', '!?.', '');


INSERT INTO braille_app_words (word, img)
	VALUES
	('Apple', ''),
	('Banana', ''),
	('Cat', ''),
	('Dog', ''),
	('Elephant', ''),
	('Football', '');

INSERT INTO braille_app_phrases (phrase)
	VALUES
	('Floor'),
	('Bathroom'),
	('Kitchen'),
	('Right'),
	('Left'),
	('Please'),
	('Thank you');