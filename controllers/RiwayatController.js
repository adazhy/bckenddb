const{connection}=require("../config/Database")

async function riwayat(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM riwayat_transaksi`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function tambah7(id, wt){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT INTO 
        riwayat_transaksi (waktu_transaksi)
        VALUE (?)`, [id, wt]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

async function apus7(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `DELETE FROM riwayat_transaksi WHERE id=2`, []
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

tambah7(2,'2024-01-13 19:00:11')