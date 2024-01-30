const{connection}=require("../config/Database")

async function getAll(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM pembayaran_cuci_kendaraan`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function getOne(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `SELECT * FROM pembayaran_cuci_kendaraan where id = ?`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function getOne(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `SELECT * FROM pembayaran_cuci_kendaraan where id = ?`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function tambah1(wp, jp, tp, sp){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT into 
            pembayaran_cuci_kendaraan (waktu_pembayaran, jenis_pembayaran, total_pembayaran, status_pembayaran) 
            values (?, ?, ?, ?)`, [wp, jp, tp, sp]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function apus1(id){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `DELETE FROM pembayaran_cuci_kendaraan WHERE id=?`, [id]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function update1(st){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        ' UPDATE pembayaran_cuci_kendaraan ' +
        ' SET status_pembayaran = ?' +
        'WHERE id = 2', [st]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

// tambah1('2024-01-17 13:18:25', 'ngutang', 189000, 'Belum Dibayar')
// apus1(11)
update1('Ditolak')
