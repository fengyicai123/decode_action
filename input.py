#   --------------------------------注释&变量区--------------------------------
#   入口:微信打开：https://www.taoymall.com/maya/reg?id=206010322
#   变量填写你的登录码
#   记得下载app手动登录
#   变量名：yuanshen_myys 多号分割方式 [ @ 或 换行 或 新建同名变量 ]
#
#   --------------------------------一般不动区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
# 
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#佛曰:  
#        写字楼里写字间，写字间里程序员；  
#        程序人员写程序，又拿程序换酒钱。  
#        酒醒只在网上坐，酒醉还来网下眠；  
#        酒醉酒醒日复日，网上网下年复年。  
#        但愿老死电脑间，不愿鞠躬老板前；  
#        奔驰宝马贵者趣，公交自行程序员。  
#        别人笑我忒疯癫，我笑自己命太贱；  
#        不见满街漂亮妹，哪个归得程序员？
#
#   --------------------------------代码区--------------------------------
import bz2, base64
exec(bz2.decompress(base64.b64decode('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')))
