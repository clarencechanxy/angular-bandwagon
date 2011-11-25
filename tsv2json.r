REBOL [
	Title: "Google Docs Tab Separated Values spreadsheet export to JSON converter for http://bandwagon.sg"
	Date: 2011-08-08
	Author: onetom@hackerspace.sg
	Usage: {
		$ rebol -qws tsv2json.r events\ -\ Gig\ list.tsv events | less
		$ rebol -qws tsv2json.r events\ -\ Artiste.tsv artiste | less
	}
]

args: system/options/args
tsv: to-file first args
var: to-word second args		; can be "events" or "artiste"

json: func[line] [
	print "{"
	for i 1 length? fields 1 [
		print rejoin [{"} fields/:i {": "}
			replace/all trim to-string line/:i {"} {\"} {",}]
	]
	print "},"
]

events: func[line] [ if now/date - 3 <= to-date line/1 [ json line ] ]
artiste: :json

lines: read/lines tsv
fields: parse/all lines/1 "^-" remove lines

print [ var "= [" ]
foreach line lines [ do var  parse/all line "^-" ]
print "]"