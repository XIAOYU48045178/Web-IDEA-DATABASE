`VUE 简介`
--

`> 定义`

`VUE 是用于构建用户界面的 JavaScript 渐进式框架` `它基于标准 HTML CSS 和 JavaScript 构建 并提供了一套 声明式的 组件化的 编程模型 助你高效地开发用户界面`

`> 基本用法 计数器`

```vue
<div id="app">
    <button @click="count++">
        {{ count }}
    </button>
</div>

import { createApp, ref } from 'VUE'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

`> 两个核心特性`

`1、声明式渲染` `VUE 使用模板语法扩展了标准 HTML 允许我们根据 JavaScript 状态声明式描述 HTML 输出`

`2、反应性` `VUE 会自动跟踪 JavaScript 状态的变化并在发生变化时有效地更新 DOM`

`> 单文件组件` `单文件组件的格式重写的计数器`

`在大多数启用了构建工具的 VUE 项目中 我们可以使用一种类似 HTML 格式的文件来书写 VUE 组件 它被称为单文件组件 (也被称为 *.VUE 文件 英文 Single-File Components 缩写为 SFC) 顾名思义 VUE 的单文件组件会将一个组件的逻辑 (JavaScript) 模板 (HTML) 和样式 (CSS) 封装在同一个文件里`

```vue
<script setup>
import { ref } from 'VUE'
const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

`> 框架和库的区别`

`! 框架` 

`框架是一套完整的解决方案 对项目的侵入性较大 项目如果需要更换框架则需要重新架构整个项目 但是优点也很明显 功能完善 提供了一整套的解决方案`

`! 库 插件` 

`只是提供某一个小功能 对项目的侵入性较小 如果某个库无法完成某些需求可以很容易切换到其它库实现需求`

`> API 风格`

`1、选项式 API` 

`选项式 API 我们可以用包含多个选项的对象 如 data methods mounted 来描述组件的逻辑` `选项所定义的属性都会暴露在函数内部的 this 上它会指向当前的组件实例` `data="返回的属性将会成为响应式的状态"` `methods="更改状态与触发更新的函数"` `mounted="在组件挂载完成后被调用"`  
  
```html
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    mounted() {
        console.log(`Initial count is ${this.count}`)
    }
}
</script>

<template>
    <button @click="increment">{{ count }}</button>
</template>
```

`2、组合式 API`

`通过组合式 API 我们可以使用导入的 API 函数来描述组件逻辑 在单文件组件中组合式 API 通常会与 <script setup> 搭配使用 这个 setup attribute 是一个标识告诉 VUE 需要在编译时进行一些处理让我们可以更简洁地使用组合式 API 比如 <script setup> 中的导入和顶层变量/函数都能够在模板中直接使用`

```html
<script setup>
import { ref, onMounted } from 'VUE'

const count = ref(0)

function increment() {
    count.value++
}

onMounted(() => {
    console.log(`Initial count is ${count.value}.`)
})
</script>

<template>
    <button @click="increment">{{ count }}</button>
</template>
```


`创建应用程序`
--

`> 应用实例` `通过 createApp 函数创建一个新的应用实例`

```js
import { createApp } from 'VUE'
const app = createApp({})
```

`> 根组件`

`传入 createApp 的对象实际上是一个组件 每个应用都需要一个根组件该组件可以包含其他组件作为其子组件`

`如果你使用的是单文件组件我们可以直接从另一个文件中导入根组件`

```js
import { createApp } from 'VUE'
import App from './App.VUE'
const app = createApp(App)
```

`大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的`

`> 挂载应用`

`应用实例必须在调用了 .mount 方法后才会渲染出来 该方法接收一个容器参数可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串`

`应用的根组件的内容将在容器元素内呈现容器元素本身不被视为应用的一部分`

`.mount` `方法应该始终在整个应用配置和资源注册完成后被调用 同时请注意不同于其他资源注册方法它的返回值是根组件实例而非应用实例`

`! DOM 中的根组件模板`

`根组件的模板通常是组件本身的一部分但也可以直接通过在挂载容器内编写模板来单独提供` `当根组件没有设置 template 选项时 将自动使用容器的 innerHTML 作为模板`

`DOM 内模板通常用于无构建步骤的应用程序 它们也可以与服务器端框架一起使用 其中根模板可能是由服务器动态生成的`

`> 应用配置` `确保在挂载应用实例之前完成所有应用配置`

`应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项 `

`1、定义一个应用级的错误处理器用来捕获所有子组件上的错误` `app.config.errorHandler = (err) => {}`

`2、注册应用范围内可用的资源` `app.component('DeleteButton', DeleteButton)`

`> 多个应用实例`

`createApp API 允许你在同一个页面中创建多个共存的应用 而且每个应用都拥有自己的用于配置和全局资源的作用域`

```js
const app1 = createApp({})
app1.mount('')

const app2 = createApp({})
app2.mount('')
```

`如果只想要去控制一个大型页面中特殊的一小部分 应避免将一个单独的应用实例挂载到整个页面上 而是应该创建多个小的应用实例将它们分别挂载到所需的元素上去`


`模板语法`
--

`> 文本插值` `{{}} 即 mustache 语法`

`{{ name }}`

`> v-text`

`<span v-text="会覆盖元素中原本的内容">xiao</span>`

`> 原始 HTML` `v-html`

`在您的网站上动态呈现任意 HTML 可能非常危险因为它很容易导致 XSS 漏洞 仅在受信任的内容上使用切勿在用户提供的内容上使用`

