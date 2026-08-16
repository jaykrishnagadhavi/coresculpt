import json
import re

def strip_emoji(text):
    # Regex to match emojis and some other symbols
    emoji_pattern = re.compile(
        u"(\ud83d[\ude00-\ude4f])|"  # emoticons
        u"(\ud83c[\udf00-\uffff])|"  # symbols & pictographs (1 of 2)
        u"(\ud83d[\u0000-\uddff])|"  # symbols & pictographs (2 of 2)
        u"(\ud83d[\ude80-\udeff])|"  # transport & map symbols
        u"(\ud83c[\udde0-\uddff])|"  # flags (iOS)
        u"[\u2600-\u26FF]\uFE0F?|"    # miscellaneous symbols
        u"[\u2700-\u27BF]\uFE0F?|"    # dingbats
        u"\u24C2\uFE0F?|"             # M
        u"[\u2049-\u21aa]\uFE0F?|"
        u"\u2B50\uFE0F?|"             # star
        u"[\u2934-\u2935]\uFE0F?|"
        u"[\u3297-\u3299]\uFE0F?|"
        u"[\uE0020-\uE007F]|"
        u"[\u25B6\u25C0\u25FB\u25FC\u25FD\u25FE\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B55\u231A\u231B\u2328\u23CF\u23E9\u23EA\u23EB\u23EC\u23ED\u23EE\u23EF\u23F0\u23F1\u23F2\u23F3\u23F8\u23F9\u23FA]\uFE0F?"
        "+", flags=re.UNICODE)
    return emoji_pattern.sub(r'', text)

try:
    # also use a simpler regex via demoji if available, but let's try a simple manual replace first
    pass
except:
    pass

import codecs
with codecs.open('D:/codebase/coresculpt/src/data.js', 'r', 'utf-8') as f:
    content = f.read()
    
# Remove common emojis we found
emojis = ["😇", "😃", "😍", "😂", "😄", "😊", "👍", "👏", "🏼", "❤️", "✅", "🌟", "💪", "👑", "✨", "⭐️"]
for e in emojis:
    content = content.replace(e, "")

with codecs.open('D:/codebase/coresculpt/src/data.js', 'w', 'utf-8') as f:
    f.write(content)
print("Done")
