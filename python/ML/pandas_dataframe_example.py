import json

path = './data_raw.txt'
records = [json.loads(line) for line in open(path)]

print(records[0])

# {
#     "a": "Mozilla\/5.0 (Linux; U; Android 4.1.2; en-us; HTC_PN071 Build\/JZO54K) AppleWebKit\/534.30 (KHTML, like Gecko) Version\/4.0 Mobile Safari\/534.30",
#     "c": "US",
#     "nk": 0,
#     "tz": "America\/Los_Angeles",
#     "gr": "CA",
#     "g": "15r91",
#     "h": "10OBm3W",
#     "l": "pontifier",
#     "al": "en-US",
#     "hh": "j.mp",
#     "r": "direct",
#     "u": "http:\/\/www.nsa.gov\/",
#     "t": 1368832205,
#     "hc": 1365701422,
#     "cy": "Anaheim",
#     "ll": [33.816101, -117.979401]
# } {
#     "a": "Mozilla\/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MDDR)",
#     "c": null,
#     "nk": 0,
#     "tz": "",
#     "g": "ifIpBW",
#     "h": "ifIpBW",
#     "l": "bitly",
#     "al": "en-us",
#     "hh": "1.usa.gov",
#     "r": "http:\/\/www.usa.gov\/",
#     "u": "http:\/\/answers.usa.gov\/system\/selfservice.controller?CONFIGURATION=1000&PARTITION_ID=1&CMD=VIEW_ARTICLE&USERTYPE=1&LANGUAGE=en&COUNTRY=US&ARTICLE_ID=11103",
#     "t": 1368832207,
#     "hc": 1302189369
# } 


from pandas import DataFrame, Series
import pandas as pd

frame = DataFrame(records)
print(frame)

#                                                       a     c   nk                   tz   gr        g  ...             t            hc             cy                        ll _heartbeat_   kw
# 0     Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; H...    US  0.0  America/Los_Angeles   CA    15r91  ...  1.368832e+09  1.365701e+09        Anaheim  [33.816101, -117.979401]         NaN  NaN
# 1     Mozilla/4.0 (compatible; MSIE 7.0; Windows NT ...  None  0.0                       NaN   ifIpBW  ...  1.368832e+09  1.302189e+09            NaN                       NaN         NaN  NaN
