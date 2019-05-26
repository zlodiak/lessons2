from concurrent.futures import ThreadPoolExecutor
import time

def task(n):
    time.sleep(3)
    print("Processing {}".format(n))

def main():
 print("Starting ThreadPoolExecutor")
 with ThreadPoolExecutor(max_workers=3) as executor:
   future = executor.submit(task, (2))
   future = executor.submit(task, (3))
   future = executor.submit(task, (4))
   future = executor.submit(task, (5))
   future = executor.submit(task, (6))
   future = executor.submit(task, (7))
   future = executor.submit(task, (8))
 print("All tasks complete")

if __name__ == '__main__':
 main()



 # выполняет потоки параллельно. при этом одновременно выполняться могут на более 3 потоков