import { NextApiRequest, NextApiResponse } from "next";
import { Location } from "../../modules/types/Location";

type queryParams = {
     name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const json: Array<Location> = [
        { heading: 'Chicago', subheading: 'City in United States'},
        { heading: 'Los Angeles', subheading: 'City in United States' }
    ];
 res.status(200).json(json.filter(({heading}) => heading.includes(req.query.name)))
}