`不能使用 v-html 来拼接组合模板 因为 VUE 不是一个基于字符串的模板引擎 在使用 VUE 时应当使用组件作为 UI 重用和组合的基本单元`

`<span v-html="<h1>xiao</h1>"></span>`

`> Attribute 绑定` `v-bind` `OR` `:`

`双大括号不能在 HTML attributes 中使用 想要响应式地绑定一个 attribute 应该使用 v-bind`

`如果绑定的值是 null 或者 undefined 那么该 attribute 将会从渲染的元素上移除`

`<div v-bind:id="xiaoId"></div>` `简写` `<div :id="xiaoId"></div>` `将元素的 id attribute 与组件的 xiaoId 状态保持一致`

`! 同名简写 3.4 +` 

`如果属性与绑定的 JavaScript 值同名则可以进一步缩短语法以省略属性值` 

`<div v-bind:id></div>` `<div :id></div>` `即` `:id="id"`

`! 布尔型 Attribute` 

`布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上`

`<button :disabled="isButtonDisabled">Button</button>`

`当 isButtonDisabled 为真值或一个空字符串 即 <button disabled=""> 时元素会包含这个 disabled attribute 而当其为其他假值时 attribute 将被忽略`

`! 动态绑定多个属性` 

```js
const object = {
    id: 'xi',
    class: 'xiao'
    style: 'background-color:green'
}
```

`通过不带参数的 v-bind 可以将它们绑定到单个元素上` `<div v-bind="object"></div>`

`> JavaScript 表达式`

`JavaScript 表达式可以被使用在如下场景` `内部文本插值` `指令以 v- 开头的特殊 attribute 的值中`

``1. {{ count + 1 }}``

``2. {{ ok ? 'YES' : 'NO' }}``

``3. {{ message.split('').reverse().join('') }}``

``4. <div :id="`list-${id}`"></div>``

`这些表达式都会被作为 JavaScript 以当前组件实例为作用域解析执行`

`! 仅支持表达式`

`无效的语法: ` `{{ var a = 1 }}` `{{ if (ok) { return message } }}`

`每个绑定仅支持单一表达式也就是一段能够被求值的 JavaScript 代码`

`简单的判断方法` `是否可以合法地写在 return 后面`

`! 调用函数`

```html
<time :title="date(date)" :datetime="date">
    {{ formatDate(date) }}
</time>
```

`在绑定表达式中调用的函数将在组件每次更新时调用因此它们不应产生任何副作用例如更改数据或触发异步操作`

`! 受限的全局访问`

`模板中的表达式将被沙盒化仅能够访问到有限的全局对象列表 该列表中会暴露常用的内置全局对象比如 Math 和 Date`

`没有显式包含在列表中的全局对象将不能在模板内表达式中访问 例如用户附加在 window 上的属性 然而你也可以自行在 app.config.globalProperties 显式地添加它们供所有的 VUE 表达式使用`

`> 指令` `Directives` 

`指令由 v- 作为前缀表明它们是一些由 VUE 提供的特殊 attribute 它们将为渲染的 DOM 应用特殊的响应式行为`

`指令是带有前缀的特殊 attribute` `指令 attribute 的期望值为一个 JavaScript 表达式 v-for v-on v-slot 除外 指令任务是在其表达式的值变化时响应式地更新 DOM`

`! 参数` `Arguments`

`v-bind:Arguments` `v-on:Arguments`

`! 动态参数` 

`指令参数上也可以使用一个 JavaScript 表达式需要包含在一对方括号内` `作为一个 JavaScript 表达式被动态执行 计算得到的值会被作为最终的参数`

`1、<a v-bind:[attribute]=""></a>`

`2、<a v-on:[event]=""></a>`

`!! 动态参数值的限制​`

`动态参数中表达式的值应当是一个字符串或 null` `null 意为显式移除该绑定` `其他非字符串的值会触发警告`

`!! 动态参数语法的限制​`

`动态参数表达式因为某些字符的缘故有一些语法限制 比如空格和引号在 HTML attribute 名称中都是不合法的`

`如果需要传入一个复杂的动态参数推荐使用计算属性替换复杂的表达式`

`! 修饰符` `modifiers`

`修饰符是以点开头的特殊后缀表明指令需要以一些特殊的方式被绑定`


`响应式基础 组合式`
--

`> 声明响应式状态`

`! ref` 

`在组合式 API 中推荐使用 ref 函数来声明响应式状态`

```js
import { ref } from 'vue'

const count = ref(0)
```

`ref 接收参数 并将其包裹在一个带有 .value 属性的 ref 对象中返回`

```js
const count = ref(0)

console.log(count) --{ value: 0 }
console.log(count.value) --0

count.value++
console.log(count.value) --1
```

`要在组件模板中访问 ref 请从组件的 setup 函数中声明并返回它们`

`在模板中使用 ref 时 我们不需要附加 .value 为了方便起见当在模板中使用时 ref 会自动解包`

`对于更复杂的逻辑 我们可以在同一作用域内声明更改 ref 的函数 并将它们作为方法与状态一起公开`

```js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
```

`> <script setup>`

`在 setup 函数中手动暴露大量的状态和方法非常繁琐 幸运的是我们可以通过使用单文件组件 (SFC) 来避免这种情况 我们可以使用 <script setup> 来大幅度地简化代码`

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

`<script setup> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用 你可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容`

`! 深层响应性`

`Ref 可以持有任何类型的值包括深层嵌套的对象数组或者 JavaScript 内置的数据结构  Ref 会使它的值具有深层响应性 这意味着即使改变嵌套对象或数组时变化也会被检测到`

`! DOM 更新时机`

