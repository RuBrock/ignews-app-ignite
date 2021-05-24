import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: 'Rubens' },
    { id: 2, nome: 'Rusbe' },
    { id: 3, nome: 'Rubs' },
  ]

  return response.json(users);
}