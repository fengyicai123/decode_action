#2025-02-14 11:27:48
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64
import time
import requests
import random
import os
code="玛雅原石"
ver="1.0"
envname="yuanshen_myys"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
   time.sleep(random.randint(10,20))
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
def aes_encrypt(plaintext):
 key="dY85i10PMNb19484"
 iv="MayaIsAnIV123000"
 key_bytes=key.encode('utf-8')
 iv_bytes=iv.encode('utf-8')
 if len(key_bytes)!=16 or len(iv_bytes)!=16:
  raise ValueError("Key and IV must be 16 bytes long")
 plaintext_bytes=plaintext.encode('utf-8')
 cipher=AES.new(key_bytes,AES.MODE_CBC,iv_bytes)
 ciphertext_bytes=cipher.encrypt(pad(plaintext_bytes,AES.block_size))
 ciphertext_base64=base64.b64encode(ciphertext_bytes).decode('utf-8')
 return ciphertext_base64
class yuanshen:
 def __init__(self,cookie):
  self.userid=cookie
 def open(self):
  headers={"Host":"www.taoymall.com","Connection":"keep-alive","sec-ch-ua":"Chromium;v=118, Android","sec-ch-ua-mobile":"?1","sec-ch-ua-platform":"Android","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.0.0 Mobile Safari/537.36","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"cocos.immortalrecord.com.thtx","Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  cookies={"mayauserid":"206010322","mayausername":"%e6%96%b0%e7%94%a8%e6%88%b7","mayaapp":"app"}
  url='https://www.taoymall.com/maya/adminopensub'
  r=requests.get(url,headers=headers,cookies=cookies)
  if r.status_code==200:
   print(f"账号[{self.userid}]登录&开启收集成功")
   return True
  else:
   print(f"账号[{self.userid}]登录&开启收集失败")
   return False
 def watchad(self):
  timestamp=int(time.time()*1000)
  data=f'{self.userid}@{timestamp}@ad1@M1718975870806Y1Os4q1'
  ciphertext=aes_encrypt(data)
  headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"117","Host":"www.taoymall.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/4.2.0"}
  url="https://www.taoymall.com/maya/adnew"
  data={"userid":f"{self.userid}","str":f"{ciphertext}"}
  r=requests.post(url,headers=headers,data=data)
  if r.status_code==200:
   print(f"观看成功，返回:[{r.text}]")
   return True
  else:
   print(f"观看失败，返回:[{r.text}]")
   return False
 def main(self):
  if self.open():
   while True:
    if not self.watchad():
     break
    time.sleep(random.randint(50,80))
if __name__=="__main__":
 env()