```js
import { nextTick } from 'vue'

async function increment() {
  count.value++
  await nextTick()
}
```

`> reactive`

`还有另一种声明响应式状态的方式 即使用 reactive API 与将内部值包装在特殊对象中的 ref 不同 reactive 将使对象本身具有响应性`

```js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

```html
<button @click="state.count++">
  {{ state.count }}
</button>
```

`! reactive 的局限性`

`有限的值类型：它只能用于对象类型 (对象、数组和如 MAP、Set 这样的集合类型) 它不能持有如 string、number 或 boolean 这样的原始类型`

`不能替换整个对象：由于 VUE 的响应式跟踪是通过属性访问实现的 因此我们必须始终保持对响应式对象的相同引用 这意味着我们不能轻易地替换响应式对象因为这样的话与第一个引用的响应性连接将丢失`

`对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时或者将该属性传递给函数时我们将丢失响应性连接`

`> ref 解包细节`

`! 作为 reactive 对象的属性`

`一个 ref 会在作为响应式对象的属性被访问或修改时自动解包 它的行为就像一个普通的属性`

```js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) --0

state.count = 1
console.log(count.value) --1
```

`如果将一个新的 ref 赋值给一个关联了已有 ref 的属性 那么它会替换掉旧的 ref`

```js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) --2
console.log(count.value) --1
```

`只有当嵌套在一个深层响应式对象内时 才会发生 ref 解包 当其作为浅层响应式对象的属性被访问时不会解包`

`! 数组和集合的注意事项`

`与 reactive 对象不同的是 当 ref 作为响应式数组或原生集合类型如 Map 中的元素被访问时 它不会被解包`

```js
const books = reactive([ref('Xiao Yu')])
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
console.log(map.get('count').value)
```

`! 在模板中解包的注意事项`

`在模板渲染上下文中 只有顶级的 ref 属性才会被解包`

```js
const count = ref(0)
const object = { id: ref(1) }
```

`因此 这个表达式按预期工作 {{ count + 1 }} 这个不会 {{ object.id + 1 }}`

`渲染的结果将是 [object Object]1 因为在计算表达式时 object.id 没有被解包 仍然是一个 ref 对象 为了解决这个问题我们可以将 id 解构为一个顶级属性`

```vue
const { id } = object

{{ id + 1 }}
```

`如果 ref 是文本插值的最终计算值 即 {{ }} 标签 那么它将被解包`

`{{ object.id }}`

`该特性仅仅是文本插值的一个便利特性 等价于 {{ object.id.value }}`


`计算属性 组合式`
--

`模板中的表达式虽然方便但也只能用来做简单的操作如果在模板中写太多逻辑会让模板变得臃肿难以维护` `使用计算属性来描述依赖响应式状态的复杂逻辑`

```vue
<script setup>
import { reactive, computed } from 'vue'

const xi = reactive({
  xiao: 'XAIOYU',
  xingming: [
    'Xiao',
    'Yu',
  ]
})

