# 추파를 던져라 소스코드

**dating app using vue.js + node.js + express + sequlize**

---

## Contents

- [Installation](#installation)
- [Documentation](#Documentation)

---

## Installation

### Prerequistes
- Node.js 10.x

### 1. Clone

```shell
$ git clone https://github.com/zeebraa00/Chupa-vue.git
```

### 2. Install Packages

```bash
$ npm install
```

### 3-1. Start development server

```shell
$ npm run build:dev
```

서버 시작 후, 
[`http://localhost:3000`](http://localhost:3000) 에 접속

### 3-2. Start production server
```shell
$ npm run build:dist
```

### 3-3. Deploy production server

```shell
$ export NODE_ENV=production && pm2 start server/bin/www --name "pro_chupaVue"
$ npm run build && pm2 start server/bin/www_prod --name "pro_chupaVue"
```

서버 시작 후, nginx 또는 apache에서 proxy 설정할 것

---

## Documentation

### 개발 언어
- Node.js

### Backend
- [`Express`](https://expressjs.com/ko/)
- [`sequelize`](https://sequelize.org/v4/)
- Database: Mysql

### FrontEnd
- [`Vue.js`](https://vuejs.org/)


Copyright ⓒ 2019 502호청년회 정재헌 All Right Reserved