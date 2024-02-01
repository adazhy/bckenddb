const { response } = require("express");
const{connection}=require("../config/Database")

const notif = async function (req, res) {
    const conn = await connection.getConnection()
    try {
        const query = await conn.query('SELECT * FROM notifikasi_cuci_kendaraan');

        const data = query[0];

        res.status(200).json(data);
    }catch (err) {
        console.log(err);
        res.status(5000).json({ error: "Internal server error"});
    } finally {
        conn.realease();
    }
}

//INSERT
const insert = async function(req,res) {
    const conn = await connection.getConnection();
    try {
        const {i, wk, sn} = req.body

        const testing = await conn.query(
            'INSERT INTO notifikasi_cuci_kendaraan (isi_notifikasi, waktu_kirim, status_notifikasi) VALUES (?, ?, ?)',
        [i, wk, sn]
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

        const {sn} = req.body
        const {id} = req.params
        console.log(id);

        const testing = await conn.query(
        'UPDATE notifikasi_cuci_kendaraan SET status_notifikasi=? WHERE id=?',
        [sn, id]
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
const deletenotif = async function(req,res) {
    const conn = await connection.getConnection();
    const { id } = req.params
    try {
        const testing = await conn.query(
          'DELETE FROM notifikasi_cuci_kendaraan WHERE id = ?',
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
    notif,
    insert,
    update,
    deletenotif
}