const xiaoYu = computed(() => {
  return xi.xingming.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <span>{{ xiaoYu }}</span>
</template>
```

`我们在这里定义了一个计算属性 xiaoYu computed 方法期望接收一个 Getter 函数 返回值为一个计算属性 ref 和其他一般的 ref 类似 你可以通过 xiaoYu.value 访问计算结果 计算属性 ref 也会在模板中自动解包 因此在模板表达式中引用时无需添加 .value VUE 的计算属性会自动追踪响应式依赖 它会检测到 xiaoYu 依赖于 xi.xingming 所以当 xi.xingming 改变时 任何依赖于 xiaoYu 的绑定都会同时更新`

`> 计算属性和方法的区别`

`在模板中使用计算属性的方式和一般的属性并无二致` `会检测到计算属性依赖于状态 所以当状态改变时任何依赖于计算属性的绑定都将同时更新` 

`计算属性缓存` `计算属性值会基于其响应式依赖被缓存 一个计算属性仅会在其响应式依赖更新时才重新计算 方法调用总是会在重渲染发生时再次执行函数`

`> 可写计算属性`

`计算属性默认是只读的当你尝试修改一个计算属性时你会收到一个运行时警告 只在某些特殊场景中你可能才需要用到可写的属性你可以通过同时提供 Getter 和 setter 来创建`

```js
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Xiao')
const lastName = ref('Yu')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```

`现在当你再运行 fullName.value = 'Xiao Yu' 时 setter 会被调用而 firstName 和 lastName 会随之更新`

`> 最佳实践`

`! Getter 不应有副作用​`

`计算属性的 Getter 应只做计算而没有任何其他的副作用 请务必牢记 举例来说不要改变其他状态 在 Getter 中做异步请求或者更改 DOM！一个计算属性的声明中描述的是如何根据其他值派生一个值 因此 Getter 的职责应该仅为计算和返回该值`

`! 避免直接修改计算属性值​`

`从计算属性返回的值是派生状态 可以把它看作是一个临时快照 每当源状态发生变化时就会创建一个新的快照 更改快照是没有意义的因此计算属性的返回值应该被视为只读的 并且永远不应该被更改 应该更新它所依赖的源状态以触发新的计算`


`类与样式绑定`
--

`数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式` `我们可以和其他 attribute 一样使用 v-bind 将它们和动态的字符串绑定` `但是在处理比较复杂的绑定时通过拼接生成字符串是麻烦且易出错的` `因此 VUE 专门为 class 和 style 的 v-bind 用法提供了特殊的功能增强 除了字符串外表达式的值也可以是对象或数组`

`> 绑定 HTML class`

`! 绑定对象`

`1、<div :class="{ active: isActive }"></div>`

`2、:class 指令也可以和一般的 class attribute 共存` `<div class="static" :class="{ active: isActive, 'text-danger':error }"></div>`  

`:class 绑定中需要使用引号 单引号或双引号 来包围字符串类名特别是当类名包含连字符 - 时 因为 JavaScript 对象字面量中的键 KEY 不能包含连字符除非它们被引号包围`

`3、<div :class="classObj"></div>`

```js
calssObj:{
    aaa:true,
    bbb:true,
    ccc:false
}
```

`绑定的对象并不一定需要写成内联字面量的形式也可以直接绑定一个对象`  
    
`4、<div :class="backgroundColor"></div>` 

`5、<div :class="classObject"></div>` `可以绑定一个返回对象的计算属性`

```js
const isXiao = ref(true)
const xi = ref(null)

const classObject = computed(() => ({
  xiao: isXiao.value && !xi.value,
  'xiao-u': xi.value && xi.value.type === 'fatal'
}))
```

`! 绑定数组`

`1、<div :class="[activeClass, errorClass]"></div>`

`2、<div :class="classarr"></div>` `classarr:["aa","bb"]`

`3、<div :class="[isActive ? activeClass : '', errorClass]"></div>`

`4、<div :class="[{ [activeClass]: isActive }, errorClass]"></div>`

`! 组件上使用`

`对于只有一个根元素的组件 当你使用了 class attribute 时 这些 class 会被添加到根元素上并与该元素上已有的 class 合并`

`如果你的组件有多个根元素 你将需要指定哪个根元素来接收这个 class 你可以通过组件的 $attrs 属性来指定接收的元素`

`> 绑定内联样式`

`! 绑定对象`

`1、<div :style="{ color: activeColor, fontSize: fontSize}"></div>`

`2、<div :style="{ 'font-size': fontSize }"></div>`

`推荐使用 camelCase 但也支持 kebab-cased 即连字符分隔单词的命名方式的 CSS 属性 KEY 对应其 CSS 中的实际名称`

`3、<div :style="styleObj"></div>`

```js
styleObj:{
    backgroundColor:'red'
}
```

`! 绑定数组`

`1、<div :style="[baseStyles, overridingStyles]"></div>`

`2、<div :style="styleArr"></div>` `styleArr:[{backgroundColor:"green"}]`

`! 自动前缀`

`当你在 :style 中使用了需要浏览器特殊前缀的 CSS 属性时 VUE 会自动为他们加上相应的前缀 VUE 是在运行时检查该属性是否支持在当前浏览器中使用 如果浏览器不支持某个属性 那么将尝试加上各个浏览器特殊前缀以找到哪一个是被支持的`

`! 样式多值`

`可以对一个样式属性提供多个不同前缀的值`


`条件渲染`
--

`> 动态 创建 删除` `v-if` `v-else-if` `v-else` 

```html
<div v-if="isCreated">Created</div>
```

```html
<div id="box">
    <ul>
        <li v-for='item in datalist' :key="item.id">
            {{item.title}}---
            <span v-if="item.state===0">未付款</span>
            <span v-else-if="item.state===1">待发货</span>
            <span v-else-if="item.state===2">已发货</span>
            <span v-else>已签收</span>
        </li>
    </ul>
</div>
```

```
datalist:[  

    {id:1,title:"11111",state:0},
    {id:2,title:"22222",state:1},
    {id:3,title:"33333",state:2},
    {id:4,title:"44444",state:3},

]
```

`> <template>` 

`这是一个不可见的包装器元素最后渲染的结果并不会包含这个元素`

```js
<div id="box">
    <template v-if="isCreated"> 
        <div>11111111</div>
        <div>22222222</div>
        <div>33333333</div>
    </template>
</div>
```

```
isCreated:true
```

`> 动态 显示 隐藏` `v-show` 

`会在 DOM 渲染中保留该元素 仅切换了该元素的 CSS 属性` `不支持在 <template> 元素上使用`

`1、<h1 v-show="isShow">Hello!</h1>`

`> v-if vs v-show`

`v-if 有更高的切换开销 v-show 有更高的初始渲染开销 因此如果需要频繁切换则使用 v-show 较好 如果在运行时绑定条件很少改变则 v-if 会更合适`

`> v-if v-for`

`当 v-if 和 v-for 同时存在于一个元素上的时候 v-if 会首先被执行 不推荐同时使用 v-if 和 v-for 因为这样二者的优先级不明显`


`列表渲染`
--

`> 遍历` `v-for` `KEY`

`1、<li v-for="item in items"></li>`

`2、<li v-for="(item, index) in items"></li>`

`3、<li v-for="(value, KEY, index) in Object"></li>` `遍历对象时的第二个参数表示属性名`

`4、<li v-for="({ message }) in items"></li>` `可以在定义 v-for 的变量别名时使用解构`

`5、<li v-for="({ message }, index) in items"></li>`

`6、<li v-for="item in items"><span v-for="childItem in item.children"></span></li>` `子级可以访问父级作用域`

`7、<li v-for="(item, index) of items"></li>` `of 可以替代 in`

`8、<span v-for="n in 10">{{ n }}</span>`

`> <template>` `渲染包含多个元素的块`

```js
<ul>
<template v-for="item in items">
    <li>{{ item.message }}</li>
    <li class="" role=""></li>
</template>
</ul>
```

`> v-if v-for`

`当 v-if 和 v-for 同时存在于一个元素上的时候 v-if 会首先被执行 不推荐同时使用 v-if 和 v-for 因为这样二者的优先级不明显`

`> 通过 KEY 管理状态`

`绑定的值期望是一个基础类型的值​`

`默认按照 就地更新 的策略来更新通过 v-for 渲染的元素列表 当数据项的顺序改变时 VUE 不会随之移动 DOM 元素的顺序 而是就地更新每个元素确保它们在原本指定的索引位置上渲染 默认模式是高效的 但只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 为了以便它可以跟踪每个节点的标识从而重用和重新排序现有的元素你需要为每个元素对应的块提供一个唯一的 KEY attribute`

`1、<div v-for="item in items" :key="item.id"></div>`

`2、<template v-for="todo in todos" :key="todo.name"><li>...</li></template>`

`> 组件上使用 v-for`

`不会自动将任何数据传递给组件 因为组件有自己独立的作用域 为了将迭代后的数据传递到组件中 我们还需要传递 RPOPS`
    
`> 数组变化侦测`

`! 变更方法 顾名思义就是会对调用它们的原数组进行变更`

`1、push`

`2、pop`

`3、shift`

`4、unshift`

`5、splice`

`6、sort`

`7、reverse`

`! 非变更方法 都不会更改原数组总是返回一个新数组` `当遇到的是非变更方法时我们需要将旧的数组替换为新的`

`1、filter`

`2、concat`

`3、slice`

`遇到的是非变更方法时我们需要将旧的数组替换为新的`

`! 通过计算属性展示过滤或排序后的结果`

`有时我们希望显示数组经过过滤或排序后的内容而不实际变更或重置原始数据 在这种情况下你可以创建返回已过滤或已排序数组的计算属性`

`计算属性不可行的情况下 例如在多层嵌套的 v-for 循环中`

```js
<ul v-for="numbers in sets">
    <li v-for="n in even(numbers)"></li>
</ul>
```

```js

const sets = ref([

    [0,1, 2, 3, 4,],
    [5,6, 7, 8, 9,],

])

function even(numbers) {
    return numbers.filter(number => number % 2 === 0)
}

```


`事件处理`
--

`> 监听事件` `v-on` `@`

`> handler 即 事件处理器`

`1、内联事件处理器：事件被触发时执行的内联 JavaScript 语句`

`2、方法事件处理器：一个指向组件上定义的方法的属性名或是路径`

`> 内联事件处理器`

`1、<button @click="count++">Add</button>`

`> 方法事件处理器`

`可以通过被触发事件的 event.target 访问到该 DOM 元素`

`1、<button @click="add">Add</button>`

`> 方法与内联事件判断​`

`模板编译器会通过检查 v-on 的值是否是合法的 JavaScript 标识符或属性访问路径来断定是何种形式的事件处理器`

`> 内联处理器中调用方法`

`除了直接绑定方法 你还可以在内联事件处理器中调用方法 这允许我们向方法传入自定义参数以代替原生事件`

`> 内联事件处理器中访问事件参数`

`我们需要在内联事件处理器中访问原生 DOM 事件你可以向该处理器方法传入一个特殊的 $event 变量 或者使用内联箭头函数`

`<button @click="add($event,1,2,3)"></button>`

`<button @click="(event) => add(1,2,3,event)"></button>`

`> 事件源`

`1、evt.target`

`2、evt.target.value`

`3、evt.keyCode`

`> 事件修饰符`

`1、.stop = "事件将停止传递"` `<a @click.stop=""></a>`

`2、.prevent = "阻止事件默认行为"` `<form @submit.prevent=""></form>`

`3、.self = "事件处理器不来自子元素"` `<div @click.self=""></div>`

`4、.capture = "改变事件处理顺序 使事件处理函数在捕获阶段执行 允许在事件到达子元素之前进行拦截和处理"` `<div @click.capture=""></div>`

`5、.once = "事件最多被触发一次"` `<a @click.once=""></a>`

`6、.passive = "修饰符一般用于触摸事件的监听器"` `<div @scroll.passive=""></div>`

```html
<input type="text" @input="input"/>

<ul @click.self="ulClick">
    <li @click.stop="liClick">1111</li>
    <li @click="liClick">2222</li>
    <li @click.once="liClick">3333</li>
</ul>

<a href="http://www.baidu.com" @click.prevent>跳转</a>
```

`使用修饰符时需要注意调用顺序因为相关代码是以相同的顺序生成的因此使用`

`1. @click.prevent.self` `会阻止元素及其子元素的所有点击事件的默认行为`

`2. @click.self.prevent` `则只会阻止对元素本身的点击事件的默认行为`

`请勿同时使用 .passive 和 .prevent 如果你这么做了则 .prevent 会被忽略并且浏览器会抛出警告`

`> 按键修饰符`

`! 按键别名`

`1、.enter` `<input @keyup.enter="submit"/>`

`2、.tab`

`3、.delete` `捕获 Delete 和 Backspace 两个按键`

`4、.esc`

`5、.space`

`6、.up`

`7、.down`

`8、.left`

`9、.right`
  
```html
<input type="text" @keyup.enter.ctrl="ctrlEnter"/>
<input type="text" @keyup.13="enter"/>
```

`! 系统按键修饰符`

`可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器只有当按键被按下时才会触发`

`请注意系统按键修饰符和常规按键不同` `该按键必须在事件发出时处于按下状态`

`1、.ctrl` `<div @click.ctrl=""></div>`

`2、.alt` `<input @keyup.alt.enter=""/>`

`3、.shift`

`4、.meta`

`! .exact 修饰符` 

`允许精确控制触发事件所需的系统修饰符的组合`

`1、<button @click.ctrl=""></button>` `当按下 Ctrl 时 即使同时按下 Alt 或 Shift 也会触发`

`2、<button @click.ctrl.exact=""></button>` `仅当按下 Ctrl 且未按任何其他键时才会触发`

`3、<button @click.exact="onClick"></button>` `仅当没有按下任何系统按键时触发`

`! 鼠标按键修饰符`

`这些修饰符将处理程序限定为由特定鼠标按键触发的事件`

`1、.left`

`2、.right`

`3、.middle`


`表单输入绑定`
--

`> 双向绑定表单` `v-model`

`可以用于各种不同类型的输入 <textarea> <select> 元素 它会根据所使用的元素自动使用对应的 DOM 属性和事件组合`

`1、文本类型的 <input> 和 <textarea> 元素会绑定 value 并侦听 input 事件`

`2、<input type="checkbox"> 和 <input type="radio"> 会绑定 checked 并侦听 change 事件`

`3、<select> 会绑定 value 并侦听 change 事件`

`v-model 会忽略任何表单元素上初始的 value checked selected attribute它将始终将当前绑定的 JavaScript 状态视为数据的正确来源你应该在  JavaScript 中使用 data 选项来声明该初始值`

`> 基本用法`

`! 文本`

`1、<input type="text" v-model="text" placeholder="Edit"/>`

`! 多行文本`

`<textarea> 中是不支持插值表达式 请使用 v-model`

`<textarea>{{ text }}</textarea>` `-flase`

`<textarea v-model="text"></textarea>` `-true` 

`! 复选框`

`!! 单一复选框 绑定布尔类型值`

```js
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

`!! 复选框 将多个复选框绑定到同一个数组或集合的值`

```js
<input type="checkbox" id="HTML" value="HTML" v-model="checked" />
<label for="HTML">HTML</label>

<input type="checkbox" id="CSS" value="CSS" v-model="checked" />
<label for="CSS">CSS</label>

<input type="checkbox" id="JavaScript" value="JavaScript" v-model="checked" />
<label for="JavaScript">JS</label>
```

```
const checked = ref([])
```

`! 单选按钮`

```js
<input type="radio" id="nan" value="nan" v-model="radio" />
<label for="nan">nan</label>

<input type="radio" id="nv" value="nv" v-model="radio" />
<label for="nv">nv</label>
```

`! 选择器`

`!! 单选选择器`

```js
<select v-model="selected">
    <option disabled value=""></option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
```

`如果 v-model 表达式的初始值不匹配任何一个选择项 <select> 元素会渲染成一个未选择的状态 在 iOS 上这将导致用户无法选择第一项因为 iOS 在这种情况下不会触发 change 事件 因此我们建议提供一个空值的禁用选项`

`!! 多选选择器 值绑定到一个数组`

```js
<select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
```

`> 修饰符`

`! .lazy`

`默认情况下 v-model 会在每次 input 事件后更新数据` `IME 拼字阶段的状态例外` `添加 lazy 修饰符来改为在每次 change 事件后更新数据`

`! .number` 

`让用户输入自动转换为数字`

`! .trim` 

`自动去除用户输入内容中两端的空格`

```html
<div id="box">
    <input v-model.lazy="text"/>
    {{text}}
    <input type="number" v-model.number="age"/>
    <input type="text" v-model.trim="username"/>
</div>

<script setup>
    import { ref } from 'vue'
    const text = ref("")
    const age = ref(0)
    const username = ref("")
</script>
```


`生命周期`
--

`组件实例在创建时都需要经历一系列的初始化步骤 比如设置好数据侦听 编译模板 挂载实例到 DOM 以及在数据改变时更新 DOM 在此过程中它也会运行被称为生命周期钩子的函数让开发者有机会在特定阶段运行自己的代码`

`> 注册周期钩子`

`每个 VUE 组件实例在创建时都需要经历一系列的初始化步骤 比如设置好数据侦听 编译模板 挂载实例到 DOM 以及在数据改变时更新 DOM 在此过程中它也会运行被称为生命周期钩子的函数让开发者有机会在特定阶段运行自己的代码`

`> 生命周期图示`

![生命周期图示](../naturalResources/img/006-img/001-img/001.png)


`侦听器`
--

`> 基本用法​`

`计算属性允许我们声明性地计算衍生值 然而在有些情况下我们需要在状态变化时执行一些副作用 如更改 DOM 或是根据异步操作的结果去修改另一处的状态`

`在组合式 API 中 我们可以使用 watch 函数在每次响应式状态发生变化时触发回调函数`

```html
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('')
const loading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API.' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <p>
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
</template>
```

`! 侦听数据源类型`

`watch 的第一个参数可以是不同形式的数据源 它可以是一个 ref 包括计算属性、一个响应式对象、一个 Getter 函数或多个数据源组成的数组`

```js
const x = ref(0)
const b = ref(0)

watch(x, (newX) => { 
  console.log(`${newX}`)
}) --单个 ref

watch( 
  () => x.value + b.value, 
  (sum) => {
    console.log(`${sum}`)
  }
) --Getter 函数

watch([x, () => b.value], ([newX, newB]) => { 
  console.log(`x is ${newX} and y is ${newB}`)
}) --多个来源组成的数组
```

`注意 你不能直接侦听响应式对象的属性值`

```js
const obj = reactive({ count: 0 })

watch(obj.count, (count) => {
  console.log(`Count is: ${count}`)
}) --错误 因为 watch 得到的参数是一个 number
```

`这里需要用一个返回该属性的 Getter 函数`

```js
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)
```

`> 深层侦听器`

`直接给 watch 传入一个响应式对象会隐式地创建一个深层侦听器 该回调函数在所有嵌套的变更时都会被触发`

```js
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {

    注意：`newValue` 此处和 `oldValue` 是相等的因为它们是同一个对象！

})

obj.count++
```

`相比之下 一个返回响应式对象的 Getter 函数 只有在返回不同的对象时才会触发回调`

```js
watch(
  () => state.someObject,
  () => {
    仅当 state.someObject 被替换时触发
  }
)
```

`可以给上面这个例子显式地加上 deep 选项 强制转成深层侦听器`

```js
watch(
  () => state.someObject,
  (newValue, oldValue) => {

  },
  { deep: true }
)
```

`在 VUE 3.5+ 中 deep 选项还可以是一个数字表示最大遍历深度 即 VUE 应该遍历对象嵌套属性的级数`

`谨慎使用 深度侦听需要遍历被侦听对象中的所有嵌套的属性 当用于大型数据结构时 开销很大 因此请只在必要时才使用它并且要留意性能`

`> 即时回调的侦听器`

`watch 默认是懒执行的 仅当数据源变化时才会执行回调 但在某些场景中我们希望在创建侦听器时立即执行一遍回调 举例来说我们想请求一些初始数据然后在相关状态更改时重新请求数据 我们可以通过传入 immediate: true 选项来强制侦听器的回调立即执行`

```js
watch(
  source,
  (newValue, oldValue) => {
    立即执行 且当 `source` 改变时再次执行
  },
  { immediate: true }
)
```

`> 一次性侦听器` ​

`每当被侦听源发生变化时侦听器的回调就会执行 如果希望回调只在源变化时触发一次请使用 once: true 选项`

```js
watch(
  source,
  (newValue, oldValue) => {

  },
  { once: true }
)
```

`> watchEffect`

`侦听器的回调使用与源完全相同的响应式状态是很常见的 例如下面的代码在每当 id 的引用发生变化时使用侦听器来加载一个远程资源`

```js
const id = ref(1)
const data = ref(null)

watch(
  id,
  async () => {
    const response = await fetch(
      `https://www.baidu.com/${id.value}`
    )
    data.value = await response.json()
  },
  { immediate: true }
)
```

`特别是注意侦听器是如何两次使用 id 的 一次是作为源 另一次是在回调中`

`我们可以用 watchEffect 函数 来简化上面的代码 watchEffect 允许我们自动跟踪回调的响应式依赖 上面的侦听器可以重写为`

```js
const id = ref(1)
const data = ref(null)

