# Homepage for THU Q&A System

Homepage for [THU Q&A System](http://cathayandy.com:8899). Built using [Dva.js](https://github.com/dvajs/dva), [Ant Design](https://ant.design) and [Webpack](https://webpack.js.org/).

## Prerequisite

*   [Node.js v8+](https://nodejs.org)
    
    It is recommanded using [Node Version Manager](https://github.com/creationix/nvm) aka nvm to install Node.js on your server.

    1.  Install nvm

            curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

    2.  Using nvm to install Node.js (e.g. v8)

            nvm install v8
            nvm alias default v8

## Build

    npm install

*   For development:
            
        npm start
    
*   For production:

        npm run build

> Hint: you can use a faster npm registry in Mainland China

    npm config set registry https://registry.npm.taobao.org/

# Development

*   mock

    Edit `mocker/index.js` to mock apis. See https://github.com/jaywcjlove/webpack-api-mocker for details.

* Customization

    *   Edit `src/constants/sections.js` to customize texts.

    *   Add images to `src/assets/images` and import them in `src/constants/sections.js` if you want to add or change imgs.

## Nginx Configuration

If you serve the website using an Nginx server, you have to add a `try_files` rule in your `nginx.conf`:
    
    ...
    server {
        ...
        location / {
            try_files $uri /index.html;
        }
        ...
    }
    ...

## Lisence

[MIT](https://tldrlegal.com/license/mit-license)
