import axios from "axios";

export default async (req, res) => {
  // get gmail inbox of user
  const { accessToken, userId } = req.query;
  console.debug('accessToken', accessToken);
  console.debug('userId', userId);
  const { data } = await axios.get(
    `https://www.googleapis.com/gmail/v1/users/${userId}/messages?access_token=${accessToken}`
  );

  console.debug(data)

  res.json(data);
};
