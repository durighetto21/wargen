﻿
module.exports = {
    
    title: 'WARGEN (staging)',
    port: 3010,
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres123@localhost:5432/wargenDB'

};