watchEffect(async () => {
  const response = await fetch(
    `https://www.baidu.com/${id.value}`
  )
  data.value = await response.json()
})
```

`这个例子中回调会立即执行 不需要指定 immediate: true 在执行期间它会自动追踪 id.value 作为依赖和计算属性类似 每当 id.value 变化时回调会再次执行 有了 watchEffect 我们不再需要明确传递 id 作为源值`

`对于这种只有一个依赖项的例子来说 watchEffect 的好处相对较小 但是对于有多个依赖项的侦听器来说使用 watchEffect 可以消除手动维护依赖列表的负担 此外如果你需要侦听一个嵌套数据结构中的几个属性 watchEffect 可能会比深度侦听器更有效 因为它将只跟踪回调中被使用到的属性而不是递归地跟踪所有的属性`

`watchEffect 仅会在其同步执行期间才追踪依赖 在使用异步回调时只有在第一个 await 正常工作前访问到的属性才会被追踪`

`> watch vs watchEffect`

`watch 和 watchEffect 都能响应式地执行有副作用的回调 它们之间的主要区别是追踪响应式依赖的方式 watch 只追踪明确侦听的数据源 它不会追踪任何在回调中访问到的东西 另外仅在数据源确实改变时才会触发回调 watch 会避免在发生副作用时追踪依赖 因此我们能更加精确地控制回调函数的触发时机 watchEffect 则会在副作用发生期间追踪依赖 它会在同步执行过程中自动追踪所有能访问到的响应式属性 这更方便而且代码往往更简洁但有时其响应性依赖关系会不那么明确`

`> 副作用清理`

`有时我们可能会在侦听器中执行副作用 例如异步请求 如果在请求完成之前 id 发生了变化 当上一个请求完成时它仍会使用已经过时的 ID 值触发回调 理想情况下我们希望能够在 id 变为新值时取消过时的请求`

`我们可以使用 onWatcherCleanup API 来注册一个清理函数 当侦听器失效并准备重新运行时会被调用`

```js
import { watch, onWatcherCleanup } from 'vue'

