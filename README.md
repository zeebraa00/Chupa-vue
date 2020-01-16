<vue-cli + express-generator + sequelize-cli>

1. express .
2. npm i --save sequelize mysql2
3. sequelize init
----backend 완성(server폴더 만들어서 정리)----
4. vue create . (babel, router, history package.json, n) - 덮어쓰기 유의할 것!!(package.json 등)
5. npm i
----frontend backend 독립적으로 존재하는 상황----
6. npm i --save ejs => jade 대체
(app.js)
app.engine('html', require('ejs'),renderfile);
app.set(('view engine', html);
7. npm i --save connect-history-api-fallback
8. (app.js)
express static 중 public 지우기 (vue충돌)
app.use(history())
if (process.env.NODE_ENV == 'production') {
app.use(express.static(path.join(__dirname, '/../dist')));
} else {
app.use(express.static(path.join(__dirname, '/../dist_dev')));
}
}
9. (package.json)
"build:dev": "vue-cli-service build --mode development --dest dist_dev && set NODE_ENV=development && node server/bin/www",
    "build:dist": "vue-cli-service build --mode production --dest dist && set NODE_ENV=production && node server/bin/www"
10. npm run build:dev
11. npm run build:dist
12. vue.config.js 생성 - module.exports = {productionSourceMap: false}
13. (.gitignore)
/dist_dev에 추가
----설정 끝----


/**** DB 구조 생성 ****/

const models = require('./models');

models.sequelize.sync({
  force: true
});

/**** DB alter table UTF-8 ****/

alter table Post_it convert to character set utf8;


★☆★☆★--<<ubuntu 16.04 LTS setting for web server>>--★☆★☆★

<basic setting>
1. sudo apt-get upadate
2. sudo apt-get upgrade
3. dpkg-reconfigure tzdata

<node & npm>
1. sudo apt-get install -y build-essential
2. sudo apt-get install curl
3. curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash --
4. sudo apt-get install -y nodejs
-npm 버전 업데이트 : npm install -g npm

<mysql>
1. sudo apt-get update
2. sudo apt-get install -y mysql-server
3. mysql_secure_installation
4. mysql -u root -p
5. create database chupa2;
6. create user '사용자'@'localhost' identified by '비밀번호';
7. grant all privileges on *.* to '사용자'@'localhost'; // 모든 db에 대한 권한 부여
- netstat -ntlp | grep mysql : 설치확인
- mysql -uroot -p -e'show databases' : MySQL root 계정 접속, 데이터베이스 조회
- mysql -h localhost -u root -p : MySQL 접속

<phpmyadmin>
1. sudo apt-get install phpmyadmin
2. sudo vi  /etc/apache2/apache2.conf <<< 이 파일을 열어서 => Include /etc/phpmyadmin/apache.conf <<< 이 내용을 추가
3. cd /etc/apache2/sites-available : apache proxy 설정하는 장소
4. sudo vim 000-default.conf : vim 편집기 실행
5. DocumentRoot /var/www/html 아래에 /phpmyadmin !
6. sudo service apache2 restart
7. http://호스트네임/phpmyadmin 접속

<pm2>
1. sudo npm i -g pm2 && npm i pm2
2. pm2 list : 실행되고 있는 것 볼 수 있음
3. pm2 start (server/bin/www) --name "(app name 설정)" : 서버 켜
4. pm2 list : 3번에서 켠 서버가 돌아가는 것을 확인
5. pm2 log (id) : 서버의 로그 볼 수 있음
-pm2 stop (id)
-pm2 start (id)
-pm2 restart (id)

<apache2>
1. sudo apt-get install apache2
2. pm2 start (id) 로 서버 시작
3. sudo a2enmod : proxy / proxy_http 모듈 설치
4. service apache2 restart
5. cd /etc/apache2/sites-available : apache proxy 설정하는 장소
6. sudo vim 000-default.conf : vim 편집기 실행
7. DocumentRoot /var/www/html 아래에
=> ProxyPass / http://localhost:3000/ , ProxyPassReverse / http://localhost:3000/ insert : / 접속 시 3000 port로 접속!
8. service apache2 restart
-sudo service apache2 restart // 재시작
-sudo service apache2 start   // 시작
-sudo service apache2 stop    // 멈춤
-netstat -ntlp // 동작상태 확인

<배포용으로 실행하기>
1. pm2 stop (id)
2. pm2 list
3. export NODE_ENV=production && pm2 start server/bin/www --name "pro_chupaVue" // 배포용 pm2 - 확인 pm2 show (id)
4. npm run build:dist // frontend dist_버전으로 재압축 한 번 해줘야함