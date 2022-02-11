import csv
import os
import sys


files = sys.argv[1].split(",")
filename = sys.argv[2]

new_path = "C:/Users/Dell/Desktop/Report_"+filename
os.mkdir(new_path)

with open(new_path+"/"+filename+".csv", "w", newline="") as file:
    theWriter = csv.writer(file)

    theWriter.writerow(["PERSON UID", "FIRSTNAME","LASTNAME", "MIDDLENAME", "ADDRESS", "GENDER", "WORK", "SCHOOL", "DEPARTMENT", "EMAIL", "CONTACT NUMBER", "TIME IN", "TIME OUT", "DATE"])

    for i in range(0,len(files),14):
        theWriter.writerow([files[i], files[i+1], files[i+2], files[i+3], files[i+4], files[i+5], files[i+6], files[i+7], files[i+8], files[i+9], files[i+10], files[i+11], files[i+12], files[i+13]])