watch(id, (newId) => {
  const controller = new AbortController()

  fetch(`/api/${newId}`, { signal: controller.signal }).then(() => { --回调逻辑
  })

  onWatcherCleanup(() => { --终止过期请求
    controller.abort() 
  })
})
```

`请注意 onWatcherCleanup 仅在 Vue 3.5+ 中支持 并且必须在 watchEffect 效果函数或 watch 回调函数的同步执行期间调用 你不能在异步函数的 await 语句之后调用它`

`作为替代 onCleanup 函数还作为第三个参数传递给侦听器回调 以及 watchEffect 作用函数的第一个参数`

```js
watch(id, (newId, oldId, onCleanup) => {
  onCleanup(() => { --清理逻辑
  })
})

watchEffect((onCleanup) => {
  onCleanup(() => { --清理逻辑
  })
})
```

`这在 3.5 之前的版本有效 此外通过函数参数传递的 onCleanup 与侦听器实例相绑定 因此不受 onWatcherCleanup 的同步限制`

`> 回调的触发时机`

`当你更改了响应式状态它可能会同时触发 VUE 组件更新和侦听器回调`

`类似于组件更新用户创建的侦听器回调函数也会被批量处理以避免重复调用 例如如果我们同步将一千个项目推入被侦听的数组中我们可能不希望侦听器触发一千次`

`默认情况下侦听器回调会在父组件更新 (如有) 之后所属组件的 DOM 更新之前被调用这意味着如果你尝试在侦听器回调中访问所属组件的 DOM 那么 DOM 将处于更新前的状态`

`! Post Watchers`​ 

`如果想在侦听器回调中能访问被 VUE 更新之后的所属组件的 DOM 你需要指明 flush: 'post' 选项`

```js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})
```

`后置刷新的 watchEffect 有个更方便的别名 watchPostEffect`

```js
import { watchPostEffect } from 'vue'

