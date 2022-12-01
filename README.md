# express_js

> 현재 프로젝트는 ExpressJS(JavaScript)로 개발을 하며 ExpressJS의 가장 기본적인 설정을 한 프로젝트 입니다.

## Git 전략

- master
  - 가장 자주 사용될거 같은 기능 들만 모아 두며 기본적인 QA가 끝났을때 배포
- hotfix
  - master에 배포하기 전에 테스트 하는 Branch
- develop
  - QA 전 개발
- develop/feature
  - 기능이 겹치면 따로 정의 하는 Branch
  - ex) JPA, MyBatis
- feature
  - 기능 별 개발시 사용 Branch

## document

> 프로젝트 개발시 사용 방법 및 셋팅 방법 작성된 md파일 모음

## DB Test Sql

> 테스트 용 DDL 입니다.

```sql
  CREATE DATABASE `basic`;

  -- basic.`base_table` definition
  CREATE TABLE `base_table` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(100) DEFAULT NULL,
    `content` varchar(100) DEFAULT NULL,
    UNIQUE KEY `base_table_id_IDX` (`id`) USING BTREE
  ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  -- basic.`user` definition
  CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    `username` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### 공통

- [x] **기본 서버 셋팅**
- [x] **환경 설정**
  - [x] dotEnv 설정정
- [x] **MySql 연결**
  - [x] Mybatis 설정
    - 기본적인 CRUD 생성
    - 최대한 재사용 없이 개발
- [x] **테스트 케이스 설정**
  - [] API : Server 실행 후 .http로 테스트
    - PostMan을 주로 사용하나 공개 된 프로젝트 이므로 .http로 대체
- [x] **페이징**
  - [x] Paging Class 생성후 필요시 상속 받아서 사용

### WEB

- [x] jade(pug) 사용

- [ExpressJS 생성](https://github.com/Raconer/express_js/blob/feature/ES6/document/CreateProject.md)
- [ExpressJS 기본 셋팅 및 ES6, NodeDemon, Jest 셋팅](https://github.com/Raconer/express_js/blob/feature/ES6/document/ES6.md)
