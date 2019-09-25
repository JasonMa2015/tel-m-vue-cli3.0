module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    'serverConfig': false // 声明全局变量
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    // allow async-await
    "generator-star-spacing": 0, //生成器函数*的前后空格
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, //函数参数不能重复
    "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
    "no-eval": 1, //禁止使用eval
    "no-func-assign": 2, //禁止重复的函数声明
    "no-irregular-whitespace": 2, //不能有不规则的空格
    "no-redeclare": 2, //禁止重复声明变量
    "no-shadow": 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-trailing-spaces": 2, //一行结束后面不要有空格
    "no-undef": 2, //不能有未定义的变量
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "curly": [2, "all"], //必须使用 if(){} 中的{}
    // "indent": [2], //缩进风格
    'vue/script-indent': [
      'error',
      2,
      {
        'baseIndent': 0
      }
    ],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }], //对象字面量中冒号的前后空格
    "object-shorthand": 2, //强制对象字面量缩写语法
    "quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号
    "space-before-function-paren": [2, "always"], //函数定义时括号前面要不要有空格
    "semi": [2, "always"], //语句强制分号结尾
    "semi-spacing": [2, { "before": false, "after": true }], //分号前后空格
    "spaced-comment": 2, //注释风格要不要有空格什么的
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}