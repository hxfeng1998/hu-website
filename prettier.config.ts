import type { Config } from 'prettier'

const config: Config = {
  // 每行代码的最大宽度
  printWidth: 100,
  // 使用单引号代替双引号
  singleQuote: true,
  // 在对象或数组最后一个元素后面是否加逗号
  trailingComma: 'es5',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // 箭头函数，只有一个参数的时候，不需要括号
  arrowParens: 'avoid',
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 格式化嵌入的内容
  embeddedLanguageFormatting: 'auto',
  // 格式化的起始位置
  rangeStart: 0,
  // 格式化的结束位置
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: true,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: true,
  // markdown 文本换行方式
  proseWrap: 'preserve',
}

export default config 