module.exports = {
    
    title: 'WARGEN (production)',
    port: 3030,
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres123@localhost:5432/wargenDB'

};