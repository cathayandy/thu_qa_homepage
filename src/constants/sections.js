function reqAll(ctx) {
    const values = ctx.keys().map(ctx);
    const keys = ctx.keys().map(k => k.slice(2));
    return keys.reduce((prev, cur, i) => (prev[cur] = values[i]) && prev, {});
}
const bgs = reqAll(require.context('../assets/images/bgs', true));
const collaborators = reqAll(require.context('../assets/images/collaborators', true));
const icons = reqAll(require.context('../assets/images/icons', true));
const bgHome = bgs['home.png'];

export default [{
    id: 'home',
    title: '首页',
    link: '/',
    jumbotron: {
        title: 'THU对话系统技术平台',
        subtitle: ['始于图灵测试', '变革未来人机对话范式'],
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
    },
    description: {
        cards: [{
            title: '任务导向平台定制',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/tool_doc/1'],
                ['系统入口', '/tool_demo/1'],
            ],
        }, {
            title: '基于匹配的问答系统',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/tool_doc/2'],
                ['系统入口', '/tool_demo/2'],
            ],
        }, {
            title: '基于深度学习的对话机器人',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/tool_doc/3'],
                ['系统入口', '/tool_demo/3'],
            ],
        }],
    },
}, {
    id: 'presentation',
    title: '演示系统',
    link: '/presentation',
    jumbotron: {
        title: '演示系统',
    },
    description: {
        cards: [{
            cover: icons['icon1.png'],
            title: '趣答',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/demo_doc/1'],
                ['系统入口', '/demo_demo/1'],
            ],
        }, {
            cover: icons['icon2.png'],
            title: '点餐',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/demo_doc/1'],
                ['系统入口', '/demo_demo/1'],
            ],
        }, {
            cover: icons['icon3.png'],
            title: '餐厅预约',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            actions: [
                ['使用文档', '/demo_doc/1'],
                ['系统入口', '/demo_demo/1'],
            ],
        }],
    },
}, {
    id: 'algorithm',
    title: '算法代码',
    link: '/algorithm',
    jumbotron: {
        title: '算法代码',
    },
    description: {
        blocks: [{
            title: '意图理解',
            items: [{
                title: '类型化解码器',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/1',
            }, {
                title: '算法代码',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/2',
            }],
        }, {
            title: '对话管理',
            items: [{
                title: '数据共享相关论文',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/3',
            }],
        }, {
            title: '对话生成',
            items: [{
                title: '类型化解码器',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/4',
            }, {
                title: '算法代码',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/5',
            }, {
                title: '类型化解',
                content: '是一个静态的、白盒的软件源代码安全测试工具。',
                link: '/code_details/6',
            }, {
                title: '算法代码算法',
                content: '是一个静态的、白盒的软件源代码安全测试工具。', 
                link: '/code_details/7',
            }],
        }],
    }
}, {
    id: 'data',
    title: '数据共享',
    link: '/data',
    jumbotron: {
        title: '数据共享',
    },
    description: {
        cards: [{
            cover: icons['icon1.png'],
            title: '情绪对话',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            link: '/dataset_details/1',
        }, {
            cover: icons['icon2.png'],
            title: '常识对话',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            link: '/dataset_details/2',
        }, {
            cover: icons['icon3.png'],
            title: '问题生成',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            link: '/dataset_details/3',
        }, {
            cover: icons['icon4.png'],
            title: 'Path Question',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            link: '/dataset_details/4',
        }, {
            cover: icons['icon5.png'],
            title: '句式定制',
            content: '是一个静态的、白盒的软件源代码安全测试工具。其中一个是静态的，白盒的软件还记得看书看到回复源代码安全测试工具，源代码安全测试工具源代码安全测试工具，代码安全测试工具，个静态的、白盒的',
            link: '/dataset_details/5',
        }],
    },
}, {
    id: 'paper',
    title: '相关论文',
    link: '/paper',
}];
