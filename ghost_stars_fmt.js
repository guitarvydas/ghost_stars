  const fmt = String.raw`
text [macro+] = ‛\n{ onenter:\n[«macro»true]\n»\n’

macro [x] = ‛«x»’
  
ShowPhrase [kShow filename kat Coordinate] = ‛\n["image","«filename»",«Coordinate»],’
MovePhrase [kMove filename kto Coordinate TimeSpan] = ‛\n["moveto","«filename»","???",«Coordinate»«TimeSpan»,"easin"],’
WaitPhrase [kWait number kframes] = ‛\n["wait",«number»],’
FadeToBlackPhrase [kFade kto kblack TimeSpan] = ‛\n["fadeout",«TimeSpan»],’
JumpPhrase [kJump ChapterName] = ‛\n["jump","«ChapterName»"],’
lex_spoken [speaker spoken] = ‛\n["say","«speaker»«spoken»"],’
speaker [speakerSpaces name] = ‛«speakerSpaces»«name»’
speakerSpaces_spaces20 [spaces] = ‛                    ’
speakerSpaces_tabtabspaces4 [tab1 tab2 spaces4] = ‛                    ’

Coordinate [number1 kx number2] = ‛«number1»,«number2»’
TimeSpan [kover number kframes] = ‛«number»’
ChapterName [name] = ‛«name»’
filename [name] = ‛«name»’

spoken [cs+] = ‛«cs»’
spokenchar [c] = ‛«c»’

name [nameFirst nameRest*] = ‛«nameFirst»«nameRest»’
nameFirst [letter] = ‛«letter»’
nameRest [c] = ‛«c»’
number [kminus? digit+] = ‛«kminus»«digit»’

nls [cs+] = ‛’
nl [c] = ‛«c»’
tab [c] = ‛«c»’
period [c] = ‛’
separator [c] = ‛’

`;
