const{connection}=require("../config/Database")

async function notif(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM notifikasi_cuci_kendaraan`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function tambah4(i, wk, sn){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT into 
            notifikasi_cuci_kendaraan (isi_notifikasi, waktu_kirim, status_notifikasi) 
            values (?, ?, ?)`, 
            [i, wk, sn]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

async function update4(sn){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
            ' UPDATE notifikasi_cuci_kendaraan ' +
            ' SET status_notifikasi = ?' +
            'WHERE id = 2', [sn]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

async function apus4(id){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `DELETE FROM notifikasi_cuci_kendaraan WHERE id=?`, [id]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}


// tambah4('P balap', '2024-12-11 02:59:09', 'Belum Dibaca')
// update4('Dibaca')
apus4(35)