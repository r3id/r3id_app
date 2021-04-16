---
layout: article
title:  "How to: Translate Google Sheets"
categories: translate google sheets
---

On a recent project, I had scraped data from a Spanish site. This data needed to be imported into a Shopify store, but also needed to be translated into English.

After a quick search on Google I found you could translate one cell at a time within Excel. While this is fine when you have a few cells to translate what happens when you need to translate 6000 or more.

Next up I tried google sheets, I found some extensions which claimed they could do the task in hand. Errr… nope they didn't do anything!

I then discovered the following method, which worked a treat.

- **Step 1**, add a new column next to the one you want to translate. We will call this column B.
- **Step 2**, highlight the first cell, and start to enter `=GOOGLETRANSLATE()`
- **Step 3**, you need to add in the cell you want to translate, then the language of the cell. Next up add the language you’d like to translate to. See below for our final snippet.

```
=GOOGLETRANSLATE(A1, “es”, “en”)
```

Once you confirm this works, drag the fill handle at the bottom of the formula cell down to apply this formula to more than one cell. :-)

You can now copy this to an excel sheet and edit as needed. Remember to remove any cells which show #VALUE!. This happens when you have a blank cell.
