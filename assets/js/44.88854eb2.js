(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{417:function(t,v,_){"use strict";_.r(v);var e=_(18),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"vmess-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vmess-协议"}},[t._v("#")]),t._v(" VMess 协议")]),t._v(" "),_("p",[t._v("VMess 是 V2Ray 原创的加密通讯协议。")]),t._v(" "),_("h2",{attrs:{id:"版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),_("p",[t._v("当前版本号为 1。")]),t._v(" "),_("h2",{attrs:{id:"依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),_("h3",{attrs:{id:"底层协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层协议"}},[t._v("#")]),t._v(" 底层协议")]),t._v(" "),_("p",[t._v("VMess 是一个基于 TCP 的协议，所有数据使用 TCP 传输。")]),t._v(" "),_("h3",{attrs:{id:"用户-id"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户-id"}},[t._v("#")]),t._v(" 用户 ID")]),t._v(" "),_("p",[t._v("ID 等价于 "),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("UUID"),_("OutboundLink")],1),t._v("，是一个 16 字节长的随机数，它的作用相当于一个令牌（Token）。\n一个 ID 形如：de305d54-75b4-431b-adb2-eb6b9e546014，几乎完全随机，可以使用任何的 UUID 生成器来生成，比如"),_("a",{attrs:{href:"https://www.uuidgenerator.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("p",[t._v("用户 ID 可在"),_("RouterLink",{attrs:{to:"/developer/config/overview.html"}},[t._v("配置文件")]),t._v("中指定。")],1),t._v(" "),_("h3",{attrs:{id:"函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),_("ul",[_("li",[t._v("MD5: "),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"}},[t._v("MD5 函数"),_("OutboundLink")],1),t._v(" "),_("ul",[_("li",[t._v("输入参数为任意长度的 byte 数组")]),t._v(" "),_("li",[t._v("输出为一个 16 byte 的数组")])])]),t._v(" "),_("li",[t._v("HMAC: "),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code",target:"_blank",rel:"noopener noreferrer"}},[t._v("HMAC 函数"),_("OutboundLink")],1),t._v(" "),_("ul",[_("li",[t._v("输入参数为：\n"),_("ul",[_("li",[t._v("H：散列函数")]),t._v(" "),_("li",[t._v("K：密钥，任意长度的 byte 数组")]),t._v(" "),_("li",[t._v("M：消息，任意长度的 byte 数组")])])])])]),t._v(" "),_("li",[t._v("Shake: "),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/SHA-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("SHA3-Shake128 函数"),_("OutboundLink")],1),t._v(" "),_("ul",[_("li",[t._v("输入参数为任意长度的字符串")]),t._v(" "),_("li",[t._v("输出为任意长度的字符串")])])])]),t._v(" "),_("h2",{attrs:{id:"通讯过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通讯过程"}},[t._v("#")]),t._v(" 通讯过程")]),t._v(" "),_("p",[t._v("VMess 是一个无状态协议，即客户端和服务器之间不需要握手即可直接传输数据，每一次数据传输对之前和之后的其它数据传输没有影响。\nVMess 的客户端发起一次请求，服务器判断该请求是否来自一个合法的客户端。如验证通过，则转发该请求，并把获得的响应发回给客户端。\nVMess 使用非对称格式，即客户端发出的请求和服务器端的响应使用了不同的格式。")]),t._v(" "),_("h2",{attrs:{id:"客户端请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端请求"}},[t._v("#")]),t._v(" 客户端请求")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("16 字节")]),t._v(" "),_("th",[t._v("X 字节")]),t._v(" "),_("th",[t._v("余下部分")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("认证信息")]),t._v(" "),_("td",[t._v("指令部分")]),t._v(" "),_("td",[t._v("数据部分")])])])]),t._v(" "),_("h3",{attrs:{id:"认证信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#认证信息"}},[t._v("#")]),t._v(" 认证信息")]),t._v(" "),_("p",[t._v("认证信息是一个 16 字节的哈希（hash）值，它的计算方式如下：")]),t._v(" "),_("ul",[_("li",[t._v("H = MD5")]),t._v(" "),_("li",[t._v("K = 用户 ID (16 字节)")]),t._v(" "),_("li",[t._v("M = UTC 时间，精确到秒，取值为当前时间的前后 30 秒随机值(8 字节, Big Endian)")]),t._v(" "),_("li",[t._v("Hash = HMAC(H, K, M)")])]),t._v(" "),_("h3",{attrs:{id:"指令部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令部分"}},[t._v("#")]),t._v(" 指令部分")]),t._v(" "),_("p",[t._v("指令部分经过 AES-128-CFB 加密：")]),t._v(" "),_("ul",[_("li",[t._v("Key：MD5(用户 ID + []byte('c48619fe-8f02-49e0-b9e9-edf763e17e21'))")]),t._v(" "),_("li",[t._v("IV：MD5(X + X + X + X)，X = []byte(认证信息生成的时间) (8 字节, Big Endian)")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("16 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("16 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4 位")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4 位")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("2 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("N 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("P 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4 字节")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("版本号 Ver")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("数据加密 IV")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("数据加密 Key")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("响应认证 V")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("选项 Opt")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("余量 P")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("加密方式 Sec")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("保留")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("指令 Cmd")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("端口 Port")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("地址类型 T")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("地址 A")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("随机值")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("校验 F")])])])]),t._v(" "),_("p",[t._v("选项 Opt 细节：（当某一位为 1 时，表示该选项启用）")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("7")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("S")])])])]),t._v(" "),_("p",[t._v("其中：")]),t._v(" "),_("ul",[_("li",[t._v("版本号 Ver：始终为 1；")]),t._v(" "),_("li",[t._v("数据加密 IV：随机值；")]),t._v(" "),_("li",[t._v("数据加密 Key：随机值；")]),t._v(" "),_("li",[t._v("响应认证 V：随机值；")]),t._v(" "),_("li",[t._v("选项 Opt：\n"),_("ul",[_("li",[t._v("S (0x01)：标准格式的数据流（建议开启）；")]),t._v(" "),_("li",[t._v("R (0x02)：客户端期待重用 TCP 连接（V2Ray 2.23+ 弃用）；\n"),_("ul",[_("li",[t._v("只有当 S 开启时，这一项才有效；")])])]),t._v(" "),_("li",[t._v("M (0x04)：开启元数据混淆（建议开启）；\n"),_("ul",[_("li",[t._v("只有当 S 开启时，这一项才有效；")]),t._v(" "),_("li",[t._v("当其项开启时，客户端和服务器端需要分别构造两个 Shake 实例，分别为 RequestMask = Shake(请求数据 IV), ResponseMask = Shake(响应数据 IV)。")])])]),t._v(" "),_("li",[t._v("X：保留")])])]),t._v(" "),_("li",[t._v("余量 P：在校验值之前加入 P 字节的随机值；")]),t._v(" "),_("li",[t._v("加密方式：指定数据部分的加密方式，可选的值有：\n"),_("ul",[_("li",[t._v("0x00：AES-128-CFB；")]),t._v(" "),_("li",[t._v("0x01：不加密；")]),t._v(" "),_("li",[t._v("0x02：AES-128-GCM；")]),t._v(" "),_("li",[t._v("0x03：ChaCha20-Poly1305；")])])]),t._v(" "),_("li",[t._v("指令 Cmd：\n"),_("ul",[_("li",[t._v("0x01：TCP 数据；")]),t._v(" "),_("li",[t._v("0x02：UDP 数据；")])])]),t._v(" "),_("li",[t._v("端口 Port：Big Endian 格式的整型端口号；")]),t._v(" "),_("li",[t._v("地址类型 T：\n"),_("ul",[_("li",[t._v("0x01：IPv4")]),t._v(" "),_("li",[t._v("0x02：域名")]),t._v(" "),_("li",[t._v("0x03：IPv6")])])]),t._v(" "),_("li",[t._v("地址 A：\n"),_("ul",[_("li",[t._v("当 T = 0x01 时，A 为 4 字节 IPv4 地址；")]),t._v(" "),_("li",[t._v("当 T = 0x02 时，A 为 1 字节长度（L） + L 字节域名；")]),t._v(" "),_("li",[t._v("当 T = 0x03 时，A 为 16 字节 IPv6 地址；")])])]),t._v(" "),_("li",[t._v("校验 F：指令部分除 F 外所有内容的 FNV1a hash；")])]),t._v(" "),_("h3",{attrs:{id:"数据部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据部分"}},[t._v("#")]),t._v(" 数据部分")]),t._v(" "),_("p",[t._v("数据部分有两种格式，默认为基本格式。")]),t._v(" "),_("h4",{attrs:{id:"基本格式-（弃用）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本格式-（弃用）"}},[t._v("#")]),t._v(" 基本格式 （弃用）")]),t._v(" "),_("p",[_("strong",[t._v("此格式仅作为向后兼容所用，在之后的版本中可能被删除。")])]),t._v(" "),_("p",[t._v("所有数据均认为是请求的实际内容。这些内容将被发往指令部分所指定的地址。当 Cmd = 0x01 时，这些数据将以 TCP 的形式发送；当 Cmd = 0x02 时，这些数据将以 UDP 形式发送。")]),t._v(" "),_("p",[t._v("此格式支持“不加密”和“AES-128-CFB”两种加密方式，加密的 Key 和 IV 由指令部分指定。")]),t._v(" "),_("h4",{attrs:{id:"标准格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标准格式"}},[t._v("#")]),t._v(" 标准格式")]),t._v(" "),_("p",[t._v("当 Opt(S) 开启时，数据部分使用此格式。实际的请求数据被分割为若干个小块，每个小块的格式如下。服务器校验完所有的小块之后，再按基本格式的方式进行转发。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("2 字节")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("L 字节")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("长度 L")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("数据包")])])])]),t._v(" "),_("p",[t._v("其中：")]),t._v(" "),_("ul",[_("li",[t._v("长度 L：Big Endian 格式的整型，最大值为 2^14；\n"),_("ul",[_("li",[t._v("当 Opt(M) 开启时，L 的值 = 真实值 xor Mask。Mask = (RequestMask.NextByte() << 8) + RequestMask.NextByte()；")])])]),t._v(" "),_("li",[t._v("数据包：由指定的加密方式加密过的数据包；")])]),t._v(" "),_("p",[t._v("在传输结束之前，数据包中必须有实际数据，即除了长度和认证数据之外的数据。当传输结束时，客户端必须发送一个空的数据包，即 L = 0（不加密） 或认证数据长度（有加密），来表示传输结束。")]),t._v(" "),_("p",[t._v("按加密方式不同，数据包的格式如下：")]),t._v(" "),_("ul",[_("li",[t._v("不加密：\n"),_("ul",[_("li",[t._v("L 字节：实际数据；")])])]),t._v(" "),_("li",[t._v("AES-128-CFB：整个数据部分使用 AES-128-CFB 加密\n"),_("ul",[_("li",[t._v("4 字节：实际数据的 FNV1a hash；")]),t._v(" "),_("li",[t._v("L - 4 字节：实际数据；")])])]),t._v(" "),_("li",[t._v("AES-128-GCM：Key 为指令部分的 Key，IV = count (2 字节) + IV (10 字节)。count 从 0 开始递增，每个数据包加 1；IV 为 指令部分 IV 的第 3 至第 12 字节。\n"),_("ul",[_("li",[t._v("L - 16 字节：实际数据；")]),t._v(" "),_("li",[t._v("16 字节：GCM 认证信息")])])]),t._v(" "),_("li",[t._v("ChaCha20-Poly1305：Key = MD5(指令部分 Key) + MD5(MD5(指令部分 Key))，IV = count (2 字节) + IV (10 字节)。count 从 0 开始递增，每个数据包加 1；IV 为 指令部分 IV 的第 3 至第 12 字节。\n"),_("ul",[_("li",[t._v("L - 16 字节：实际数据；")]),t._v(" "),_("li",[t._v("16 字节：Poly1305 认证信息")])])])]),t._v(" "),_("h2",{attrs:{id:"服务器应答"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器应答"}},[t._v("#")]),t._v(" 服务器应答")]),t._v(" "),_("p",[t._v("应答头部数据使用 AES-128-CFB 加密，IV 为 MD5(数据加密 IV)，Key 为 MD5(数据加密 Key)。实际应答数据视加密设置不同而不同。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("M 字节")]),t._v(" "),_("th",[t._v("余下部分")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("响应认证 V")]),t._v(" "),_("td",[t._v("选项 Opt")]),t._v(" "),_("td",[t._v("指令 Cmd")]),t._v(" "),_("td",[t._v("指令长度 M")]),t._v(" "),_("td",[t._v("指令内容")]),t._v(" "),_("td",[t._v("实际应答数据")])])])]),t._v(" "),_("p",[t._v("其中：")]),t._v(" "),_("ul",[_("li",[t._v("响应认证 V：必须和客户端请求中的响应认证 V 一致；")]),t._v(" "),_("li",[t._v("选项 Opt：\n"),_("ul",[_("li",[t._v("0x01：服务器端准备重用 TCP 连接（V2Ray 2.23+ 弃用）；")])])]),t._v(" "),_("li",[t._v("指令 Cmd：\n"),_("ul",[_("li",[t._v("0x01：动态端口指令")])])]),t._v(" "),_("li",[t._v("实际应答数据：\n"),_("ul",[_("li",[t._v("如果请求中的 Opt(S) 开启，则使用标准格式，否则使用基本格式。")]),t._v(" "),_("li",[t._v("格式均和请求数据相同。\n"),_("ul",[_("li",[t._v("当 Opt(M) 开启时，长度 L 的值 = 真实值 xor Mask。Mask = (ResponseMask.NextByte() << 8) + ResponseMask.NextByte()；")])])])])])]),t._v(" "),_("h3",{attrs:{id:"动态端口指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态端口指令"}},[t._v("#")]),t._v(" 动态端口指令")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("2 字节")]),t._v(" "),_("th",[t._v("16 字节")]),t._v(" "),_("th",[t._v("2 字节")]),t._v(" "),_("th",[t._v("1 字节")]),t._v(" "),_("th",[t._v("1 字节")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("保留")]),t._v(" "),_("td",[t._v("端口 Port")]),t._v(" "),_("td",[t._v("用户 ID")]),t._v(" "),_("td",[t._v("AlterID")]),t._v(" "),_("td",[t._v("用户等级")]),t._v(" "),_("td",[t._v("有效时间 T")])])])]),t._v(" "),_("p",[t._v("其中：")]),t._v(" "),_("ul",[_("li",[t._v("端口 Port：Big Endian 格式的整型端口号；")]),t._v(" "),_("li",[t._v("有效时间 T：分钟数；")])]),t._v(" "),_("p",[t._v("客户端在收到动态端口指令时，服务器已开放新的端口用于通信，这时客户端可以将数据发往新的端口。在 T 分钟之后，这个端口将失效，客户端必须重新使用主端口进行通信。")]),t._v(" "),_("h2",{attrs:{id:"注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),_("ul",[_("li",[t._v("为确保向前兼容性，所有保留字段的值必须为 0。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);