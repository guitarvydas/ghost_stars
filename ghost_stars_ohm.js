  const grammar = String.raw`
GhostStars {
text = macro+

macro = 
  | applySyntactic<ShowPhrase>
  | applySyntactic<MovePhrase>
  | applySyntactic<WaitPhrase>
  | applySyntactic<FadeToBlackPhrase>
  | applySyntactic<JumpPhrase>
  | lex_spoken
  | period
  | separator
  | nls
  | any
  
ShowPhrase = "Show" filename "at" Coordinate
MovePhrase = "Move" filename "to" Coordinate TimeSpan
WaitPhrase = "Wait" number "frames"
FadeToBlackPhrase = "Fade" "to" "black" TimeSpan
JumpPhrase = "Jump" ChapterName

lex_spoken = speaker spoken

speaker = speakerSpaces name
speakerSpaces = 
  | "                    " -- spaces20
  | tab tab "    "         -- tabtabspaces4

Coordinate = number "x" number
TimeSpan = "over" number "frames"
ChapterName = name
filename = name

spoken = spokenchar+
spokenchar = ~separator any

period = "."
separator = "❖"

name = nameFirst nameRest*
nameFirst = letter
nameRest = "_" | ":" | digit | nameFirst
number = "-"? digit+

nls = nl+
nl = "\n"
tab = "\t"
}
`;
