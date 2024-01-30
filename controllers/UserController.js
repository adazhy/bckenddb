
/**
 * Buat ngejalanin File
 * Pake node namafile
 */
const{connection} = require("../config/Database")
async function user(){
const conn = await connection.getConnection()
    try {
        // Cara penggunaan ke 1
        const results = await conn.query(
        
        //   'SELECT * FROM user where nama = ?', ['tes']
        `SELECT * FROM user WHERE nama = 'tes'`, []
        );

        //cara pemggunaan kedua
        const results2 = await conn.execute(
        `SELECT * FROM user WHERE nama = 'tes'`, []
        )
      
        console.log(results2[0]); // results contains rows returned by server
      } catch (err) {
        console.log(err);
      }  finally{
        conn.release()
      }
      
}

async function tambah8(nm, em, ps, tl, jk, al, nh){
  const conn = await connection.getConnection()
  try {
     const results = await conn.query(
      `INSERT INTO 
          user (nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp) 
          VALUES (?, ?, ?, ?, ?, ?, ?)`, [nm, em, ps, tl, jk, al, nh]
      ); 

      console.log(results);
  } catch (error) {
      console.log(error);
  }  finally {
      conn.release()
  }
}

async function apus8(id){
  const conn = await connection.getConnection()
  try {

     const results = await conn.query(
      `DELETE FROM pembayaran_cuci_kendaraan WHERE id=?`, 
      [id]
      ); 

      console.log(results);
  } catch (error) {
      console.log(error);
  }
}

//gabisa deete karna fk ke table lain 
// apus8(3)
// tambah8('ilgo', 'olgo@gmail.com', 'apakehh', '2024-01-13', 'Perempuan', 'Jl. Rumah NO.27', '08098761234')
update

