---
layout: article
title: "Splitting large CSV files"
categories: csv, data, development
---
So I managed to get my hands on a very large CSV file over the weekend - when I say large, I mean almost 9GB large! Yeah thats a lot of data.

Well needless to say I had issues opening said file, It really didn't wanna work with Excel, VS Code, even my old faithful Sublime Text!!

So I went down a different path and decided to split the file into more manageable chunks. For this we will use terminal and perfrom the following tasks:-

- Split by line number, or by file size (Kb or Mb);
- Then add a '.csv' extension to all files we created for the split.

So to start we need to work out our best option. I started with splitting the file into 100MB chunks. The second line we will use a loop and the `mv-command` to simply change the extensions of the files.

By running these commands we will be able to open the first one and see how many rows there are in the file.

_Note: make sure you have navigated to the correct folder, so the folder where the file has been saved. Then run the following snippet._

```
split -b 100m file_to_split.csv
for i in *; do mv "$i" "$i.csv"; done
```

This will now split our file into chunks of 100MB, but we haven't finished there. More than likely you will have broken rows, not good if you plan to import the CSV's into a database later. So we open the first file that was created, and see how many lines there were.

In my case there were 415156. But the last row was broken. So to sort this delete all the files that were created. - sorry I found this the easiest way but bare with, there is a reason for it.

Ok so now we know how many row we can expect per file lets re-run the previous snippet this time replacing the file size with line count.

```
split -l 415000 file_to_split.csv
for i in *; do mv "$i" "$i.csv"; done
```

To summarise, we utilised the `-b` flag on the split command which meant we were able to split the file in to smaller chunks. If we want to split our file into files of 1MB is easy, we would use 1m. And the `-l` flag tells the split command how many lines of data we want before splitting a file.
