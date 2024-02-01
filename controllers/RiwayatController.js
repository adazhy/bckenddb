const{connection} = require("../config/Database.js")

// ROUTING
const riwayat = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    const query = await conn.query('SELECT * FROM riwayat_transaksi');

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
    const {id_user, id_booking, id_pembayaran, waktu_transaksi} = req.body

    const testing = await conn.query(
      'INSERT INTO riwayat_transaksi (id_user, id_booking, id_pembayaran, waktu_transaksi) VALUES (?, ?, ?, ?)',
      [id_user, id_booking, id_pembayaran, waktu_transaksi]
    );

    const data = testing[0];

    res.status(200).json('Data User Successfully Inserted')
  } catch (err) {
    console.log(err);
    response.status(5000).json({ error: "Internal server error"});
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
    const {waktu_transaksi} = req.body
    const {id} = req.params
    console.log(id);

    const testing = await conn.query(
      'UPDATE riwayat_transaksi SET waktu_transaksi=? WHERE id=?',
      [waktu_transaksi, id]
    );

    const data = testing[0];

    res.status(200).json('Data User Successfully Update')
  } catch (err) {
    console.log(err);
    response.status(5000).json({ error: "Internal server error"});
  } finally {
    conn.release()
  }
}



// DELETE
const deleteDate = async function (req, res) {
  const conn = await connection.getConnection();
  const { id } = req.params;

  try {
    const testing = await conn.query(
      'DELETE FROM riwayat_transaksi WHERE id = ?',
      [id]
    );

    res.status(200).json('User Successfully Deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
}


module.exports = {
  riwayat, 
  insert, 
  update, 
  deleteDate
};