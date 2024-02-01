const{connection}=require("../config/Database")


const bayar= async function (req, res) {
    const conn = await connection.getConnection()
    try {
      const query = await conn.query('SELECT * FROM pembayaran_cuci_kendaraan');
  
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
      const {wp, jp, tp, sp} = req.body
  
      const testing = await conn.query(
        'INSERT INTO pembayaran_cuci_kendaraan (waktu_pembayaran, jenis_pembayaran, total_pembayaran, status_pembayaran) VALUES (?, ?, ?, ?)',
        [wp, jp, tp, sp]
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
      const {sp} = req.body
      const {id} = req.params
      console.log(id);
  
      const testing = await conn.query(
        'UPDATE pembayaran_cuci_kendaraan SET status_pembayaran=? WHERE id=?',
        [sp, id]
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
  const deletebayar = async function (req, res) {
    const conn = await connection.getConnection();
    const { id } = req.params;
  
    try {
      const testing = await conn.query(
        'DELETE FROM pembayaran_cuci_kendaraan WHERE id = ?',
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
    bayar,
    insert,
    update,
    deletebayar
  };