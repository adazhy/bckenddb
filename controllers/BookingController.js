//fungsi dipanggil satu kali disetiap file controller yang membutuhkan koneksi kedatabase
const{connection}=require("../config/Database")

//struktur pemanggilan fungsi di semua controller 
async function booking(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM booking_cuci_kendaraan`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }  finally {
        conn.release()
    }
}

async function tambah2() {
    const conn = await connection.getConnection();
    try {
        const results = await conn.query(
            `INSERT INTO 
                booking_cuci_kendaraan (id, id_user, jenis_kendaraan, waktu_booking, metode_pembayaran, total_pembayaran, status_booking) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`, [5, 5, 'becak', '2024-01-26 23:46:25', 'nnti', '120.000', 'Belum_Dikonfirmasi']
        );

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally {
        conn.release();
    }
}

async function update2(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `UPDATE booking_cuci_kendaraan` +
        ` SET status_booking = 'Dikonfirmasi', id_user = '6' ` +
        
        `WHERE id = 5;`
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

async function apus2(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `DELETE FROM pembayaran_cuci_kendaraan WHERE id=4`, []
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

update2();