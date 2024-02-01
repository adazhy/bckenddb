const{connection}=require("../config/Database")


const mitra = async function (req, res) {
    const conn = await connection.getConnection()
    try {
        const query = await conn.query('SELECT * FROM mitra_cuci_kendaraan');

        const data = query[0];

        res.status(200).json(data);
    }catch (err) {
        console.log(err);
        res.status(5000).json({ error: "Internal server error"});
    } finally {
        conn.release();
    }
}

// INSERT
const insert = async function(req,res) {
    const conn = await connection.getConnection();
    try {
        const {nm, al, no, em, jo, sm, r, jr} = req.body

        const testing = await conn.query(
            'INSERT INTO mitra_cuci_kendaraan (nama_mitra, alamat, no_hp, email, jam_operasional, status_mitra, rating, jumlah_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nm, al, no, em, jo, sm, r, jr]
        );
    
        const data = testing[0];

        res.status(200).json('Data User Succesfully Inserted')
    } catch (err) {
        console.log(err);
        response.status(5000).json({ error: "Internal server error"});
    } finally {
        conn.release()
    }
}

//UPDATE
const update = async function(req,res) {
    const conn = await connection.getConnection();
    try {
        console.log(req.body);

        const {sm} = req.body
        const {id} = req.params
        console.log(id);

        const testing = await conn.query(
        'UPDATE mitra_cuci_kendaraan SET status_mitra=? WHERE id=?',
        [sm, id]
        )

        const data = testing[0];

        res.status(200).json('Data User Successfully Update')
    } catch (err) {
        console.log(err);
        response.status(5000).json({ error: "Internal server error"});
    } finally {
        conn.release()
    }
}

//DELETE
const deletemitra = async function(req,res) {
    const conn = await connection.getConnection();
    const { id } = req.params
    try {
        const testing = await conn.query(
          'DELETE FROM mitra_cuci_kendaraan WHERE id = ?',
          [id]
        );

        res.status(200).json('User Successfully Deleted');
    } catch (err) {
        console.log(err);
        res.status(5000).json({ error: "Internal server error" });
    } finally {
        conn.release();
    }
}

module.exports = {
    mitra,
    insert,
    update,
    deletemitra
}