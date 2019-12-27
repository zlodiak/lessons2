import random
import redis
import pprint

r = redis.Redis(db=2)

random.seed(444)

h = (   { "color": "black", "price": 49.99, },
        { "color": "green", "price": 99.99, },)
hhhs = {f"hhh:{random.getrandbits(32)}": i for i in h}

with r.pipeline() as pipe:
    pipe.multi()
    for h_id, hhh in hhhs.items():
        pipe.hmset(h_id, hhh)
    
    pipe.execute()
    r.bgsave()


pp = pprint.PrettyPrinter(indent=4)
pp.pprint(r.hgetall("hhh:1236154736"))
pp.pprint(r.hgetall("hhh:1326692461"))
print(r.keys())


# CONSOLE OUTPUT:
# (redis-py) md@md ~/.MINT18/code/python/redis-py $ python index.py
# {b'color': b'green', b'price': b'99.99'}
# {b'color': b'black', b'price': b'49.99'}
# [b'hhh:1236154736', b'hhh:1326692461']
