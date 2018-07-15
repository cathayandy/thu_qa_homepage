const proxy = {
    'GET /api/dataset_details/:id': (req, res) => {
        const { id } = req.params;
        console.log(`GET /api/dataset_details/${id}`);
        res.send({
            title: `Title ${id}`,
            subtitle: `Subtitle ${id}`,
            text: '<p>datasets_details</p>'.repeat(10).repeat(id),
        });
    },
    'GET /api/tool_doc/:id': (req, res) => {
        const { id } = req.params;
        console.log(`GET /api/tool_doc/${id}`);
        res.send({
            title: `Title ${id}`,
            subtitle: `Subtitle ${id}`,
            text: '<p>tool_doc</p>'.repeat(10).repeat(id),
        });
    },
    'GET /api/tool_demo/:id': (req, res) => {
        const { id } = req.params;
        console.log(`GET /api/tool_demo/${id}`);
        res.send({
            title: `Title ${id}`,
            subtitle: `Subtitle ${id}`,
            src: 'http://www.baidu.com',
        });
    },
}
module.exports = proxy;
