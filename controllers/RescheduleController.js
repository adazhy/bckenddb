const{connection}=require("../config/Database")


// ROUTING
const reschedule = async function (req, res) {
    const conn = await connection.getConnection()
    try {
      const query = await conn.query('SELECT * FROM reschedule_cuci_kendaraan');
  
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
  
      const {wrb, ar, sr} = req.body;
  
      const testing = await conn.query(
        'INSERT INTO reschedule_cuci_kendaraan (waktu_reschedule_baru, alasan_reschedule, status_reschedule) VALUES (?, ?, ?)',
        [wrb, ar, sr]
      );
  
      const data = testing[0];
  
      res.status(200).json('Data User Successfully Inserted');
    } catch (err) {
      console.log(err);
      res.status(5000).json({ error: "Internal server error"});
    } finally {
      conn.release();
    }
  }
  
//   UPDATE
  const update = async function (req, res) {
    const conn = await connection.getConnection()
    try {
      console.log(req.body);
  
      // return 
      const {wr} = req.body
      const {id} = req.params
      console.log(wr);
  
      const testing = await conn.query(
        'UPDATE reschedule_cuci_kendaraan SET waktu_reschedule_baru =? WHERE id=?',
        [wr, id]
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
  const deleteRes = async function (req, res) {
    const conn = await connection.getConnection();
    const { id } = req.params;
  
    try {
      const testing = await conn.query(
        'DELETE FROM reschedule_cuci_kendaraan WHERE id = ?' ,[id]
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
    reschedule,
    insert,
    update,
    deleteRes
  };

