const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Mengambil contoh data
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data
 */
router.get('/example', (req, res) => {
  res.json({
    message: 'Ini adalah contoh endpoint',
  });
});

module.exports = router;
