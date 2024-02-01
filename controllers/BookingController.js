const{connection}=require("../config/Database")

const booking = async function (req, res) {
    const conn = await connection.getConnection()
    try {
      const query = await conn.query('SELECT * FROM booking_cuci_kendaraan');
  
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
      const {jk, wb, mp, tp, sb} = req.body
  
      const testing = await conn.query(
        'INSERT INTO booking_cuci_kendaraan (jenis_kendaraan, waktu_booking, metode_pembayaran, total_pembayaran, status_booking) VALUES (?, ?, ?, ?, ?)',
        [jk, wb, mp, tp, sb]
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
      const {sb} = req.body
      const {id} = req.params
      console.log(id);
  
      const testing = await conn.query(
        'UPDATE booking_cuci_kendaraan SET status_booking=? WHERE id=?',
        [sb, id]
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
  const deleteBooking = async function (req, res) {
    const conn = await connection.getConnection();
    const { id } = req.params;
  
    try {
      const testing = await conn.query(
        'DELETE FROM booking_cuci_kendaraan WHERE id = ?',
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
    booking,
    insert,
    update,
    deleteBooking
}