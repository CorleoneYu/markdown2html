# Markdown2html

> 工作中使用的某在线编辑器对于 markdown 语法支持不足，便在思考这一块的实现思路，想着之前自己写过的编译器，应该行得通，便准备新开个坑来尝试以下。

Markdown2html, 顾名思义，就是将 markdown 语法写就的文本转换成 html 格式，大概思路：

1. 词法解析：将 文本 转换成 Token
2. 语法解析：将 Token 转换成 AST
3. 生成 html：将 AST 转换成 HTML 节点

## 业界选手

1. markdown-it: js
2. commonmark: js
3. lute: go
