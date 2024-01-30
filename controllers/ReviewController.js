const{connection}=require("../config/Database")

async function review(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM review_mitra`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function tambah6(r, k ,w){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT INTO 
            review_mitra (rating, komentar, waktu_review)
            VALUE (?, ?, ?)`, [r, k, w]
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally{
        conn.release()
    }
}

async function update6(k){
    const conn = await connection.getConnection()
    try {
        const results = await conn.query(
            ' UPDATE review_mitra ' +
            ' SET komentar = ? ' +
            ' WHERE id = 1 ', [k]
        );
    console.log(results);
    } catch(error) {
        console.log(error);
    } finally{
        conn.release
    }
}

async function apus6(id){
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

// tambah6('8,9', 'Bersih', '2024-01-19 12:00:25')
// update6('Saya akan berlangganan')
apus6(3)