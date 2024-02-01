const{connection} = require("../config/Database.js")

// ROUTING
const review = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    const query = await conn.query('SELECT * FROM review_mitra');

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

    const {rt, ko, wr} = req.body;

    const testing = await conn.query(
      'INSERT INTO review_mitra (rating, komentar, waktu_review) VALUES (?, ?, ?)',
      [rt, ko, wr]
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

// UPDATE
const update = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    console.log(req.body);

    // return 
    const {rating} = req.body
    const {id} = req.params
    console.log(id);

    const testing = await conn.query(
      'UPDATE review_mitra SET rating=? WHERE id=?',
      [rating, id]
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
const deleteRating = async function (req, res) {
  const conn = await connection.getConnection();
  const { id } = req.params;

  try {
    const testing = await conn.query(
      'DELETE FROM review_mitra WHERE id = ?' ,[id]
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
  review, 
  insert,
  update,
  deleteRating
};