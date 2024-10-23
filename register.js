const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registrasi pengguna baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nama pengguna
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Email pengguna
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Password pengguna
 *                 example: secret
 *     responses:
 *       201:
 *         description: Pengguna berhasil didaftarkan
 *       400:
 *         description: Permintaan tidak valid
 */
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Validasi input
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Semua field harus diisi',
    });
  }

  // Simpan data (contoh saja, dalam aplikasi nyata Anda akan menyimpan ke database)
  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // Harusnya dienkripsi di aplikasi nyata
  };

  res.status(201).json({
    message: 'Registrasi berhasil',
    user: newUser,
  });
});

module.exports = router;
