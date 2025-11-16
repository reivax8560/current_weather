export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.WEATHERSTACK_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "Missing 'city' parameter" });
  }

  try {
    const response = await fetch(
      `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Weatherstack request failed", details: err.message });
  }
}
