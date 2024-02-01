const express = require('express');

const userController = require('../controllers/UserController')
const riwayatController = require('../controllers/RiwayatController')
const reviewController = require('../controllers/ReviewController')
const rescheduleController = require('../controllers/RescheduleController')
const notifController = require('../controllers/NotifController')
const mitraController = require('../controllers/MitraController')
const bookingController = require('../controllers/BookingController')
const bayarController = require('../controllers/BayarController')
const router = express.Router();

//END POINT
//user
router.get('/users', userController.user);
router.post('/users', userController.insert);
router.put('/users/:id', userController.update);
router.delete('/user/:id', userController.deleteDate);

//riwayat
router.get('/riwayat', riwayatController.riwayat);
router.post('/riwayat', riwayatController.insert);
router.put('/riwayat/:id', riwayatController.update);
router.delete('/riwayat/delete/:id', riwayatController.deleteDate);

//review
router.get('/review', reviewController.review);
router.post('/review', reviewController.insert);
router.put('/review/:id', reviewController.update);
router.delete('/review/:id', reviewController.deleteRating);

//reschedule
router.get('/reschedule', rescheduleController.reschedule);
router.post('/reschedule', rescheduleController.insert);
router.put('/reschedule/:id', rescheduleController.update);
router.delete('/reschedule/:id', rescheduleController.deleteRes);

//notifikasi
router.get('/notif', notifController.notif);
router.post('/notif', notifController.insert);
router.put('/notif/:id', notifController.update);
router.delete('/notif/:id', notifController.deletenotif);

//Mitra
router.get('/mitra', mitraController.mitra);
router.post('/mitra', mitraController.insert);
router.put('/mitra/:id', mitraController.update);
router.delete('/mitra/:id', mitraController.deletemitra);

//booking
router.get('/booking', bookingController.booking);
router.post('/booking', bookingController.insert);
router.put('/booking/:id', bookingController.update);
router.delete('/booking/:id', bookingController.deleteBooking);
;

//pembayaran
router.get('/bayar', bayarController.bayar);
router.post('/bayar', bayarController.insert);
router.put('/bayar/:id', bayarController.update);
router.delete('/bayar/:id', bayarController.deletebayar);

module.exports = router;  