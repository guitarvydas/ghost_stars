# ghost_stars

convert dungeon DSL to JSON

[brainstorming, WIP...]

e.g. 
```
❖ Show prolog_bg at 0x-550. Move prolog_bg to 0x0
over 300 frames. Wait 150 frames.

		    CHEL:NA
	  The last time I saw
	  her... She was smiling. As
	  if she had some secret that
	  she couldn't wait to tell me.
	  
	  And then, in a sudden wash of
	  red, she was gone.
	  
	  Gone as if she had never stood
	  beneath the uncaring stars.

❖ Fade to black over 40 frames. Jump INTRO.
```
becomes
```

{ onenter:
  [
      ["image","prolog_bg",0,-550],
      ["moveto","prolog_bg","???",0,0300,"easin"],
      ["wait",150],

      
      ["say","CHEL:NA","The last time I saw
	  her... She was smiling. As
	  if she had some secret that
	  she couldn't wait to tell me.
	  
	  And then, in a sudden wash of
	  red, she was gone.
	  
	  Gone as if she had never stood
	  beneath the uncaring stars.

"],
      ["fadeout",40],
      ["jump","INTRO"],
      true]
}
```
or, in lisp...
```

(onenter

 (image "prolog_bg" 0 -550)
 (moveto "prolog_bg" "???" 0 0300 easin)
 (wait 150)

 
 (say "CHEL:NA" "The last time I saw
	  her... She was smiling. As
	  if she had some secret that
	  she couldn't wait to tell me.
	  
	  And then, in a sudden wash of
	  red, she was gone.
	  
	  Gone as if she had never stood
	  beneath the uncaring stars.

")
 (fadeout 40)
 (jump "INTRO")
 )
```

# Usage
- Load *index.html* into a browser.
- Click on one of the buttons "Transpile to JSON" or "Transpile to Lisp"
- The output window contains the non-formatted output of the transpiler.
- To format the output, select-all from the output window and paste into your favourite pretty-printing editor (I happen to use Emacs).  Then, command the editor to indent the code. 
  - In my case: (0) click on "Transpile to Lisp" (1) click in "output:", (2) command-A, command-C (3) open emacs, (3a) control-X-control-F "junk-junk.lisp" (4) control-Y to paste the code, (5) control-X-h, (6) ESC-x indent-region <RETURN>

# Play Around
Hack on the specification in lispfmt.  Click on "Transpile to Lisp"

# N.B. 
There is a 3rd option "Transpile Identity" which produces output that mimics the input (modulo some missing spaces in unimportant places). I used the Identity Transform as a preliminary sanity check of the scaffolding needed to build JSON and Lisp fmt specifications.  I recommend starting this way, since there are many moving pieces which invite typos.  Once an identity specification has been created, it is easy to hack on it to emit code in various languages. 

# Ref
[ghost-stars](https://oofoe.itch.io/ghost-stars)
