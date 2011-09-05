REBOL [
  Title: "Google Docs Tab Separated Values spreadsheet export to JSON converter"
  Date: 2011-08-08
  Author: onetom@hackerspace.sg
]

lines: read/lines %"Place test data.tsv"
fields: parse/all lines/1 "^-"  remove lines

print "this.events = ["
foreach l lines [
  l: parse/all l "^-"
  print "{"
  for i 1 length? fields 1 [
    print rejoin [{"} fields/:i {": "}
      replace/all trim to-string l/:i {"} {\"} {",}]
  ]
  print "},"
]
print "]"
