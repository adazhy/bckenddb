const{connection}=require("../config/Database")

async function mitra(){
    const conn = await connection.getConnection()
    try {
       const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM mitra_cuci_kendaraan`,[]
        ); 

        console.log(results[0]);
    } catch (error) {
        console.log(error);
    }
}

async function tambah3(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `INSERT into 
            mitra_cuci_kendaraan (id, nama_mitra, alamat, no_hp, email, jam_operasional, status_mitra, rating, jumlah_review) 
            values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [2,'PT NF', 'Jl.Lenteng Agung', '08123467859302', 'enef@gmail.com', '07:20', 'Non Aktif', '9,6', '100']
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

async function apus3(){
    const conn = await connection.getConnection()
    try {

       const results = await conn.query(
        `DELETE FROM mitra_cuci_kendaraan WHERE id=2`, []
        ); 

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

tambah3()