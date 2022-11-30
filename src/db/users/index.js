import MybatisMapper from 'mybatis-mapper';
import connect from '../index';

MybatisMapper.createMapper([ 'src/db/users/userMapper.xml' ]);


const mapper = 'UsersMapper';
let format = { language: 'sql', indent: '  ' };

export let get = (param) => {
    return new Promise((resolve, reject) => {
        let query = MybatisMapper.getStatement(mapper, 'get', param, format);
        connect(query)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    })
}