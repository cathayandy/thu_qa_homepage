const fs = require('fs');

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
            text: '## Title\n\n* content\n\n'.repeat(30).repeat(id),
                // To test from a real md file:
                // fs.readFileSync('mocker/tool_doc.md').toString(),
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
