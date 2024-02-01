/**
 * Buat ngejalanin File
 * Pake node namafile
 */
const{connection} = require("../config/Database.js")

//ROUTING
const user = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    const query = await conn.query('SELECT * FROM user');

    const data = query[0];

    res.status(200).json(data)
  } catch (err) {
    console.log(err);
    response.status(5000).json({ error: "Internal server error"});
  } finally {
    conn.release();
  }
}

//INSERT
const insert = async function (req, res) {
  const conn = await connection.getConnection()
  try {

    // return 
    const {nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp} = req.body

    const testing = await conn.query(
      'INSERT INTO user (nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp]
    );

    const data = testing[0];

    res.status(200).json('Data User Successfully Inserted')
  } catch (err) {
    console.log(err);
  } finally {
    conn.release()
  }
}

//UPDATE
const update = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    console.log(req.body);

    // return 
    const {nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp} = req.body
    const {id} = req.params
    console.log(id);

    const testing = await conn.query(
      'UPDATE user SET nama = ?, email=?, password=?, tanggal_lahir=?, jenis_kelamin=?, alamat=?, no_hp=? WHERE id=?',
      [nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp, id]
    );

    const data = testing[0];

    res.status(200).json('Data User Successfully Update')
  } catch (err) {
    console.log(err);
  } finally {
    conn.release()
  }
}



//DELETE
const deleteDate = async function (req,res) {
  const conn = await connection.getConnection();
  const { id } = req.params;

  try {
    const testing = await conn.query(
      'DELETE FROM user WHERE id = ?', [id]
    )

    res.status(200).json('UserSuccesfully Deleted')
  } catch(err) {
    console.log(err);
    res.status(5000).json({ error: "Internal server error"});
  } finally {
    conn.release
  }
}


module.exports = {
  user, deleteDate, insert, update
};



// async function user(){
// const conn = await connection.getConnection()
//     try {
//         // Cara penggunaan ke 1
//         const results = await conn.query(
        
//         //   'SELECT * FROM user where nama = ?', ['tes']
//         `SELECT * FROM user WHERE nama = 'tes'`, []
//         );

//         //cara pemggunaan kedua
//         const results2 = await conn.execute(
//         `SELECT * FROM user WHERE nama = 'tes'`, []
//         )
      
//         console.log(results2[0]); // results contains rows returned by server
//       } catch (err) {
//         console.log(err);
//       }  finally{
//         conn.release()
//       }
      
// }

// async function tambah8(nm, em, ps, tl, jk, al, nh){
//   const conn = await connection.getConnection()
//   try {
//      const results = await conn.query(
//       `INSERT INTO 
//           user (nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp) 
//           VALUES (?, ?, ?, ?, ?, ?, ?)`, [nm, em, ps, tl, jk, al, nh]
//       ); 

//       console.log(results);
//   } catch (error) {
//       console.log(error);
//   }  finally {
//       conn.release()
//   }
// }

// async function apus8(id){
//   const conn = await connection.getConnection()
//   try {

//      const results = await conn.query(
//       `DELETE FROM pembayaran_cuci_kendaraan WHERE id=?`, 
//       [id]
//       ); 

//       console.log(results);
//   } catch (error) {
//       console.log(error);
//   }
// }

// //gabisa delete karna fk ke table lain 
// // apus8(3)
// tambah8('danil', 'kudanil@gmail.com', 'appaa', '2024-01-31', 'Lakilaki', 'Jl. Rumah NO.27', '0812344311')

