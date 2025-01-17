---
title: LaTeX常用数学公式
date: 2025-01-17
categories:
  - Markdown
  - 公式
tags:
  - LaTeX
---

# LaTeX常用数学公式速查表

## 基础符号

1. 上标和下标
   - 上标：`x^2` → $x^2$
   - 下标：`x_i` → $x_i$
   - 组合：`x^2_i` → $x^2_i$

2. 分数
   - 简单分数：`\frac{a}{b}` → $\frac{a}{b}$
   - 连分数：`\frac{1}{\frac{1}{2}}` → $\frac{1}{\frac{1}{2}}$

3. 根号
   - 平方根：`\sqrt{x}` → $\sqrt{x}$
   - n次方根：`\sqrt[n]{x}` → $\sqrt[n]{x}$

## 运算符号

4. 基本运算
   - 加：`+` → $+$
   - 减：`-` → $-$
   - 乘：`\times` → $\times$
   - 除：`\div` → $\div$
   - 点乘：`\cdot` → $\cdot$

5. 关系运算
   - 等于：`=` → $=$
   - 不等于：`\neq` → $\neq$
   - 大于：`>` → $>$
   - 小于：`<` → $<$
   - 大于等于：`\geq` → $\geq$
   - 小于等于：`\leq` → $\leq$
   - 约等于：`\approx` → $\approx$

## 集合符号

6. 基本集合
   - 属于：`\in` → $\in$
   - 不属于：`\notin` → $\notin$
   - 包含：`\subset` → $\subset$
   - 真包含：`\subseteq` → $\subseteq$
   - 并集：`\cup` → $\cup$
   - 交集：`\cap` → $\cap$
   - 空集：`\emptyset` → $\emptyset$

## 函数符号

7. 三角函数
   - 正弦：`\sin x` → $\sin x$
   - 余弦：`\cos x` → $\cos x$
   - 正切：`\tan x` → $\tan x$
   - 余切：`\cot x` → $\cot x$

8. 对数函数
   - 对数：`\log x` → $\log x$
   - 自然对数：`\ln x` → $\ln x$
   - 以n为底：`\log_n x` → $\log_n x$

## 极限与积分

9. 极限
   - `\lim_{x \to \infty}` → $\lim_{x \to \infty}$
   - `\lim_{x \to 0}` → $\lim_{x \to 0}$

10. 积分
    - 定积分：`\int_a^b f(x)dx` → $\int_a^b f(x)dx$
    - 不定积分：`\int f(x)dx` → $\int f(x)dx$
    - 二重积分：`\iint` → $\iint$
    - 三重积分：`\iiint` → $\iiint$

## 求和与连乘

11. 求和
    - `\sum_{i=1}^n` → $\sum_{i=1}^n$
    - `\sum\limits_{i=1}^n` → $\sum\limits_{i=1}^n$

12. 连乘
    - `\prod_{i=1}^n` → $\prod_{i=1}^n$
    - `\prod\limits_{i=1}^n` → $\prod\limits_{i=1}^n$

## 矩阵

13. 基本矩阵
```latex
\begin{matrix}
a & b \\
c & d
\end{matrix}
```
$\begin{matrix}
a & b \\
c & d
\end{matrix}$

14. 带括号的矩阵
```latex
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
```
$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$

## 希腊字母

15. 常用小写
    - α：`\alpha` → $\alpha$
    - β：`\beta` → $\beta$
    - γ：`\gamma` → $\gamma$
    - θ：`\theta` → $\theta$
    - π：`\pi` → $\pi$

16. 常用大写
    - Γ：`\Gamma` → $\Gamma$
    - Δ：`\Delta` → $\Delta$
    - Θ：`\Theta` → $\Theta$
    - Π：`\Pi` → $\Pi$

## 特殊符号

17. 箭头
    - 右箭头：`\rightarrow` → $\rightarrow$
    - 左箭头：`\leftarrow` → $\leftarrow$
    - 双向箭头：`\leftrightarrow` → $\leftrightarrow$
    - 长右箭头：`\longrightarrow` → $\longrightarrow$

18. 数学符号
    - 无穷：`\infty` → $\infty$
    - 偏导：`\partial` → $\partial$
    - 点导数：`\dot{x}` → $\dot{x}$
    - 二阶导数：`\ddot{x}` → $\ddot{x}$

## 常用公式示例

19. 二次方程
    - `ax^2 + bx + c = 0` → $ax^2 + bx + c = 0$
    - 求根公式：`x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}` → $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$

20. 泰勒展开
    - `f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots` 
    → $f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots$

## 使用技巧

1. 行内公式使用单个`$`符号包裹
2. 独立公式使用双`$$`符号包裹
3. 多行公式可以使用`align`环境
4. 公式编号可以使用`\tag{}`命令

## 注意事项

1. 在Markdown中使用LaTeX公式时，需要确保编辑器或平台支持LaTeX渲染
2. 某些特殊符号可能需要转义
3. 复杂公式建议使用独立公式模式，以获得更好的显示效果
4. 注意公式中的空格和换行，它们可能影响渲染效果