watchPostEffect(() => { --在 VUE 更新后执行
})
```

`! 同步侦听器`

`你还可以创建一个同步触发的侦听器它会在 VUE 进行任何更新之前触发`

```js
watch(source, callback, {
  flush: 'sync'
})

watchEffect(callback, {
  flush: 'sync'
})
```

`同步触发的 watchEffect 有个更方便的别名 watchSyncEffect`

```js
import { watchSyncEffect } from 'vue'

watchSyncEffect(() => { --在响应式数据变化时同步执行
})
```

`谨慎使用 同步侦听器不会进行批处理 每当检测到响应式数据发生变化时就会触发 可以使用它来监视简单的布尔值但应避免在可能多次同步修改的数据源 如数组 上使用`

`> 停止侦听器`

`在 setup 或 <script setup> 中用同步语句创建的侦听器会自动绑定到宿主组件实例上 并且会在宿主组件卸载时自动停止 因此在大多数情况下你无需关心怎么停止一个侦听器`

`侦听器必须用同步语句创建 如果用异步回调创建一个侦听器那么它不会绑定到当前组件上 你必须手动停止它以防内存泄漏`

```html
<script setup>
import { watchEffect } from 'vue'

--它会自动停止
watchEffect(() => {}) 

--这个则不会
setTimeout(() => { 
  watchEffect(() => {})
}, 100)
</script>
```

`要手动停止一个侦听器请调用 watch 或 watchEffect 返回的函数`

```js
const unwatch = watchEffect(() => {})

