# http://python-3.ru/page/multiprocessing


from multiprocessing import Process
from time import sleep
     
def worker(n):
    print("the worker went to the office")  
    sleep(n)
    print("the worker has been walking for %d sec" % n)
     
if __name__ == "__main__":
    plist = [] 
    for i in range(4, 0, -1):
        proc = Process(target=worker, args=(i,))
        plist.append(proc)
     
    for proc in plist:
        proc.start()