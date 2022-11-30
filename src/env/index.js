import dotenv from 'dotenv'

const env = process.env.NODE_ENV.trim();

if(env.toLowerCase() == 'dev'){
    dotenv.config({ path: './src/env/.env.dev' })
}else{
    dotenv.config({ path: './src/env/.env' })
}