unwatch() --当该侦听器不再需要时
```

`注意 需要异步创建侦听器的情况很少请尽可能选择同步创建 如果需要等待一些异步数据你可以使用条件式的侦听逻辑`

```js
const data = ref(null)

watchEffect(() => {
  if (data.value) { --数据加载后执行某些操
  }
})
```

`易混`
--

`状态被拦截`

`方法 事件绑定逻辑计算可以不用 return 没有缓存`

`计算属性 重视结果 解决模板过重问题必须有 return 只求结果 有缓存 同步`

`watch 重视过程 监听一个值的改变 不用返回值 异步同步`


`模板引用`
--

`虽然声明性渲染模型为你抽象了大部分对 DOM 的直接操作 但在某些情况下我们仍然需要直接访问底层 DOM 元素 要实现这一点我们可以使用特殊的 ref attribute`

`<input ref="input">`

`ref 是一个特殊的 attribute 允许我们在一个特定的 DOM 元素或子组件实例被挂载后获得对它的直接引用`

`> 访问模板引用`

`要在组合式 API 中获取引用 我们可以使用辅助函数 useTemplateRef`

```html
<script setup>
import { useTemplateRef, onMounted } from 'vue'

const input = useTemplateRef('input')

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

`! 3.5 前的用法`

`注意 你只可以在组件挂载后才能访问模板引用 如果你想在模板中的表达式上访问 input 在初次渲染时会是 null 这是因为在初次渲染前这个元素还不存在呢！如果你需要侦听一个模板引用 ref 的变化 确保考虑到其值为 null 的情况`

```js
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {

  }
})
```

`> v-for 中的模板引用​` `v3.2.25 +`

`当在 v-for 中使用模板引用时 相应的引用中包含的值是一个数组 它将在元素被挂载后包含对应整个列表的所有元素`

```html
<script setup>
import { ref, useTemplateRef, onMounted } from 'vue'

const list = ref([])

const itemRefs = useTemplateRef('items')

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```

`> 函数模板引用​`

`除了使用字符串值作名字 ref attribute 还可以绑定为一个函数会在每次组件更新时都被调用 该函数会收到元素引用作为其第一个参数`

`<input :ref="(el) => { 将 el 赋值给一个数据属性或 ref 变量 }">`

`注意我们这里需要使用动态的 :ref 绑定才能够传入一个函数 当绑定的元素被卸载时 函数也会被调用一次 此时的 el 参数会是 null 你当然也可以绑定一个组件方法而不是内联函数`

`> 组件上的 ref`

`模板引用也可以被用在一个子组件上 这种情况下引用中获得的值是组件实例`

```html
<script setup>
import { useTemplateRef, onMounted } from 'vue'
import Child from './Child.vue'

const childRef = useTemplateRef('child')

onMounted(() => {})
</script>

<template>
  <Child ref="child" />
</template>
```

`有一个例外的情况 使用了 <script setup> 的组件是默认私有的 一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西 除非子组件在其中通过 defineExpose 宏显式暴露`

```html
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

`当父组件通过模板引用获取到了该组件的实例时 得到的实例类型为 { a: number, b: number } (ref 都会自动解包 和一般的实例一样)`
