import { NextApiRequest, NextApiResponse } from "next";

const getRequestParams = (email: string) => {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const DATACENTER = API_KEY?.split("-")[1];

  // The root url for the API is https: <dc>.api.mailchimp.com/3.0/
  // https://mailchimp.com/developer/marketing/api/list-members/list-members-info/

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  return {
    url,
    data,
    headers,
  };
};

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== "POST") {
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  // const { email } = JSON.parse(req.body || null);
  const {email} = req.body

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Please provide email",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const data1 = await response.json()

    console.log(data1)
    
    if (data1.status === 400) {
      return res.status(201).json({message: "Already Subscribed"})
    }

    return res.status(200).json({ message: "Subscribed" });
  } catch (error) {
    return res.status(400).json({
      error:
        "Oops ! something went wrong...Please email me at bhic2030@gmail.com, i will add you to the mailing list.",
    });
  }
};  

export default subscribe;
