export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nama, pesan } = req.body;
    console.log(`Pesan dari ${nama}: ${pesan}`);
    res.status(200).send('Komentar berhasil dikirim ke log server!');
  } else {
    res.status(405).send('Metode tidak didukung');
  }
}
