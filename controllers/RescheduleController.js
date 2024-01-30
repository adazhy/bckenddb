const{connection}=require("../config/Database")

async function reschedule(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
            `SELECT * FROM reschedule_cuci_kendaraan`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function tambah5(wrb, ar, sr){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT into 
            reschedule_cuci_kendaraan (waktu_reschedule_baru, alasan_reschedule, status_reschedule)
            values (?, ?, ?)`, 
            [wrb, ar, sr]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally {
        conn.release()
    }
} 

async function update5(ar){
    const conn = await connection.getConnection()
    try {
        const results = await conn.query(
            ' UPDATE reschedule_cuci_kendaraan ' +
            ' SET alasan_reschedule = ? ' +
            ' WHERE id = 5', [ar]
        );
    console.log(results);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function apus5(id){
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

// tambah5('2024-1-17 06:41:17', 'Mau login dulu', 'Menunggu Konfirmasi')
// update5('Rahasia')
apus5(6)