import redis

r = redis.Redis('127.0.0.1')
r.publish('qwerty', 'www')