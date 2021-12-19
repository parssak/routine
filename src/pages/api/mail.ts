import { GMAIL_CLIENT_ID } from "secrets";

export default async (req, res) => {
  // get inbox
  const { query } = req;
  const { access_token } = query;
  const { error, data } = await fetch(
    `https://www.googleapis.com/gmail/v1/users/me/messages?access_token=${access_token}`
  ).then(res => res.json());
};
