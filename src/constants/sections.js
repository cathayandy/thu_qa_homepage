function reqAll(ctx) {
    const values = ctx.keys().map(ctx);
    const keys = ctx.keys().map(k => k.slice(2));
    return keys.reduce((prev, cur, i) => (prev[cur] = values[i]) && prev, {});
}
const bgs = reqAll(require.context('../assets/images/bgs', true));
const collaborators = reqAll(require.context('../assets/images/collaborators', true));
const bgHome = bgs['home.png'];

export default [{
    id: 'home',
    title: '首页',
    link: '/',
    jumbotron: {
        title: 'THU对话系统技术平台',
        subtitle: ['始于图灵测试', '变革未来人机对话范式'],
        bg: bgHome,
    },
    description: {
        title: '实验室简介：',
        content: '是一个静态的、白盒的软件源代码安全测试工具。它通过内置的五大主要分析引擎数据流、语义、结构、控制流、配置流等对应用。',
        collaborators: [
            ...Object.keys(collaborators).map(k => collaborators[k]),
        ],
    },
}, {
    id: 'tools',
    title: '开发工具',
    link: '/tools',
    jumbotron: {
        title: '开发工具',
        bg: bgHome,
    },
    description: {
        cards: [{
            title: '任务导向平台定制',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }, {
            title: '基于匹配的问答系统',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }, {
            title: '基于深度学习的对话机器人',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }],
    },
}, {
    id: 'presentation',
    title: '演示系统',
    link: '/presentation',
    jumbotron: {
        title: '演示系统',
        bg: bgHome,
    },
    description: {
        cards: [{
            img: bgs['bg1.png'],
            title: '趣答',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }, {
            img: bgs['bg2.png'],
            title: '点餐',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }, {
            img: bgs['bg3.png'],
            title: '餐厅预约',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
        }],
    },
}, {
    id: 'algorithm',
    title: '算法代码',
    link: '/algorithm',
}, {
    id: 'data',
    title: '数据共享',
    link: '/data',
}, {
    id: 'paper',
    title: '相关论文',
    link: '/paper',
}];
