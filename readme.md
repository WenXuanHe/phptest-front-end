
i:插入模式，按esc返回普通模式
x：删除光标所在的字符
:wq 保存并退出
dd 删除（复制）当前行
p 粘贴


推荐：
插入模式变种命令：
a：在光标后插入
o：在当前行之后插入新行
O：在当前行之前插入新行
cw：替换从光标到单词结束


hjkl 基本的光标移动，hj按行移动
:help<command>显示关于command的帮助，可以使用help不带command获得常规帮助


基本移动命令：
0；跳到第一列
^:跳到本行第一个非空字符
$:跳到 本行末尾
g_ : 跳到本行第一个非空字符
/pattern 搜索pattern
yy:复制当前行

取消/恢复
u:取消
<C-r> 恢复 这个没有实现其功能...

:e <文件路径> 打开
:w 保存
:saveas <文件路径>  保存到这个文件
:wq  保存和退出
:q! 退出但不保存
:bn  显示下一个文件缓存





